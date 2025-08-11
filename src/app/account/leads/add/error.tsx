'use client';

import { useEffect } from 'react';
import { Button } from 'antd';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-6">Failed to load the add lead page.</p>
      <Button type="primary" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
