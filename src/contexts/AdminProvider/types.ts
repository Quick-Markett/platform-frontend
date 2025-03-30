import { PropsWithChildren, SetStateAction } from 'react'

import { Market } from '@/types/models/market'

export interface AdminContextProps {
  marketData: Market
  selectedTab: AdminTabs
  setMarketData: React.Dispatch<SetStateAction<Market>>
  setSelectedTab: React.Dispatch<SetStateAction<AdminTabs>>
}

export interface AdminContextProviderProps extends PropsWithChildren {
  market: Market
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
