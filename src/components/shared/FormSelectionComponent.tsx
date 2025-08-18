// create  a functional component that will be used to select a form from a list of forms
import React from 'react';
import LeadForm from '@/app/account/leads/components/LeadForm';


export default function FormSelectionComponent({ 
  formName, 
  isEdit = false 
}: { 
  formName: string; 
  isEdit?: boolean; 
  onCancel?: () => void; 
}) {
  switch (formName) {
    case 'lead':
      return <LeadForm  isEdit={isEdit} />;
    case 'company':
      return <LeadForm isEdit={isEdit} />;
    case 'contact':
      return <LeadForm isEdit={isEdit} />;
    case 'opportunity':
      return <LeadForm isEdit={isEdit} />;
    case 'task':
      return <LeadForm isEdit={isEdit} />;
    case 'event':
      return <LeadForm isEdit={isEdit} />;
    default:
      return <div>Please select a valid form.</div>;
  }
}