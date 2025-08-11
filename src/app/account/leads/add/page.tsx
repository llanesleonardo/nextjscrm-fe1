'use client';

import React from 'react';
import LeadForm from '../components/LeadForm';

export default function AddLeadPage() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Add New Lead</h1>
        <LeadForm />
      </div>
    </div>
  );
}
