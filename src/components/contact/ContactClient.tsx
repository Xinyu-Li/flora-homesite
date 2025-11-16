'use client';

import { useMemo, useState } from "react";
import { Button, Form, Input, Typography, message, Card } from "antd";

const { Title, Paragraph } = Typography;

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactClient = () => {
  const [form] = Form.useForm<ContactFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const basePath = useMemo(() => process.env.NEXT_PUBLIC_BASE_PATH ?? "", []);

  const handleSubmit = async (values: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      const response = await fetch(`${basePath}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error?.message ?? "Unable to send message");
      }

      message.success("Thanks for reaching out - we will reply shortly.");
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error("We could not send your message. Please try again or email tony.li@monash.edu.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      variant="borderless"
      styles={{
        body: {
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        },
      }}
    >
      <Title level={2} style={{ margin: 0 }}>
        Contact the FLoRA team
      </Title>
      <Paragraph>
        Have a research idea, deployment question, or want to co-design an intervention? Drop a note and we will
        connect you with the right collaborator.
      </Paragraph>

      <Form<ContactFormValues> layout="vertical" form={form} onFinish={handleSubmit}>
        <Form.Item
          label="Full name"
          name="name"
          rules={[{ required: true, message: "Tell us who we should reply to." }]}
        >
          <Input placeholder="Ada Lovelace" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please share a contact email." },
            { type: "email", message: "That email looks invalid." },
          ]}
        >
          <Input placeholder="you@example.org" />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[{ required: true, message: "Let us know how we can help." }]}
        >
          <Input.TextArea rows={5} placeholder="Share context, goals, timelines, or links." />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isSubmitting}>
            Send message
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ContactClient;
