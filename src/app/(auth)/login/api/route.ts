// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set({
    name: 'token',
    value: 'mock-token',
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 day
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}
