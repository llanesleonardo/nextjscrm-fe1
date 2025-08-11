'use client';

import { useState } from 'react';
import { Form, Input, Button, message as antMessage } from 'antd';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const [form] = Form.useForm();

  const handleFinish = (values: { name: string; email: string; message: string }) => {
    console.log('Form data submitted:', values);
    setSubmitted(true);
    // Here you could send to an API route or external service
    antMessage.success('Thanks for your message! ✅');
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow border">
      <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>

      {submitted ? (
        <p className="text-green-600 font-medium">Thanks for your message! ✅</p>
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          className="space-y-4"
        >
          <Form.Item
            label={<span className="font-medium text-black">Name</span>}
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-black">Email</span>}
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="Your email" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-black">Message</span>}
            name="message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <Input.TextArea rows={4} placeholder="Your message" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
}
