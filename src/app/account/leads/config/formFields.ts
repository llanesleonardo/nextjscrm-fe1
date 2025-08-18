import type { DynamicData } from '../types';

export const getLeadFormFields = (dynamicData: DynamicData) => [
  {
    section: 'Personal Information',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'input',
        required: true,
        iconName: 'UserOutlined', // Use string instead of JSX
        placeholder: 'First name',
        rules: [{ required: true, message: 'Please enter first name' }]
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'input',
        required: true,
        iconName: 'UserOutlined', // Use string instead of JSX
        placeholder: 'Last name',
        rules: [{ required: true, message: 'Please enter last name' }]
      },
      {
        name: 'email',
        label: 'Email',
        type: 'input',
        required: true,
        iconName: 'MailOutlined', // Use string instead of JSX
        placeholder: 'Email address',
        rules: [
          { required: true, message: 'Please enter email' },
          { type: 'email', message: 'Please enter a valid email' }
        ]
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'input',
        required: true,
        iconName: 'PhoneOutlined', // Use string instead of JSX
        placeholder: 'Phone number',
        rules: [{ required: true, message: 'Please enter phone number' }]
      },
      {
        name: 'jobTitle',
        label: 'Job Title',
        type: 'select',
        placeholder: 'Job title',
        rules: [{ required: true, message: 'Please select job title' }],
        options: dynamicData.jobTitles // Dynamic data from API
      },
      {
        name: 'website',
        label: 'Website',
        type: 'input',
        iconName: 'GlobalOutlined', // Use string instead of JSX
        placeholder: 'Website URL'
      }
    ]
  },
  {
    section: 'Lead Information',
    fields: [
      {
        name: 'leadSource',
        label: 'Lead Source',
        type: 'select',
        required: true,
        placeholder: 'Select lead source',
        rules: [{ required: true, message: 'Please select lead source' }],
        options: dynamicData.leadSources // Dynamic data from API
      },
      {
        name: 'leadStatus',
        label: 'Lead Status',
        type: 'select',
        required: true,
        placeholder: 'Select lead status',
        rules: [{ required: true, message: 'Please select lead status' }],
        options: dynamicData.leadStatuses // Dynamic data from API
      }
    ]
  },
  {
    section: 'Company Information',
    fields: [
      {
        name: 'company',
        label: 'Company',
        type: 'input',
        required: true,
        iconName: 'BankOutlined', // Use string instead of JSX
        placeholder: 'Company name',
        rules: [{ required: true, message: 'Please enter company name' }]
      },
      {
        name: 'industry',
        label: 'Industry',
        type: 'select',
        placeholder: 'Select industry',
        options: dynamicData.industries // Dynamic data from API
      }
    ]
  },
  {
    section: 'Address Information',
    fields: [
      {
        name: 'address',
        label: 'Address',
        type: 'input',
        iconName: 'EnvironmentOutlined', // Use string instead of JSX
        placeholder: 'Street address',
        fullWidth: true
      },
      {
        name: 'city',
        label: 'City',
        type: 'input',
        placeholder: 'City',
        colSpan: 8
      },
      {
        name: 'state',
        label: 'State/Province',
        type: 'input',
        placeholder: 'State/Province',
        colSpan: 8
      },
      {
        name: 'zipCode',
        label: 'ZIP/Postal Code',
        type: 'input',
        placeholder: 'ZIP/Postal Code',
        colSpan: 8
      },
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        placeholder: 'Select country',
        options: dynamicData.countries // Dynamic data from API
      }
    ]
  },
  {
    section: 'Metadata',
    fields: [
      {
        name: 'createdAt',
        label: 'Created At',
        type: 'date',
        placeholder: 'Select date',
        disabled: true, // Make readonly
        defaultValue: new Date()
      },
      {
        name: 'modifiedAt',
        label: 'Modified At',
        type: 'date',
        placeholder: 'Select date',
        disabled: true, // Make readonly
        defaultValue: new Date()
      },
      {
        name: 'createdBy',
        label: 'Created By',
        type: 'input',
        placeholder: 'Created by',
        disabled: true, // Make readonly
        defaultValue: 'admin'
      },
      {
        name: 'modifiedBy',
        label: 'Modified By',
        type: 'input',
        placeholder: 'Modified by',
        disabled: true, // Make readonly
        defaultValue: 'admin'
      }
    ]
  },
  {
    section: 'Notes',
    fields: [
      {
        name: 'notes',
        label: 'Notes',
        type: 'textarea',
        placeholder: 'Additional notes about the lead',
        rows: 4,
        fullWidth: true
      }
    ]
  },
];
