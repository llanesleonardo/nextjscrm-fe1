import { Spin } from 'antd';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[400px] p-6">
      <Spin size="large" />
    </div>
  );
}
