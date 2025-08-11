import Link from 'next/link';
import { Button } from 'antd';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
      <h2 className="text-2xl font-bold mb-4">Lead Not Found</h2>
      <p className="text-gray-600 mb-6">The lead you are looking for doesn not exist.</p>
      <Link href="/account/leads">
        <Button type="primary">Return to Leads</Button>
      </Link>
    </div>
  );
}
