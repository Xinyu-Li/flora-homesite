import { useState } from 'react';
import { Button, Form, Input, Typography, message, Card } from 'antd';
import styles from './ContactClient.module.scss';

const { Title, Paragraph } = Typography;

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactClient = () => {
  const [form] = Form.useForm<ContactFormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      // Open email client with pre-filled information
      const subject = encodeURIComponent(`FLoRA Contact from ${values.name}`);
      const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`);
      window.location.href = `mailto:tony.li@monash.edu?subject=${subject}&body=${body}`;
      message.success('Opening your email client...');
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error('We could not process your request. Please email tony.li@monash.edu directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        variant="borderless"
        styles={{
          body: {
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          },
        }}
      >
        <Title level={2} className={styles.title}>
          Contact the FLoRA team
        </Title>
        <Paragraph className={styles.description}>
          Have a research idea, deployment question, or want to co-design an intervention? Drop a note and we will
          connect you with the right collaborator.
        </Paragraph>

        <Form<ContactFormValues> layout="vertical" form={form} onFinish={handleSubmit} className={styles.form}>
          <Form.Item
            label="Full name"
            name="name"
            rules={[{ required: true, message: 'Tell us who we should reply to.' }]}
          >
            <Input placeholder="Ada Lovelace" size="large" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please share a contact email.' },
              { type: 'email', message: 'That email looks invalid.' },
            ]}
          >
            <Input placeholder="you@example.org" size="large" />
          </Form.Item>
          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Let us know how we can help.' }]}
          >
            <Input.TextArea rows={5} placeholder="Share context, goals, timelines, or links." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isSubmitting} className={styles.submitButton}>
              Send message
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default ContactClient;
