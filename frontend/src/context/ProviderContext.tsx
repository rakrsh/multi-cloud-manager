import { useState, ReactNode } from 'react';
import { ProviderContext } from './providerContext';

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [activeProvider, setActiveProvider] = useState('ALL' as const);

  return (
    <ProviderContext.Provider value={{ activeProvider, setActiveProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};
