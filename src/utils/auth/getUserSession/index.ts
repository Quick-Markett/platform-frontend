import { getServerSession } from 'next-auth'

import { authOptions } from '@/libs/auth'
import { User } from '@/types/models/user'

export const getUserSession = async (): Promise<User> => {
  const session = await getServerSession(authOptions)

  return session?.user as User
}
