import fs from 'fs';
import path from 'path';
import type { LeadFormData } from '../../app/account/leads/types';

const dbPath = path.join(process.cwd(), 'data', 'leads.json');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database with default data
const initializeDatabase = () => {
  if (!fs.existsSync(dbPath)) {
    const initialData = [
      {
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
        createdAt: new Date().toISOString(),
        modifiedAt: new Date().toISOString(),
        createdBy: 'admin',
        modifiedBy: 'admin'
      }
    ];
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
  }
};

// Database operations
export const dbOperations = {
  getAllLeads: (): LeadFormData[] => {
    initializeDatabase();
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  },

  getLeadById: (id: string): LeadFormData | null => {
    const leads = dbOperations.getAllLeads();
    return leads.find(lead => lead.id === id) || null;
  },

  createLead: (leadData: Omit<LeadFormData, 'id'>): LeadFormData => {
    const leads = dbOperations.getAllLeads();
    const newId = (Math.max(...leads.map(l => parseInt(l.id || '0'))) + 1).toString();
    const newLead: LeadFormData = { ...leadData, id: newId };
    
    leads.push(newLead);
    fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2));
    return newLead;
  },

  updateLead: (id: string, leadData: Omit<LeadFormData, 'id'>): boolean => {
    const leads = dbOperations.getAllLeads();
    const index = leads.findIndex(lead => lead.id === id);
    if (index !== -1) {
      leads[index] = { ...leadData, id };
      fs.writeFileSync(dbPath, JSON.stringify(leads, null, 2));
      return true;
    }
    return false;
  },

  deleteLead: (id: string): boolean => {
    const leads = dbOperations.getAllLeads();
    const filteredLeads = leads.filter(lead => lead.id !== id);
    if (filteredLeads.length !== leads.length) {
      fs.writeFileSync(dbPath, JSON.stringify(filteredLeads, null, 2));
      return true;
    }
    return false;
  }
};

initializeDatabase();
