'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Quote Number',
    dataIndex: 'quoteNumber',
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
    quoteNumber: 'Q-2024-001',
    customer: 'Tech Solutions Inc',
    totalAmount: '15000',
    status: 'Pending',
  },
  {
    key: '2',
    quoteNumber: 'Q-2024-002',
    customer: 'Global Manufacturing',
    totalAmount: '25000',
    status: 'Approved',
  },
  {
    key: '3',
    quoteNumber: 'Q-2024-003',
    customer: 'Healthcare Partners',
    totalAmount: '35000',
    status: 'Rejected',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Quotes',
      description: 'Manage your quotes',
      buttonText: 'Create Quote',
      buttonLink: '/account/quotes/create',
    },
    {
      title: 'Export Quotes',
      description: 'Export your quotes',
      buttonText: 'Export Quotes',
      buttonLink: '/account/quotes/export',
    }
  ]
};

export default function Quotes() {
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
