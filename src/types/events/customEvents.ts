import { AuthModalEventData } from '@/utils/customEvents/@handlers/authModal/types'

export interface CustomEvents {
  'auth-modal-event': {
    action: 'open' | 'close'
    data?: AuthModalEventData
  }
}
