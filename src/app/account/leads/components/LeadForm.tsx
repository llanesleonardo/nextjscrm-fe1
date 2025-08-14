'use client';

import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, message, Card, Row, Col, Divider } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, EnvironmentOutlined, BankOutlined, GlobalOutlined, CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import ActionsBarComponent from '@/components/shared/ActionsBarComponent';
import dayjs from 'dayjs';

const { Option } = Select;
const { TextArea } = Input;

interface LeadFormData {
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
  expectedCloseDate: Date;
}

interface LeadFormProps {
  initialValues?: Partial<LeadFormData>;
  onSubmit?: (values: LeadFormData) => Promise<void>;
  isEdit?: boolean;
}

export default function LeadForm({ initialValues, onSubmit, isEdit = false }: LeadFormProps) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onFinish = async (values: LeadFormData) => {
    setLoading(true);
    try {
      if (onSubmit) {
        await onSubmit(values);
      } else {
        // Default create behavior
        console.log('Lead form data:', values);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        message.success('Lead created successfully!');
        form.resetFields();
        router.push('/account/leads');
      }
    } catch (error) {
      message.error(`Failed to ${isEdit ? 'update' : 'create'} lead. Please try again.`);
      console.error(`Error ${isEdit ? 'updating' : 'creating'} lead:`, error);
    } finally {
      setLoading(false);
    }
  };

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

  return (
    <>
    <div className="flex justify-between items-center">
    <h1 className="text-2xl font-bold mb-6 text-slate-800">{isEdit ? 'Edit Lead' : 'Add New Lead'}</h1>
    <ActionsBarComponent items={ActionsBarComponentProps.items} />
  </div>
    <Card>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          leadStatus: 'New',
          leadSource: 'Website',
          country: 'United States',
          ...initialValues,
          expectedCloseDate: initialValues?.expectedCloseDate ? 
            (typeof initialValues.expectedCloseDate === 'string' ? 
              dayjs(initialValues.expectedCloseDate) : 
              dayjs(initialValues.expectedCloseDate)) : 
            undefined
        }}
      >
        {/* Personal Information */}
        <Divider orientation="left">Personal Information</Divider>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[{ required: true, message: 'Please enter first name' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="First name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[{ required: true, message: 'Please enter last name' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Last name" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please enter email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email address" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="phone"
              label="Phone"
              rules={[{ required: true, message: 'Please enter phone number' }]}
            >
              <Input prefix={<PhoneOutlined />} placeholder="Phone number" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="jobTitle"
              label="Job Title"
            >
              <Input placeholder="Job title" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="website"
              label="Website"
            >
              <Input prefix={<GlobalOutlined />} placeholder="Website URL" />
            </Form.Item>
          </Col>
        </Row>

        {/* Company Information */}
        <Divider orientation="left">Company Information</Divider>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="company"
              label="Company"
              rules={[{ required: true, message: 'Please enter company name' }]}
            >
              <Input prefix={<BankOutlined />} placeholder="Company name" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="industry"
              label="Industry"
            >
              <Select placeholder="Select industry">
                <Option value="technology">Technology</Option>
                <Option value="healthcare">Healthcare</Option>
                <Option value="finance">Finance</Option>
                <Option value="education">Education</Option>
                <Option value="retail">Retail</Option>
                <Option value="manufacturing">Manufacturing</Option>
                <Option value="consulting">Consulting</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Address Information */}
        <Divider orientation="left">Address Information</Divider>
        <Form.Item
          name="address"
          label="Address"
        >
          <Input prefix={<EnvironmentOutlined />} placeholder="Street address" />
        </Form.Item>

        <Row gutter={16}>
          <Col xs={24} sm={8}>
            <Form.Item
              name="city"
              label="City"
            >
              <Input placeholder="City" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name="state"
              label="State/Province"
            >
              <Input placeholder="State/Province" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={8}>
            <Form.Item
              name="zipCode"
              label="ZIP/Postal Code"
            >
              <Input placeholder="ZIP/Postal Code" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="country"
          label="Country"
        >
          <Select placeholder="Select country">
            <Option value="United States">United States</Option>
            <Option value="Canada">Canada</Option>
            <Option value="United Kingdom">United Kingdom</Option>
            <Option value="Australia">Australia</Option>
            <Option value="Germany">Germany</Option>
            <Option value="France">France</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        {/* Lead Information */}
        <Divider orientation="left">Lead Information</Divider>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              name="leadSource"
              label="Lead Source"
              rules={[{ required: true, message: 'Please select lead source' }]}
            >
              <Select placeholder="Select lead source">
                <Option value="Website">Website</Option>
                <Option value="Referral">Referral</Option>
                <Option value="Social Media">Social Media</Option>
                <Option value="Email Campaign">Email Campaign</Option>
                <Option value="Cold Call">Cold Call</Option>
                <Option value="Trade Show">Trade Show</Option>
                <Option value="Other">Other</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              name="leadStatus"
              label="Lead Status"
              rules={[{ required: true, message: 'Please select lead status' }]}
            >
              <Select placeholder="Select lead status">
                <Option value="New">New</Option>
                <Option value="Contacted">Contacted</Option>
                <Option value="Qualified">Qualified</Option>
                <Option value="Proposal">Proposal</Option>
                <Option value="Negotiation">Negotiation</Option>
                <Option value="Closed Won">Closed Won</Option>
                <Option value="Closed Lost">Closed Lost</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="expectedCloseDate"
          label="Expected Close Date"
        >
          <DatePicker style={{ width: '100%' }} placeholder="Select date" />
        </Form.Item>

        <Form.Item
          name="notes"
          label="Notes"
        >
          <TextArea rows={4} placeholder="Additional notes about the lead" />
        </Form.Item>

      </Form>
    </Card>
    </>
  );
}
