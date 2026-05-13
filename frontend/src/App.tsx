import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProviderProvider } from './context/ProviderContext'
import { Layout } from './components/Layout'
import { Dashboard } from './components/Dashboard'

const queryClient = new QueryClient()

function AppContent() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderProvider>
        <AppContent />
      </ProviderProvider>
    </QueryClientProvider>
  )
}

export default App
