'use client'

import { useState } from 'react'

import { Modal } from '@/components/toolkit/Modal'
import { useEventListener } from '@/hooks/useEventListener'

export const CreateCategoryModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEventListener('create-category', ({ action }) => {
    switch (action) {
      case 'open': {
        setIsModalOpen(true)
        break
      }
      case 'close': {
        setIsModalOpen(false)
        break
      }
    }
  })

  return (
    <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
      <p>modal</p>
    </Modal>
  )
}
