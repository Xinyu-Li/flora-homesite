// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    console.log('POST /home/api/contact 被调用'); // 调试日志
    try {
        const { name, email, message } = await req.json();
        console.log('收到的表单数据:', { name, email, message }); // 调试日志

        // 简单的输入验证
        if (!name || !email || !message) {
            console.log('表单验证失败: 所有字段都是必填的。');
            return NextResponse.json({ message: '所有字段都是必填的。' }, { status: 400 });
        }

        // 创建 Nodemailer 传输器
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: process.env.EMAIL_SECURE === 'true',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 邮件选项
        const mailOptions = {
            from: `"${name}" <${email}>`, // 发件人地址（用户填写的邮箱）
            to: 'tony.li@monash.edu', // 收件人地址（您的邮箱）
            subject: '新联系表单提交',
            text: `
                你有一个新的联系表单提交：

                名字: ${name}
                邮箱: ${email}
                信息: ${message}
            `,
            html: `
                <p>你有一个新的联系表单提交：</p>
                <p><strong>名字:</strong> ${name}</p>
                <p><strong>邮箱:</strong> ${email}</p>
                <p><strong>信息:</strong></p>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log('邮件发送成功');

        return NextResponse.json({ message: '消息发送成功。' }, { status: 200 });
    } catch (error) {
        console.error('发送邮件时出错:', error);
        return NextResponse.json({ message: '发送邮件时出错。' }, { status: 500 });
    }
}
