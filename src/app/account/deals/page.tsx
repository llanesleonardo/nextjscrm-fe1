  'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';

const columns = [
  {
    title: 'Deal Name',
    dataIndex: 'dealName',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    render: (text: React.ReactNode) => <span>${text}</span>,
  },
  {
    title: 'Stage',
    dataIndex: 'stage',
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
    dealName: 'Enterprise Software License',
    value: '50000',
    stage: 'Proposal',
    company: 'Tech Solutions Inc',
  },
  {
    key: '2',
    dealName: 'Manufacturing Equipment',
    value: '75000',
    stage: 'Negotiation',
    company: 'Global Manufacturing',
  },
  {
    key: '3',
    dealName: 'Healthcare System Integration',
    value: '120000',
    stage: 'Closed Won',
    company: 'Healthcare Partners',
  },
];

const ActionsBarComponentProps = {
  items: [
    {
      title: 'Deals',
      description: 'Manage your deals',
      buttonText: 'Add Deal',
      buttonLink: '/account/deals/add',
    },
    {
      title: 'Export Deals',
      description: 'Export your deals',
      buttonText: 'Export Deals',
      buttonLink: '/account/deals/export',
    }
  ]
};

export default function Deals() {
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
