// create  a functional component that will be used to select a form from a list of forms

import LeadForm from '@/app/account/leads/components/LeadForm';
import React from 'react';

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

export default function FormSelectionComponent({ 
  formName, 
  initialValues, 
  onSubmit, 
  isEdit = false 
}: { 
  formName: string; 
  isEdit?: boolean; 
  initialValues?: Partial<LeadFormData>; 
  onSubmit?: (values: LeadFormData) => Promise<void>; 
  onCancel?: () => void; 
}) {
  switch (formName) {
    case 'lead':
      return <LeadForm initialValues={initialValues} onSubmit={onSubmit} isEdit={isEdit} />;
    case 'company':
      return <LeadForm />;
    case 'contact':
      return <LeadForm />;
    case 'opportunity':
      return <LeadForm />;
    case 'task':
      return <LeadForm />;
    case 'event':
      return <LeadForm />;
    default:
      return <div>Please select a valid form.</div>;
  }
}