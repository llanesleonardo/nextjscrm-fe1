'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, Button, Descriptions, Tag, Space, Modal, message } from 'antd';
import { EditOutlined, DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';
import type { LeadFormData, DynamicData } from '../types';
import { mockIndustries, mockCountries, mockLeadSources, mockLeadStatuses, mockUsers, mockJobTitles } from '../data/mockData';
import { getLeadFormFields } from '../config/formFields';
import { Skeleton } from 'antd';
import { deleteLead, getLeadById } from '../actions';

export default function LeadDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [lead, setLead] = useState<LeadFormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [dynamicData, setDynamicData] = useState<DynamicData>({
    industries: [],
    countries: [],
    leadSources: [],
    leadStatuses: [],
    createdBy: [],
    modifiedBy: [],
    jobTitles: [],
  });
  const [messageApi, contextHolder] = message.useMessage();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate API calls
        const lead = await getLeadById(params.id as string);
        
        // Set dynamic data
        setDynamicData({
          industries: mockIndustries.map(item => ({ value: item.id, label: item.name })),
          countries: mockCountries.map(item => ({ value: item.code, label: item.name })),
          leadSources: mockLeadSources.map(item => ({ value: item.id, label: item.name })),
          leadStatuses: mockLeadStatuses.map(item => ({ value: item.id, label: item.name })),
          createdBy: mockUsers.map(item => ({ value: item.id, label: item.name })),
          modifiedBy: mockUsers.map(item => ({ value: item.id, label: item.name })),
          jobTitles: mockJobTitles.map(item => ({ value: item.id, label: item.name })),
        });
        
        setLead(lead);
      } catch (error) {
        message.error('Failed to load lead details');
        console.error('Error fetching lead:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchData();
    }
  }, [params.id]);

  const showDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteOk = async () => {
    try {
      setDeleteLoading(true);
      const leadId = params.id as string;
      console.log('=== DELETING LEAD ===');
      console.log('Lead ID to delete:', leadId);
      
      const result = await deleteLead(leadId);
      console.log('Delete result:', result);
      
      if (result) {
        messageApi.success('Lead deleted successfully');
        setDeleteModalOpen(false);
        router.push('/account/leads');
      } else {
        messageApi.error('Failed to delete lead - lead not found');
      }
    } catch (error) {
      console.error('=== DELETE ERROR ===');
      console.error('Error deleting lead:', error);
      messageApi.error('Failed to delete lead');
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  const handleEdit = () => {
    router.push(`/account/leads/edit?id=${params.id}`);
  };


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

  const renderFieldValue = (field: any, value: any) => {
    if (!value) return 'Not provided';
    
    switch (field.type) {
      case 'select':
        // Find the option label for the value
        const option = field.options?.find((opt: any) => opt.value === value);
        return option ? option.label : value;
      case 'date':
        return new Date(value).toLocaleDateString();
      case 'textarea':
        return value;
      default:
        return value;
    }
  };

  const renderSection = (section: any) => {
    const sectionData = section.fields
      .map((field: any) => {
        const value = lead?.[field.name as keyof LeadFormData];
        return {
          key: field.name,
          label: field.label,
          children: renderFieldValue(field, value)
        };
      })
      .filter((item: any) => item.children !== 'Not provided');

    if (sectionData.length === 0) return null;

    return (
      <div key={section.section} className="mb-6">
        <Card title={section.section}>
          <Descriptions column={2} bordered>
            {sectionData.map((item: any) => (
              <Descriptions.Item key={item.key} label={item.label}>
                {item.key === 'email' ? (
                  <a href={`mailto:${item.children}`}>{item.children}</a>
                ) : item.key === 'phone' ? (
                  <a href={`tel:${item.children}`}>{item.children}</a>
                ) : item.key === 'website' ? (
                  <a href={item.children} target="_blank" rel="noopener noreferrer">
                    {item.children}
                  </a>
                ) : item.key === 'leadStatus' ? (
                  <Tag color={getStatusColor(item.children)}>
                    {item.children}
                  </Tag>
                ) : (
                  item.children
                )}
              </Descriptions.Item>
            ))}
          </Descriptions>
        </Card>
      </div>
    );
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
        buttonColor: 'default' as const,
        ButtonDisplay: 'solid' as const,
        danger: true,
        icon: <DeleteOutlined />,
        onClick: showDeleteModal,
      },
    ],
  };

  return (
    <>
      {contextHolder}
    <div className="p-6">
      <div className="w-full mx-auto">
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px] p-6">
            <Skeleton active />
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <Button 
                  icon={<ArrowLeftOutlined />} 
                  onClick={() => router.push('/account/leads')}
                >
                  Back to Leads
                </Button>
                <h1 className="text-2xl font-bold text-black">
                  {lead?.firstName} {lead?.lastName}
                </h1>
                <Tag color={getStatusColor(lead?.leadStatus || '')}>
                  {lead?.leadStatus}
                </Tag>
              </div>
              <Space>
                <ActionsBarComponent items={ActionsBarComponentProps.items} />
              </Space>
            </div>

            {/* Dynamic sections based on form configuration */}
            {getLeadFormFields(dynamicData).map(renderSection)}
          </>
        )}
      </div>
    </div>
    
    <Modal
      title="Delete Lead"
      open={deleteModalOpen}
      onOk={handleDeleteOk}
      confirmLoading={deleteLoading}
      onCancel={handleDeleteCancel}
      okText="Delete"
      cancelText="Cancel"
      okType="danger"
    >
      <p>Are you sure you want to delete this lead? This action cannot be undone.</p>
    </Modal>
    </>
  );
}
