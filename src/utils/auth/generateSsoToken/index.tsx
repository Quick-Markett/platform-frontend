import { sign } from 'jsonwebtoken'

import { secretSsoToken } from '@/constants/environments/ssoToken'

export const generateSsoToken = async data => {
  const ssoToken = await sign(data, secretSsoToken, {
    expiresIn: '2h'
  })

  return ssoToken
}
