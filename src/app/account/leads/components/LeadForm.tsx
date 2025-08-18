'use client';

import React, { useState, useEffect } from 'react';
import { Form, Select, message, Card, Row, Col, Divider, Skeleton, Input, DatePicker } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, BankOutlined, GlobalOutlined, CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { useSearchParams, useRouter } from 'next/navigation';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';
import { getLeadFormFields } from '../config/formFields';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs';

import { 
  mockIndustries, 
  mockCountries, 
  mockLeadSources, 
  mockLeadStatuses, 
  mockUsers,
  //  mockLeadData,
  mockJobTitles
} from '../data/mockData';
import type { LeadFormData, DynamicData, ApiItem, CountryItem, FormField } from '../types';
import type { FormInstance } from 'antd';
import type { Dayjs } from 'dayjs';
import { createLead, getLeadById, updateLead } from '../actions';


  // Create an icon mapping object
  const iconMap: { [key: string]: React.ReactNode } = {
    UserOutlined: <UserOutlined />,
    PhoneOutlined: <PhoneOutlined />,
    MailOutlined: <MailOutlined />,
    EnvironmentOutlined: <EnvironmentOutlined />,
    BankOutlined: <BankOutlined />,
    GlobalOutlined: <GlobalOutlined />
  };

  

export default function LeadForm({ isEdit = false }: { isEdit: boolean }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [dynamicData, setDynamicData] = useState<DynamicData>({
    industries: [],
    countries: [],
    leadSources: [],
    leadStatuses: [],
    createdBy: [],
    modifiedBy: [],
    jobTitles: [],
  });
  const router = useRouter();
  const [initialValues, setInitialValues] = useState<Partial<LeadFormData>>({});
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = useSearchParams();

  const ActionsBarComponentProps = {
    items: [
      {
        title: 'Leads',
        description: 'Manage your leads',
        buttonText: 'Cancel',
        buttonLink: '/account/leads',
        buttonColor: 'default' as const,
        ButtonDisplay: 'outlined' as const,
        icon: <CloseOutlined />,
        onClick: () => router.push('/account/leads'),
        loading: false,
      },
      {
        title: 'Leads',
        description: 'Manage your leads',
        buttonText: isEdit ? 'Update Lead' : 'Create Lead',
        buttonLink: '#',
        buttonColor: 'primary' as const,
        ButtonDisplay: 'solid' as const,
        icon: <SaveOutlined />,
        onClick: () => form.submit(),
        loading: loading,
      },
    ],
  };
  
  const handleDateChange = (fieldName: string, form: FormInstance) => {
    return (date: Dayjs | null, dateString: string | string[]) => {
      form.setFieldsValue({
        [fieldName]: dateString
      });
    };
  };

  // Fetch dynamic data for form fields
  useEffect(() => {
    const fetchFormData = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        setDynamicData({
          industries: mockIndustries.map((item: ApiItem) => ({ value: item.id, label: item.name })),
          countries: mockCountries.map((item: CountryItem) => ({ value: item.code, label: item.name })),
          leadSources: mockLeadSources.map((item: ApiItem) => ({ value: item.id, label: item.name })),
          leadStatuses: mockLeadStatuses.map((item: ApiItem) => ({ value: item.id, label: item.name })),
          createdBy: mockUsers.map((item: ApiItem) => ({ value: item.id, label: item.name })),
          modifiedBy: mockUsers.map((item: ApiItem) => ({ value: item.id, label: item.name })),
          jobTitles: mockJobTitles.map((item: ApiItem) => ({ value: item.id, label: item.name })),
        });

        // If editing, use mock lead data
        if (isEdit) {
          
          const leadId = searchParams.get('id'); 
          console.log('Lead ID from URL:', leadId); 

          if (leadId) {
            const lead = await getLeadById(leadId);
            if (lead) {
              // Convert date strings to Dayjs objects for DatePicker
              setInitialValues({
                ...lead,
                createdAt: lead.createdAt ? new Date(lead.createdAt) : null,
                modifiedAt: lead.modifiedAt ? new Date(lead.modifiedAt) : null,
              });
            }
          }
        }
      } catch (error) {
        console.error('Error fetching form data:', error);
        message.error('Failed to load form data');
      } finally {
        setFormLoading(false);
      }
    };

    fetchFormData();
  }, [isEdit, searchParams]);

  // Get form fields with dynamic data
  const formFields = getLeadFormFields(dynamicData);



  // Form submission handler
  const onFinish = async (values: LeadFormData) => {
    try {
      setLoading(true);
      console.log('=== FORM SUBMISSION STARTED ===');
      console.log('Form submitted with values:', values);
      
      // Convert Dayjs objects to strings before sending to server
      const cleanValues = {
        ...values,
        createdAt: values.createdAt ?  new Date(values.createdAt) : null,
        modifiedAt: values.modifiedAt ? new Date(values.modifiedAt) : null,
      };
      
      console.log('Clean values being sent to server:', cleanValues);

      console.log('About to call createLead server action...');
      if(isEdit) {
        const leadId = searchParams.get('id');
        if (leadId) {
          const lead = await updateLead(leadId, cleanValues);
          console.log('Lead updated successfully:', lead);
        }
      } else {
        const lead = await createLead(cleanValues);
        console.log('Lead created successfully:', lead);
      }
      console.log('=== FORM SUBMISSION COMPLETED ===');
      
      messageApi.info(`Lead ${isEdit ? 'updated' : 'added'} successfully!`);
      // Force a hard refresh to ensure the leads list is updated
      setTimeout(() => {
        router.push('/account/leads');
      }, 1000);
    } catch (error) {
      console.error('=== FORM SUBMISSION ERROR ===');
      console.error('Error saving lead:', error);
      messageApi.info(`Failed to ${isEdit ? 'update' : 'create'} lead.`);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      {contextHolder}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6 text-slate-800">
          {isEdit ? 'Edit Lead' : 'Add New Lead'}
        </h1>
        <ActionsBarComponent items={ActionsBarComponentProps.items} />
      </div>
      
      {formLoading ? (
        <Skeleton active paragraph={{ rows: 8 }} title={{ width: '100%' }} />
      ) : (
        <Card>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={
              isEdit
                ? { 
                    ...initialValues,
                    // Ensure dates are properly formatted for DatePicker
                    createdAt: initialValues.createdAt ? dayjs(initialValues.createdAt) : undefined,
                    modifiedAt: initialValues.modifiedAt ? dayjs(initialValues.modifiedAt) : undefined,
                  }
                : {
                    leadStatus: 'New',
                    leadSource: 'Website',
                    country: 'United States',
                    createdAt: dayjs(),
                    modifiedAt: dayjs(),
                    createdBy: 'admin',
                    modifiedBy: 'admin',
                    jobTitle: 'CEO',
                    ...initialValues,
                  }
            }
          >
            {/* Render your form fields here */}
            {formFields.map(section => (
              <div key={section.section}>
                <Divider orientation="left">{section.section}</Divider>
                <Row gutter={16}>
                  {section.fields.map((field: FormField) => (
                    <Col xs={12} key={field.name}>
                      <Form.Item
                        name={field.name}
                        label={field.label}
                        rules={field.rules || []}
                      >
                        {field.type === 'select' && (
                          <Select placeholder={field.placeholder}>
                            {field.options?.map((option: { value: string; label: string }) => (
                              <Select.Option key={option.value} value={option.value}>
                                {option.label}
                              </Select.Option>
                            ))}
                          </Select>
                        )}
                        {field.type === 'input' && (
                          <Input 
                            prefix={field.iconName ? iconMap[field.iconName] : undefined} 
                            placeholder={field.placeholder}
                            disabled={field.disabled}
                          />
                        )}
                        {field.type === 'date' && (
                          <DatePicker
                            style={{ width: '100%' }}
                            placeholder="Select date"
                            format="YYYY-MM-DD"
                            onChange={handleDateChange(field.name, form)}
                            disabled={field.disabled}
                          />
                        )}
                        {field.type === 'textarea' && <TextArea placeholder={field.placeholder} />}
                      </Form.Item>
                    </Col>
                  ))}
                </Row>
              </div>
            ))}
          </Form>
        </Card>
      )}
    </>
  );
}
