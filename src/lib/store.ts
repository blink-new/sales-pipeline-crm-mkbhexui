import { create } from 'zustand';

export interface Contact {
  id: string;
  name: string;
  email: string;
  company: string;
  position: string;
  lastContact: Date;
  status: 'active' | 'inactive';
}

export interface Deal {
  id: string;
  title: string;
  value: number;
  stage: 'lead' | 'meeting' | 'proposal' | 'negotiation' | 'closed';
  contactId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CRMStore {
  contacts: Contact[];
  deals: Deal[];
  addContact: (contact: Omit<Contact, 'id'>) => void;
  addDeal: (deal: Omit<Deal, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateDealStage: (dealId: string, stage: Deal['stage']) => void;
}

export const useStore = create<CRMStore>((set) => ({
  contacts: [],
  deals: [],
  addContact: (contact) =>
    set((state) => ({
      contacts: [
        ...state.contacts,
        { ...contact, id: Math.random().toString(36).substr(2, 9) },
      ],
    })),
  addDeal: (deal) =>
    set((state) => ({
      deals: [
        ...state.deals,
        {
          ...deal,
          id: Math.random().toString(36).substr(2, 9),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    })),
  updateDealStage: (dealId, stage) =>
    set((state) => ({
      deals: state.deals.map((deal) =>
        deal.id === dealId
          ? { ...deal, stage, updatedAt: new Date() }
          : deal
      ),
    })),
}));