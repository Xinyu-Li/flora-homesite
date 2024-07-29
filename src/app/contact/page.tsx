'use client';
import React from 'react';
import { Form, Input, Button, Row, Col, Typography, message } from 'antd';
import MainLayout from '../layouts/MainLayout';


const { Title, Paragraph } = Typography;

const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px', // 设置最大宽度
    margin: '0 auto', // 居中对齐
    padding: '20px', // 添加内边距
    backgroundColor: '#fff', // 背景颜色
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // 添加阴影
    borderRadius: '8px', // 圆角
};

const Contact: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
        message.success('Your message has been sent successfully!');
        form.resetFields();
    };

    return (
        <MainLayout>
            <div style={{ padding: '50px 0', backgroundColor: '#f0f2f5' }}>
                <div style={containerStyle}>
                    <Title level={2} style={{ textAlign: 'center' }}>
                        Contact Us
                    </Title>
                    <Paragraph style={{ textAlign: 'center' }}>
                        If you have any questions, or you would like to know more about FLoRA, feel free to reach out to us using the form below.
                    </Paragraph>
                    <Form form={form} name="contact" layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
                        <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name!' }]}>
                            <Input placeholder="Your name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { type: 'email', message: 'The input is not valid E-mail!' },
                                { required: true, message: 'Please enter your email!' },
                            ]}
                        >
                            <Input placeholder="Your email" />
                        </Form.Item>
                        <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter your message!' }]}>
                            <Input.TextArea rows={4} placeholder="Your message" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </MainLayout>
    );
};

export default Contact;
