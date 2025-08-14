'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, Button, Descriptions, Tag, Space, Modal, message } from 'antd';
import { EditOutlined, DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';
interface LeadData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  website: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  leadSource: string;
  leadStatus: string;
  notes: string;
  expectedCloseDate: string;
  createdAt: string;
  updatedAt: string;
}


export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<LeadData | null>(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // Simulate fetching lead data
    const fetchLead = async () => {
      setLoading(true);
      try {
        // Here you would fetch the lead data from your API
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data - replace with actual API call
        const mockLead = {
          id: params.id,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1 (555) 123-4567',
          company: 'Tech Solutions Inc.',
          jobTitle: 'CEO',
          industry: 'Technology',
          website: 'https://techsolutions.com',
          address: '123 Business St',
          city: 'San Francisco',
          state: 'CA',
          zipCode: '94105',
          country: 'United States',
          leadSource: 'Website',
          leadStatus: 'Qualified',
          notes: 'Interested in our enterprise solution. Follow up scheduled for next week.',
          expectedCloseDate: '2024-03-15',
          createdAt: '2024-01-15',
          updatedAt: '2024-01-20'
        };
        
        setLead(mockLead as LeadData);
      } catch (error) {
        message.error('Failed to load lead details');
        console.error('Error fetching lead:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchLead();
    }
  }, [params.id]);

  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this lead?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk: async () => {
        try {
          // Here you would delete the lead from your API
          await new Promise(resolve => setTimeout(resolve, 1000));
          message.success('Lead deleted successfully');
          router.push('/account/leads');
        } catch (error) {
          message.error('Failed to delete lead');
          console.error('Error deleting lead:', error);
        }
      },
    });
  };

  const handleEdit = () => {
    // Navigate to the edit page with the lead ID
    router.push(`/account/leads/edit?id=${params.id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] p-6">
        <div>Loading...</div>
      </div>
    );
  }

  if (!lead) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
        <h2 className="text-2xl font-bold mb-4">Lead Not Found</h2>
        <Button type="primary" onClick={() => router.push('/account/leads')}>
          Back to Leads
        </Button>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'New': 'blue',
      'Contacted': 'orange',
      'Qualified': 'green',
      'Proposal': 'purple',
      'Negotiation': 'gold',
      'Closed Won': 'green',
      'Closed Lost': 'red'
    };
    return colors[status] || 'default';
  };


  const ActionsBarComponentProps = {
    items: [
     
      {
        title: 'Leads',
          description: 'Manage your leads',
          buttonText: 'Edit',
          buttonLink: '#',
          buttonColor: 'primary' as const,
          ButtonDisplay: 'solid' as const,
          icon: <EditOutlined />,
          onClick: handleEdit,
        },
        {
          title: 'Leads',
        description: 'Manage your leads',
        buttonText: 'Delete',
        buttonLink: '#',
        buttonColor: 'error' as const,
        ButtonDisplay: 'solid' as const,
        icon: <DeleteOutlined />,
        onClick: handleDelete,
      },

    ],
  };

  return (
    <div className="p-6">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button 
              icon={<ArrowLeftOutlined />} 
              onClick={() => router.push('/account/leads')}
            >
              Back to Leads
            </Button>
            <h1 className="text-2xl font-bold">
              {lead.firstName} {lead.lastName}
            </h1>
            <Tag color={getStatusColor(lead.leadStatus)}>
              {lead.leadStatus}
            </Tag>
          </div>
          <Space>
            <ActionsBarComponent items={ActionsBarComponentProps.items} />
          </Space>
        </div>

        {/* Lead Details */}
        <div className="mb-6">
        <Card title="Lead Information">
          <Descriptions column={2} bordered>
            <Descriptions.Item label="Full Name">
              {lead.firstName} {lead.lastName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              <a href={`mailto:${lead.email}`}>{lead.email}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Phone">
              <a href={`tel:${lead.phone}`}>{lead.phone}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Job Title">
              {lead.jobTitle}
            </Descriptions.Item>
            <Descriptions.Item label="Company">
              {lead.company}
            </Descriptions.Item>
            <Descriptions.Item label="Industry">
              {lead.industry}
            </Descriptions.Item>
            <Descriptions.Item label="Website">
              {lead.website && (
                <a href={lead.website} target="_blank" rel="noopener noreferrer">
                  {lead.website}
                </a>
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Lead Source">
              {lead.leadSource}
            </Descriptions.Item>
            <Descriptions.Item label="Expected Close Date">
              {lead.expectedCloseDate || 'Not set'}
            </Descriptions.Item>
            <Descriptions.Item label="Created">
              {lead.createdAt}
            </Descriptions.Item>
          </Descriptions>
        </Card>
        </div>
        {/* Address Information */}
        <div className="mb-6">
        <Card title="Address Information">
          <Descriptions column={1} bordered>
            <Descriptions.Item label="Address">
              {lead.address}
            </Descriptions.Item>
            <Descriptions.Item label="City">
              {lead.city}
            </Descriptions.Item>
            <Descriptions.Item label="State/Province">
              {lead.state}
            </Descriptions.Item>
            <Descriptions.Item label="ZIP/Postal Code">
              {lead.zipCode}
            </Descriptions.Item>
            <Descriptions.Item label="Country">
              {lead.country}
            </Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
        {/* Notes */}
        {lead.notes && (
          <Card title="Notes">
            <p className="whitespace-pre-wrap">{lead.notes}</p>
          </Card>
        )}

      </div>
    </div>
  );
}
