import { PropsWithChildren } from 'react'

import { AdminContextProvider } from '@/contexts/AdminProvider'

const AdminScopeLayout: React.FC<PropsWithChildren> = async ({ children }) => {
  return <AdminContextProvider>{children}</AdminContextProvider>
}

export default AdminScopeLayout
