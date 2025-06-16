'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGoogle, FaMicrosoft } from 'react-icons/fa';

export default function SignupForm() {
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      alert('Passwords do not match');
      return;
    }
    console.log('Sign up:', form);
  };

  return (
    <section className='bg-white py-20'>
    <div className="max-w-md mx-auto p-8 bg-white shadow rounded-lg border">
      <h2 className="text-2xl font-bold mb-2 text-black">Create Your Account</h2>
      <p className="text-black mb-6">Sign up to get started</p>

      <button className="w-full flex items-center justify-center gap-2 border rounded py-2 mb-3 text-black bg-white hover:text-[#014fa7] transition cursor-pointer">
        <FaGoogle /> Sign up with Google
      </button>
      <button className="w-full flex items-center justify-center gap-2 border rounded py-2 mb-6 text-black bg-white hover:text-[#014fa7] transition cursor-pointer">
        <FaMicrosoft /> Sign up with Microsoft
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-black">Email</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-black">Password</label>
          <input
            name="password"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-black">Confirm Password</label>
          <input
            name="confirm"
            type="password"
            required
            value={form.confirm}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded focus:ring focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </form>

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
