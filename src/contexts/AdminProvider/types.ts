import { PropsWithChildren, SetStateAction } from 'react'

export interface AdminContextProps {
  selectedTab: AdminTabs
  setSelectedTab: React.Dispatch<SetStateAction<AdminTabs>>
}

export interface AdminContextProviderProps extends PropsWithChildren {}

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
