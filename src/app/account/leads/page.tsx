'use client';
import React, { useState, useEffect } from 'react';
import TableComponent from '@/components/shared/TableComponent';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';
import { Skeleton } from 'antd';
import { FileOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { getAllLeads } from './actions';
import type { LeadFormData } from './types';


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    render: (text: React.ReactNode) => <span>{text}</span>,
  },
  {
    title: 'Name',
    dataIndex: 'firstName',
    render: (text: React.ReactNode, record: any) => (
      <a href={`/account/leads/${record?.id}`}>{record?.firstName} {record?.lastName}</a>
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
    dataIndex: 'leadStatus', // Change from 'status' to 'leadStatus'
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
  const [loading, setLoading] = useState(true);
  const [tableData, setTableData] = useState<LeadFormData[]>([]);

  useEffect(() => {
    const loadLeads = async () => {
      try {
        setLoading(true);
        console.log('=== LOADING LEADS ===');
        const leads = await getAllLeads();
        console.log('Leads fetched from server:', leads);
        
        // Add key property to each lead for the table
        const leadsWithKey = leads.map(lead => ({
          ...lead,
          key: lead.id // Use the id as the key
        }));
        console.log('Leads with keys:', leadsWithKey);
        setTableData(leadsWithKey);
      } catch (error) {
        console.error('Error loading leads:', error);
        // You might want to show an error message here
      } finally {
        setLoading(false);
      }
    };

    loadLeads();
  }, []);

  const TableComponentProps = {
    columns: columns,
    dataSource: tableData,
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
          {loading ? (
            <Skeleton 
              active 
              paragraph={{ rows: 8 }} 
              title={{ width: '100%' }}
            />
          ) : (
            <TableComponent {...TableComponentProps} />
          )}
        </div>
        </section>
    </div>
  );
};
