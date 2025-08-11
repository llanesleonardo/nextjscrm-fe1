'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { Form, Input, Button, Divider } from 'antd';

export default function SignupForm() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: { email: string; password: string; confirm: string }) => {
    if (values.password !== values.confirm) {
      // Antd Form validation will catch this, but fallback just in case
      alert('Passwords do not match');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Sign up:', values);
    }, 1000);
  };

  return (
    <section className='bg-white py-20'>
      <div className="max-w-md mx-auto p-8 bg-white shadow rounded-lg border">
        <h2 className="text-2xl font-bold mb-2 text-black">Create Your Account</h2>
        <p className="text-black mb-6">Sign up to get started</p>

        <Button
          block
          icon={<FaGoogle />}
          className="flex items-center justify-center gap-2 mb-3"
          color="default" variant="outlined"
        >
          Sign up with Google
        </Button>
        <Button
          block
          icon={<FaMicrosoft />}
          className="flex items-center justify-center gap-2 mb-6"
          color="default" variant="outlined"
        >
          Sign up with Microsoft
        </Button>

        <Divider plain>or</Divider>

        <Form
          layout="vertical"
          onFinish={onFinish}
          className="space-y-4"
          requiredMark={false}
        >
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
            label={<span className="font-medium text-black">Password</span>}
            name="password"
            rules={[
              { required: true, message: 'Please enter your password' },
              { min: 6, message: 'Password must be at least 6 characters' },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Your password" />
          </Form.Item>

          <Form.Item
            label={<span className="font-medium text-black">Confirm Password</span>}
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Passwords do not match'));
                },
              }),
            ]}
          >
            <Input.Password placeholder="Confirm your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <p className="text-xs text-gray-500 mt-4">
          By proceeding, you agree to the{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </p>

        <p className="text-sm text-center mt-6 text-black">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">Log in</Link>
        </p>
      </div>
    </section>
  );
}
