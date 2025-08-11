'use client';

import Link from 'next/link';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';
import { Form, Input, Button, Divider } from 'antd';
import { useState } from 'react';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values: { email: string; password: string }) => {
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      console.log('Login:', values);
    }, 1000);
  };

  return (
    <section className='bg-white py-20'>
      <div className="max-w-md mx-auto p-8 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-2 text-black">Welcome Back</h2>
        <p className="text-gray-600 mb-6 text-black">Log in to your account</p>

        <Button
          block
          icon={<FaGoogle />}
          className="flex items-center justify-center gap-2 mb-3"
          color="default" variant="outlined"
        >
          Sign in with Google
        </Button>
        <Button
          block
          icon={<FaMicrosoft />}
          className="flex items-center justify-center gap-2 mb-6"
          color="default" variant="outlined"
        >
          Sign in with Microsoft
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
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="Your password" />
          </Form.Item>

          <div className="text-right text-sm mb-4 text-black">
            <Link href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</Link>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>

        <p className="text-xs text-gray-500 mt-4">
          By proceeding, you agree to the{' '}
          <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and{' '}
          <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
        </p>

        <p className="text-sm text-center mt-6 text-black">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </section>
  );
}
