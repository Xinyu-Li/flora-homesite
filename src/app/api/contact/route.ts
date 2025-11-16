import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const REQUIRED_ENV = ["EMAIL_HOST", "EMAIL_PORT", "EMAIL_SECURE", "EMAIL_USER", "EMAIL_PASS"] as const;

const buildTransporter = () => {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing email environment variables: ${missing.join(", ")}`);
  }

  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const trimmed = {
      name: body.name?.trim(),
      email: body.email?.trim(),
      message: body.message?.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.message) {
      return NextResponse.json({ message: "Name, email, and message are required." }, { status: 400 });
    }

    const transporter = buildTransporter();
    const fromAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER;
    if (!fromAddress) {
      throw new Error("Missing EMAIL_FROM or EMAIL_USER value.");
    }

    await transporter.sendMail({
      from: fromAddress,
      replyTo: `"${trimmed.name}" <${trimmed.email}>`,
      to: "xinyu.li1@monash.edu",
      cc: "tony.li@monash.edu",
      subject: "FLoRA Contact",
      text: `From: ${trimmed.name} (${trimmed.email})\n\n${trimmed.message}`,
      html: `
        <p>You have a new message from floraengine.org</p>
        <p><strong>Name:</strong> ${trimmed.name}</p>
        <p><strong>Email:</strong> ${trimmed.email}</p>
        <p><strong>Message:</strong></p>
        <p>${trimmed.message.replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Failed to send contact message", error);
    const status =
      error instanceof Error && error.message.includes("Missing email") ? 500 : 502;
    const message =
      error instanceof Error && status === 500
        ? error.message
        : "Unable to send message right now. Please try again later.";
    return NextResponse.json({ message }, { status });
  }
}
