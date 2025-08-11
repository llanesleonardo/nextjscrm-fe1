'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Company Name',
    dataIndex: 'companyName',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Industry',
    dataIndex: 'industry',
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
    companyName: 'Tech Solutions Inc',
    industry: 'Technology',
    location: 'San Francisco, CA',
  },
  {
    key: '2',
    companyName: 'Global Manufacturing',
    industry: 'Manufacturing',
    location: 'Chicago, IL',
  },
  {
    key: '3',
    companyName: 'Healthcare Partners',
    industry: 'Healthcare',
    location: 'Boston, MA',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Companies',
      description: 'Manage your companies',
      buttonText: 'Add Company',
      buttonLink: '/account/companies/add',
    },
    {
      title: 'Export Companies',
      description: 'Export your companies',
      buttonText: 'Export Companies',
      buttonLink: '/account/companies/export',
    }
  ]
};

export default function Companies() {
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
