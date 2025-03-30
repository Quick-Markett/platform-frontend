'use client'

import { createContext, useContext, useState } from 'react'

import { Market } from '@/types/models/market'

import {
  AdminContextProps,
  AdminContextProviderProps,
  AdminTabs
} from './types'

const AdminContext = createContext<AdminContextProps>(null)

export const AdminContextProvider: React.FC<AdminContextProviderProps> = ({
  market,
  children
}) => {
  const [selectedTab, setSelectedTab] = useState<AdminTabs>('edit-info')
  const [marketData, setMarketData] = useState<Market>(market)

  return (
    <AdminContext.Provider
      value={{ selectedTab, setSelectedTab, marketData, setMarketData }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdminContext = () => {
  return useContext(AdminContext)
}
