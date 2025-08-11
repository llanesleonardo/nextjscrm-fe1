'use client';

import { useEffect } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">Failed to load the lead details.</p>
      <div className="flex gap-4">
        <Button type="primary" onClick={reset}>
          Try again
        </Button>
        <Button onClick={() => router.push('/account/leads')}>
          Back to Leads
        </Button>
      </div>
    </div>
  );
}
