'use client'

import { SessionContextValue, useSession } from 'next-auth/react'

import { User } from '@/types/models/user'

export const useUserSession = (): {
  user?: User
  update: SessionContextValue['update']
  token?: string
} => {
  const { data, update } = useSession() ?? {}

  return {
    user: data?.user,
    token: data?.user?.token,
    update
  }
}
