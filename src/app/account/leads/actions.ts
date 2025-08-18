'use server';

import { dbOperations } from '@/lib/db/database';
import type { LeadFormData } from './types';

// Get all leads
export async function getAllLeads(): Promise<LeadFormData[]> {
  try {
    return dbOperations.getAllLeads();
  } catch (error) {
    console.error('Error fetching leads:', error);
    throw new Error('Failed to fetch leads');
  }
}

// Get lead by ID
export async function getLeadById(id: string): Promise<LeadFormData | null> {
  try {
    return dbOperations.getLeadById(id);
  } catch (error) {
    console.error('Error fetching lead:', error);
    throw new Error('Failed to fetch lead');
  }
}

// Create new lead
export async function createLead(leadData: Omit<LeadFormData, 'id'>): Promise<LeadFormData> {
  try {
    console.log('=== SERVER ACTION: createLead ===');
    console.log('Received lead data:', leadData);
    
    const result = dbOperations.createLead(leadData);
    console.log('Database operation result:', result);
    
    return result;
  } catch (error) {
    console.error('Error creating lead:', error);
    throw new Error('Failed to create lead');
  }
}

// Update lead
export async function updateLead(id: string, leadData: Omit<LeadFormData, 'id'>): Promise<boolean> {
  try {
    return dbOperations.updateLead(id, leadData);
  } catch (error) {
    console.error('Error updating lead:', error);
    throw new Error('Failed to update lead');
  }
}

// Delete lead
export async function deleteLead(id: string): Promise<boolean> {
  try {
    console.log('=== SERVER ACTION: deleteLead ===');
    console.log('Deleting lead with ID:', id);
    
    const result = dbOperations.deleteLead(id);
    console.log('Delete operation result:', result);
    
    return result;
  } catch (error) {
    console.error('Error deleting lead:', error);
    throw new Error('Failed to delete lead');
  }
}
