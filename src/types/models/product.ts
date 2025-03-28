import { Market } from './market'

export interface Product {
  created_at: string
  id: number
  isActive: boolean
  market?: Market
  market_id: number
  product_description: string
  product_image: string
  product_name: string
  stock: number
  unit_price: number
  updated_at: string
}
