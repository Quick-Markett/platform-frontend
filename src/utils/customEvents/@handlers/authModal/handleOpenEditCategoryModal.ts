import { triggerCustomEvent } from '@/utils/customEvents/triggerCustomEvent'

import { HandleOpenEditCategoryModalProps } from './types'

export const handleOpenEditCategoryModal = ({
  category
}: HandleOpenEditCategoryModalProps) => {
  triggerCustomEvent({
    eventName: 'edit-category',
    data: {
      action: 'open',
      data: category
    }
  })
}
