import { Market } from '@/types/models/market'

export interface MarketCardProps {
  market: Pick<
    Market,
    'name' | 'delivery_max_time' | 'delivery_min_time' | 'delivery_price'
  >
}
