'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'SKU',
    dataIndex: 'sku',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    productName: 'CRM Software License',
    sku: 'CRM-001',
    quantity: '50',
    location: 'Warehouse A',
  },
  {
    key: '2',
    productName: 'Training Package',
    sku: 'TRN-002',
    quantity: '25',
    location: 'Warehouse B',
  },
  {
    key: '3',
    productName: 'Support Plan',
    sku: 'SUP-003',
    quantity: '100',
    location: 'Warehouse A',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Inventory',
      description: 'Manage your inventory',
      buttonText: 'Add Item',
      buttonLink: '/account/inventories/add',
    },
    {
      title: 'Export Inventory',
      description: 'Export your inventory',
      buttonText: 'Export Inventory',
      buttonLink: '/account/inventories/export',
    }
  ]
};

export default function Inventories() {
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
