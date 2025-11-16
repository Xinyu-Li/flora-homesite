import type { Metadata } from "next";
import MainLayout from "@/components/layout/MainLayout";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the FLoRA Engine research and engineering teams.",
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        <div>
          <p style={{ textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--muted)", marginBottom: "0.5rem" }}>
            Say hello
          </p>
          <h1 style={{ margin: 0 }}>Collaborate with us</h1>
          <p>
            We love partnering with educators, learning scientists, and builders who want to advance self-regulated learning
            with ethical AI.
          </p>
        </div>
        <ContactClient />
      </div>
    </MainLayout>
  );
}
