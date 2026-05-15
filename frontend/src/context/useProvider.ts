import { useContext } from 'react';
import { ProviderContext } from './ProviderContext';

export const useProvider = () => {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('useProvider must be used within a ProviderProvider');
  }
  return context;
};
