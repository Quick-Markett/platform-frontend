import { Market } from './market'
import { OrderItem } from './orderItem'
import { User } from './user'

export interface Order {
  created_at: string
  delivery_address: string
  id: number
  market?: Market
  market_id: number
  orderItems?: OrderItem[]
  status: string
  total_price: number
  updated_at: string
  user?: User
  user_id: number
}
