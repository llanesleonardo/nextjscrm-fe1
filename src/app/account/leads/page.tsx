'use client';
import React from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';
import { FileOutlined, UsergroupAddOutlined } from '@ant-design/icons';

interface LeadData {
  key: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: string;
  leadSource: string;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: React.ReactNode, record?: LeadData) => (
      <a href={`/account/leads/${record?.key}`}>{text}</a>
    ),
  },
  {
    title: 'Company',
    dataIndex: 'company',
    render: (text: React.ReactNode) => <span>{text}</span>,
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
    title: 'Status',
    dataIndex: 'status',
    render: (text: React.ReactNode) => {
      const status = text as string;
      const colors: { [key: string]: string } = {
        'New': 'blue',
        'Contacted': 'orange',
        'Qualified': 'green',
        'Proposal': 'purple',
        'Negotiation': 'gold',
        'Closed Won': 'green',
        'Closed Lost': 'red'
      };
      return <span style={{ color: colors[status] || 'default' }}>{status}</span>;
    },
  },
  {
    title: 'Lead Source',
    dataIndex: 'leadSource',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
];

const data = [
  {
    key: '1',
    name: 'John Doe',
    company: 'Tech Solutions Inc.',
    email: 'john.doe@techsolutions.com',
    phone: '+1 (555) 123-4567',
    status: 'Qualified',
    leadSource: 'Website',
  },
  {
    key: '2',
    name: 'Jane Smith',
    company: 'Healthcare Plus',
    email: 'jane.smith@healthcare.com',
    phone: '+1 (555) 987-6543',
    status: 'Contacted',
    leadSource: 'Referral',
  },
  {
    key: '3',
    name: 'Mike Johnson',
    company: 'Finance Corp',
    email: 'mike.johnson@finance.com',
    phone: '+1 (555) 456-7890',
    status: 'New',
    leadSource: 'Social Media',
  },
  {
    key: '4',
    name: 'Sarah Wilson',
    company: 'Education First',
    email: 'sarah.wilson@education.com',
    phone: '+1 (555) 321-0987',
    status: 'Proposal',
    leadSource: 'Email Campaign',
  },
];

const ActionsBarComponentProps = {
   items: [
    {
        title: 'Leads',
        description: 'Manage your leads',
        buttonText: 'Add Lead',
        buttonLink: '/account/leads/add',
        buttonColor: 'primary' as const,
        ButtonDisplay: 'solid' as const,
        icon: <UsergroupAddOutlined />,
    },
    {//export button
        title: 'Export Leads',
        description: 'Export your leads',
        buttonText: 'Export Leads',
        buttonLink: '/account/leads/export',
        buttonColor: 'default' as const,
        ButtonDisplay: 'outlined' as const,
        icon: <FileOutlined />,
    }
   ]
};

export default function Leads() {
  const TableComponentProps = {
    columns: columns,
    dataSource: data,
  };
  return (
    <div>
      <section>
        <div className='flex flex-row justify-between items-center'>
        <h1 className='text-2xl font-bold text-black pl-10'>Title</h1>
          <ActionsBarComponent {...ActionsBarComponentProps} />
        </div>
      </section>

      <section>
        <div className='pl-5'>
          <TableComponent {...TableComponentProps} />
        </div>
        </section>
    </div>
  );
};
