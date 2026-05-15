import { createContext } from 'react';

export type ProviderType = 'ALL' | 'AWS' | 'Azure' | 'GCP' | 'Salesforce';

export interface ProviderContextType {
  activeProvider: ProviderType;
  setActiveProvider: (provider: ProviderType) => void;
}

export const ProviderContext = createContext<ProviderContextType | undefined>(undefined);
