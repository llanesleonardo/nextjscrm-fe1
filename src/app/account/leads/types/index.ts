export interface LeadFormData {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  country: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  leadSource: string;
  leadStatus: string;
  notes: string;
  createdAt: string | Date | null;
  modifiedAt: string | Date | null;
  jobTitle: string;
  createdBy: string;
  modifiedBy: string;
  website: string;
}

export interface DynamicData {
  industries: { value: string; label: string }[];
  countries: { value: string; label: string }[];
  leadSources: { value: string; label: string }[];
  leadStatuses: { value: string; label: string }[];
  createdBy: { value: string; label: string }[];
  modifiedBy: { value: string; label: string }[];
  jobTitles: { value: string; label: string }[];
}

export interface ApiItem {
  id: string;
  name: string;
}

export interface CountryItem {
  code: string;
  name: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  iconName?: string;
  placeholder?: string;
  rules?: any[];
  options?: { value: string; label: string }[];
  fullWidth?: boolean;
  colSpan?: number;
  rows?: number;
  disabled?: boolean;
}
