import { useState, ReactNode } from 'react';
import { ProviderContext, ProviderType } from './providerContext';

export const ProviderProvider = ({ children }: { children: ReactNode }) => {
  const [activeProvider, setActiveProvider] = useState<ProviderType>('ALL');

  return (
    <ProviderContext.Provider value={{ activeProvider, setActiveProvider }}>
      {children}
    </ProviderContext.Provider>
  );
};
