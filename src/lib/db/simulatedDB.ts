import type { LeadFormData } from '../../app/account/leads/types';
import { mockLeadData } from '../../app/account/leads/data/mockData';
import Database from 'better-sqlite3';
import path from 'path';

// Create database file in the project root
const dbPath = path.join(process.cwd(), 'crm.db');
const db = new Database(dbPath);

// Initialize database with tables
export function initializeDatabase() {
  // Create leads table
  db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT,
      company TEXT,
      jobTitle TEXT,
      industry TEXT,
      website TEXT,
      address TEXT,
      city TEXT,
      state TEXT,
      zipCode TEXT,
      country TEXT,
      leadSource TEXT,
      leadStatus TEXT,
      notes TEXT,
      createdAt TEXT NOT NULL,
      modifiedAt TEXT NOT NULL,
      createdBy TEXT,
      modifiedBy TEXT
    )
  `);

  // Insert initial data if table is empty
  const count = db.prepare('SELECT COUNT(*) as count FROM leads').get() as { count: number };
  
  if (count.count === 0) {
    const insertLead = db.prepare(`
      INSERT INTO leads (
        firstName, lastName, email, phone, company, jobTitle, industry, website,
        address, city, state, zipCode, country, leadSource, leadStatus, notes,
        createdAt, modifiedAt, createdBy, modifiedBy
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    insertLead.run(
      'John', 'Doe', 'john.doe@example.com', '+1 (555) 123-4567', 'Tech Solutions Inc.',
      'CEO', 'Technology', 'https://techsolutions.com', '123 Business St', 'San Francisco',
      'CA', '94105', 'United States', 'Website', 'Qualified',
      'Interested in our enterprise solution. Follow up scheduled for tomorrow.'
    );
  }
}

// Get leads from localStorage or initialize with default data
const getLeadsFromStorage = (): LeadFormData[] => {
  if (typeof window === 'undefined') {
    // Server-side, return initial data
    return [
      {
        ...mockLeadData,
        createdAt: mockLeadData.createdAt?.toString?.() ?? '',
        modifiedAt: mockLeadData.modifiedAt?.toString?.() ?? '',
      }
    ];
  }
  
  const stored = localStorage.getItem('leadsDB');
  if (stored) {
    return JSON.parse(stored);
  }
  
  // Initialize with default data
  const initialData = [
    {
      ...mockLeadData,
      createdAt: mockLeadData.createdAt?.toString?.() ?? '',
      modifiedAt: mockLeadData.modifiedAt?.toString?.() ?? '',
    }
  ];
  localStorage.setItem('leadsDB', JSON.stringify(initialData));
  return initialData;
};

// Save leads to localStorage
const saveLeadsToStorage = (leads: LeadFormData[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('leadsDB', JSON.stringify(leads));
  }
};

// Generate new ID
const generateId = (leads: LeadFormData[]): string => {
  const maxId = Math.max(...leads.map(lead => parseInt(lead.id || '0')));
  return (maxId + 1).toString();
};

// Database operations
export const dbOperations = {
  // Get all leads
  getAllLeads: (): LeadFormData[] => {
    const leads = getLeadsFromStorage();
    console.log('Fetching all leads. Database size:', leads.length);
    console.log('All leads:', leads);
    return [...leads];
  },

  // Get lead by ID
  getLeadById: (id: string): LeadFormData | null => {
    const leads = getLeadsFromStorage();
    const lead = leads.find(lead => lead.id === id);
    return lead ? { ...lead } : null;
  },

  // Create new lead
  createLead: (leadData: Omit<LeadFormData, 'id'>): LeadFormData => {
    const leads = getLeadsFromStorage();
    const newLead: LeadFormData = {
      ...leadData,
      id: generateId(leads),
    };
    
    console.log('Adding new lead to database:', newLead);
    leads.push(newLead);
    saveLeadsToStorage(leads);
    console.log('Current database size:', leads.length);
    console.log('All leads in database:', leads);
    
    return { ...newLead };
  },
};

console.log('Database initialized at:', new Date().toISOString());
