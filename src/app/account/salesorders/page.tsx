'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Order Number',
    dataIndex: 'orderNumber',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalAmount',
    render: (text: React.ReactNode) => <span>${text}</span>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    orderNumber: 'SO-2024-001',
    customer: 'Tech Solutions Inc',
    totalAmount: '15000',
    status: 'Processing',
  },
  {
    key: '2',
    orderNumber: 'SO-2024-002',
    customer: 'Global Manufacturing',
    totalAmount: '25000',
    status: 'Shipped',
  },
  {
    key: '3',
    orderNumber: 'SO-2024-003',
    customer: 'Healthcare Partners',
    totalAmount: '35000',
    status: 'Delivered',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Sales Orders',
      description: 'Manage your sales orders',
      buttonText: 'Create Order',
      buttonLink: '/account/salesorders/create',
    },
    {
      title: 'Export Orders',
      description: 'Export your sales orders',
      buttonText: 'Export Orders',
      buttonLink: '/account/salesorders/export',
    }
  ]
};

export default function SalesOrders() {
  const TableComponentProps = {
    columns: columns,
    dataSource: data,
  };
  
  return (
    <div>
      <ActionsBarComponent {...ActionsBarComponentProps} />
      <TableComponent {...TableComponentProps} />
    </div>
  );
}
