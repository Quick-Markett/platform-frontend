import { triggerCustomEvent } from '@/utils/customEvents/triggerCustomEvent'

export const handleCloseAuthModal = () => {
  triggerCustomEvent({
    eventName: 'auth-modal-event',
    data: {
      action: 'close'
    }
  })
}
