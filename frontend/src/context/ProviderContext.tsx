import { createContext, useContext, useState, ReactNode } from 'react';

export type ProviderType = 'ALL' | 'AWS' | 'Azure' | 'GCP' | 'Salesforce';

interface ProviderContextType {
  activeProvider: ProviderType;
  setActiveProvider: (provider: ProviderType) => void;
}

const ProviderContext = createContext<ProviderContextType | undefined>(undefined);

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [activeProvider, setActiveProvider] = useState<ProviderType>('ALL');

  return (
    <ProviderContext.Provider value={{ activeProvider, setActiveProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProvider must be used within a ProviderProvider');
  }
  return context;
};
