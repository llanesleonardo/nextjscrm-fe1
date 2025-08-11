'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Payment ID',
    dataIndex: 'paymentId',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
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
    paymentId: 'PAY-2024-001',
    customer: 'Tech Solutions Inc',
    amount: '15000',
    status: 'Paid',
  },
  {
    key: '2',
    paymentId: 'PAY-2024-002',
    customer: 'Global Manufacturing',
    amount: '25000',
    status: 'Pending',
  },
  {
    key: '3',
    paymentId: 'PAY-2024-003',
    customer: 'Healthcare Partners',
    amount: '35000',
    status: 'Failed',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Payments',
      description: 'Manage your payments',
      buttonText: 'Record Payment',
      buttonLink: '/account/payments/record',
    },
    {
      title: 'Export Payments',
      description: 'Export your payments',
      buttonText: 'Export Payments',
      buttonLink: '/account/payments/export',
    }
  ]
};

export default function Payments() {
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
