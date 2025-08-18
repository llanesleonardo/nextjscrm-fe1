import type { ApiItem, CountryItem, LeadFormData } from '../types';
import dayjs from 'dayjs';

export const mockIndustries: ApiItem[] = [
  { id: 'tech', name: 'Technology' },
  { id: 'finance', name: 'Finance' },
  { id: 'health', name: 'Healthcare' },
  { id: 'education', name: 'Education' },
  { id: 'retail', name: 'Retail' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'consulting', name: 'Consulting' },
  { id: 'other', name: 'Other' }
];

export const mockCountries: CountryItem[] = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'AU', name: 'Australia' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'JP', name: 'Japan' },
  { code: 'IN', name: 'India' }
];

export const mockLeadSources = [
  { id: 'website', name: 'Website' },
  { id: 'referral', name: 'Referral' },
  { id: 'social', name: 'Social Media' },
  { id: 'email', name: 'Email Campaign' },
  { id: 'cold-call', name: 'Cold Call' },
  { id: 'trade-show', name: 'Trade Show' },
  { id: 'advertising', name: 'Advertising' },
  { id: 'other', name: 'Other' }
];

export const mockLeadStatuses = [
  { id: 'new', name: 'New' },
  { id: 'contacted', name: 'Contacted' },
  { id: 'qualified', name: 'Qualified' },
  { id: 'proposal', name: 'Proposal' },
  { id: 'negotiation', name: 'Negotiation' },
  { id: 'closed-won', name: 'Closed Won' },
  { id: 'closed-lost', name: 'Closed Lost' }
];

export const mockUsers = [
  { id: 'admin', name: 'Admin' },
  { id: 'user1', name: 'John Doe' },
  { id: 'user2', name: 'Jane Smith' },
  { id: 'user3', name: 'Mike Johnson' }
];

export const mockLeadData: LeadFormData = {
  id: '1',
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
  createdAt: dayjs(),
  modifiedAt: dayjs(),
  createdBy: 'admin',
  modifiedBy: 'admin'
};

export const mockJobTitles = [
  { id: 'ceo', name: 'CEO' },
  { id: 'cto', name: 'CTO' },
  { id: 'cfo', name: 'CFO' },
  { id: 'coo', name: 'COO' },
  { id: 'cio', name: 'CIO' },
  { id: 'other', name: 'Other' }
];