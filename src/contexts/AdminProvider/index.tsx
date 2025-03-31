'use client'

import { createContext, useContext, useState } from 'react'

import { Category } from '@/types/models/category'
import { Market } from '@/types/models/market'
import { Product } from '@/types/models/product'

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
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])

  return (
    <AdminContext.Provider
      value={{
        selectedTab,
        setSelectedTab,
        marketData,
        setMarketData,
        categories,
        setCategories,
        products,
        setProducts
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdminContext = () => {
  return useContext(AdminContext)
}
