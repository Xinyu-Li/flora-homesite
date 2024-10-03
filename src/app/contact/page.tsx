'use client';
import React, { useState } from 'react';
import { Form, Input, Button, Typography, message, Modal } from 'antd';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

const { Title, Paragraph } = Typography;

const Contact: React.FC = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        form.resetFields();
    };

    // src/app/contact/page.tsx

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            // 修改为包含 /home 的路径
            const response = await axios.post('/home/api/contact', values);
            if (response.status === 200) {
                message.success('您的消息已成功发送！');
                form.resetFields();
                setIsModalVisible(false);
            } else {
                message.error('发送消息时出现问题，请稍后再试。');
            }
        } catch (error) {
            console.error('发送消息时出错:', error);
            message.error('发送消息时出错，请稍后再试。');
        } finally {
            setLoading(false);
        }
    };


    return (
        <MainLayout>
            <div style={{ padding: '50px 0', backgroundColor: '#f0f2f5', textAlign: 'center' }}>
                <Title level={2}>Contact Us</Title>
                <Paragraph>
                    If you have any questions, or you would like to know more about FLoRA, feel free to reach out to us using the button below.
                </Paragraph>
                <Button type="primary" onClick={showModal}>
                    Contact Us
                </Button>
                <Modal
                    title="Contact Us"
                    open={isModalVisible}
                    onCancel={handleCancel}
                    footer={null}
                    destroyOnClose
                >
                    <Form
                        form={form}
                        name="contact"
                        layout="vertical"
                        onFinish={onFinish}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="name"
                            label="Name"
                            rules={[{ required: true, message: 'Please enter your name!' }]}
                        >
                            <Input placeholder="Your name" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { type: 'email', message: 'The input is not a valid E-mail!' },
                                { required: true, message: 'Please enter your email!' },
                            ]}
                        >
                            <Input placeholder="Your email" />
                        </Form.Item>
                        <Form.Item
                            name="message"
                            label="Message"
                            rules={[{ required: true, message: 'Please enter your message!' }]}
                        >
                            <Input.TextArea rows={4} placeholder="Your message" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block loading={loading}>
                                Send Message
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </MainLayout>
    );
};

export default Contact;
