import { Market } from '@/types/models/market'

export interface GetMarketByIdPayload {
  marketId: number
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
  >
}

export interface UpdateMarketPayload extends GetMarketByIdPayload {}

export interface DeleteMarketPayload extends GetMarketByIdPayload {}
