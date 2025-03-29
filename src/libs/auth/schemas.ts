import { z } from 'zod'

export const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
  action: z.enum(['signIn', 'signUp'])
})
