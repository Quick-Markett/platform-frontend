import { PropsWithChildren, SetStateAction } from 'react'

import { Category } from '@/types/models/category'
import { Market } from '@/types/models/market'
import { Product } from '@/types/models/product'

export interface AdminContextProps {
  categories: Category[]
  marketData: Market
  products: Product[]
  selectedTab: AdminTabs
  setCategories: React.Dispatch<SetStateAction<Category[]>>
  setMarketData: React.Dispatch<SetStateAction<Market>>
  setProducts: React.Dispatch<SetStateAction<Product[]>>
  setSelectedTab: React.Dispatch<SetStateAction<AdminTabs>>
}

export interface AdminContextProviderProps extends PropsWithChildren {
  categories: Category[]
  market: Market
  products: Product[]
}

export type AdminTabs =
  | 'edit-info'
  | 'edit-categories'
  | 'edit-products'
  | 'see-as-user'
  | 'products'
  | 'customers'
  | 'general'
  | 'terms-of-use'
  | 'faq'
