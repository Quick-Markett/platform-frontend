'use client'

import { Button } from '@/components/toolkit/Button'
import { handleOpenAuthModal } from '@/utils/customEvents/@handlers/authModal/handleOpenAuthModal'

export const LoginButton: React.FC = () => {
  return (
    <div className="ml-2 flex items-center gap-4 lg:gap-6">
      <Button onClick={() => handleOpenAuthModal()}>Entrar</Button>
    </div>
  )
}
