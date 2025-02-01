'use client'

import { deleteCookie } from 'cookies-next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cloneElement, useEffect, useState } from 'react'

import { Modal } from '@/components/toolkit/Modal'
import { useEventListener } from '@/hooks/useEventListener'
import { useUserSession } from '@/hooks/useUserSession'
import { getAuthFormSearchParamsData } from '@/utils/auth/getAuthFormSearchParamsData'
import { updateUserSsoAccount } from '@/utils/auth/updateUserSsoAccount'
import { AuthModalEventData } from '@/utils/customEvents/@handlers/authModal/types'

import { ModalWrapperProps } from './types'

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  dismissible,
  children,
  cookiesData
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const { user } = useUserSession()
  const searchParams = useSearchParams()

  const { searchParamRedirectUrl, searchParamShouldAuthenticate } =
    getAuthFormSearchParamsData(searchParams)

  const [isOpen, setIsOpen] = useState(searchParamShouldAuthenticate)
  const [eventData, setEventData] = useState<AuthModalEventData>()

  const handleSetIsOpen = (state: boolean) => {
    setIsOpen(state)

    if (!state && searchParamShouldAuthenticate) {
      const nextSearchParams = new URLSearchParams(searchParams.toString())
      nextSearchParams.delete('should_authenticate')
      nextSearchParams.delete('auth_redirect')
      router.replace(`${pathname}?${nextSearchParams}`)
    }

    if (!state) {
      deleteCookie('cookiesAuthInitialStep', {
        path: '/'
      })

      deleteCookie('cookiesUserEmail', {
        path: '/'
      })
    }
  }

  useEffect(() => {
    if (isOpen && user) {
      handleSetIsOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isOpen])

  useEffect(() => {
    updateUserSsoAccount(user)
  })

  useEventListener('auth-modal-event', ({ action, data }) => {
    setEventData(data)
    switch (action) {
      case 'open': {
        handleSetIsOpen(true)
        break
      }
      case 'close': {
        handleSetIsOpen(false)
        break
      }
    }
  })

  return (
    <div data-cid="auth-modal">
      <Modal
        dismissible={dismissible}
        isOpen={isOpen}
        setIsOpen={handleSetIsOpen}
      >
        <section className="rounded-sm bg-white px-5 py-10 md:w-[600px]">
          {cloneElement(children, {
            defaultCommonFormsData: {
              initialStep:
                eventData?.initialStep ?? cookiesData.cookiesAuthInitialStep,
              redirectUrl: searchParamRedirectUrl,
              email: cookiesData.cookiesUserEmail
            }
          })}
        </section>
      </Modal>
    </div>
  )
}
