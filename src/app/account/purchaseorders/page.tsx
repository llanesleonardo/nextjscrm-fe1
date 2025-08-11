'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'PO Number',
    dataIndex: 'poNumber',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Supplier',
    dataIndex: 'supplier',
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
    poNumber: 'PO-2024-001',
    supplier: 'Tech Supplies Co',
    totalAmount: '5000',
    status: 'Pending',
  },
  {
    key: '2',
    poNumber: 'PO-2024-002',
    supplier: 'Office Equipment Inc',
    totalAmount: '7500',
    status: 'Approved',
  },
  {
    key: '3',
    poNumber: 'PO-2024-003',
    supplier: 'Software Solutions Ltd',
    totalAmount: '12000',
    status: 'Received',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Purchase Orders',
      description: 'Manage your purchase orders',
      buttonText: 'Create PO',
      buttonLink: '/account/purchaseorders/create',
    },
    {
      title: 'Export POs',
      description: 'Export your purchase orders',
      buttonText: 'Export POs',
      buttonLink: '/account/purchaseorders/export',
    }
  ]
};

export default function PurchaseOrders() {
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
