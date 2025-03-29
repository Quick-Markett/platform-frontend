'use client'

import { createContext, useContext, useState } from 'react'

import {
  AdminContextProps,
  AdminContextProviderProps,
  AdminTabs
} from './types'

const AdminContext = createContext<AdminContextProps>(null)

export const AdminContextProvider: React.FC<AdminContextProviderProps> = ({
  children
}) => {
  const [selectedTab, setSelectedTab] = useState<AdminTabs>('edit-info')

  return (
    <AdminContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </AdminContext.Provider>
  )
}

export const useAdminContext = () => {
  return useContext(AdminContext)
}
