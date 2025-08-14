'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { message } from 'antd';
import FormSelectionComponent from '@/components/shared/FormSelectionComponent';

interface LeadFormValues {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
  jobTitle?: string;
  industry?: string;
  website?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  leadSource?: string;
  leadStatus?: string;
  notes?: string;
  expectedCloseDate?: Date;
}

export default function EditLeadPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [lead, setLead] = useState<LeadFormValues | null>(null);
  const [loading, setLoading] = useState(true);
  
  const leadId = searchParams.get('id');

  useEffect(() => {
    if (!leadId) {
      message.error('No lead ID provided');
      router.push('/account/leads');
      return;
    }

    const fetchLead = async () => {
      setLoading(true);
      try {
        // Here you would fetch the lead data from your API
        // const response = await fetch(`/api/leads/${leadId}`);
        // const data = await response.json();
        
        // Mock data for now - replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        const mockLead = {
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '+1 (555) 123-4567',
          company: 'Tech Solutions Inc.',
          jobTitle: 'COO',
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
          expectedCloseDate: new Date('2024-03-15'),
        };
        
        setLead(mockLead);
      } catch (error) {
        message.error('Failed to load lead details');
        console.error('Error fetching lead:', error);
        router.push('/account/leads');
      } finally {
        setLoading(false);
      }
    };

    fetchLead();
  }, [leadId, router]);

  const handleSubmit = async (values: LeadFormValues) => {
    try {
      // Here you would update the lead in your API
      // const response = await fetch(`/api/leads/${leadId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // });
      console.log(values);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      message.success('Lead updated successfully');
      router.push(`/account/leads/${leadId}`);
    } catch (error) {
      message.error('Failed to update lead');
      throw error; // Let the form handle loading state
    }
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
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => router.push('/account/leads')}
        >
          Back to Leads
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mx-auto w-full">
        <FormSelectionComponent 
          formName="lead" 
          initialValues={lead as LeadFormValues}
          onSubmit={handleSubmit}
          isEdit={true} 
        />
      </div>
    </div>
  );
}
