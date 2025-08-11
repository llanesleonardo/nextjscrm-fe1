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
    title: 'Price',
    dataIndex: 'price',
    render: (text: React.ReactNode) => <span>${text}</span>,
  },
  {
    title: 'Category',
    dataIndex: 'category',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    productName: 'CRM Software License',
    sku: 'CRM-001',
    price: '999',
    category: 'Software',
  },
  {
    key: '2',
    productName: 'Training Package',
    sku: 'TRN-002',
    price: '299',
    category: 'Services',
  },
  {
    key: '3',
    productName: 'Support Plan',
    sku: 'SUP-003',
    price: '199',
    category: 'Services',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Products',
      description: 'Manage your products',
      buttonText: 'Add Product',
      buttonLink: '/account/products/add',
    },
    {
      title: 'Export Products',
      description: 'Export your products',
      buttonText: 'Export Products',
      buttonLink: '/account/products/export',
    }
  ]
};

export default function Products() {
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
