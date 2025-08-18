'use client';

import React from 'react';
import FormSelectionComponent from '@/components/shared/FormSelectionComponent';

export default function EditLeadPage() {
  return (
    <div className="p-6">
      <div className="mx-auto w-full">
      <FormSelectionComponent formName="lead" isEdit={true} />
      </div>
    </div>
  );
}
