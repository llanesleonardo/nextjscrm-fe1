'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Company',
    dataIndex: 'company',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    name: 'John Smith',
    email: 'john.smith@techsolutions.com',
    phone: '+1 (555) 123-4567',
    company: 'Tech Solutions Inc',
  },
  {
    key: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@globalmfg.com',
    phone: '+1 (555) 234-5678',
    company: 'Global Manufacturing',
  },
  {
    key: '3',
    name: 'Mike Davis',
    email: 'mike.davis@healthcare.com',
    phone: '+1 (555) 345-6789',
    company: 'Healthcare Partners',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Contacts',
      description: 'Manage your contacts',
      buttonText: 'Add Contact',
      buttonLink: '/account/contacts/add',
    },
    {
      title: 'Export Contacts',
      description: 'Export your contacts',
      buttonText: 'Export Contacts',
      buttonLink: '/account/contacts/export',
    }
  ]
};

export default function Contacts() {
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
