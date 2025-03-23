import { Market } from '@/types/models/market'

export interface GetMarketByIdPayload {
  marketId: number
}

export interface GetMarketBySlugPayload {
  slug: string
}

export interface CreateMarketPayload {
  payload: Pick<
    Market,
    | 'address'
    | 'city'
    | 'description'
    | 'email'
    | 'logo_url'
    | 'name'
    | 'phone_number'
    | 'state'
    | 'zip_code'
    | 'owner_id'
    | 'slug'
  >
}

export interface UpdateMarketPayload extends GetMarketByIdPayload {}

export interface DeleteMarketPayload extends GetMarketByIdPayload {}
