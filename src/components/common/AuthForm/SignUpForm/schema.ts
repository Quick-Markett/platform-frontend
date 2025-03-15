import { z } from 'zod'

import { normalEmailValidation } from '@/utils/helpers/normalEmailValidation'
import { verifyPhoneMinLength } from '@/utils/helpers/verifyPhoneMinLength'

export const signUpFormSchema = () =>
  z.object({
    name: z
      .string()
      .nonempty('Esse campo é obrigatório.')
      .refine(value => verifyPhoneMinLength({ value }), {
        message: 'Esse campo é obrigatório.'
      }),
    email: z
      .string()
      .nonempty('Esse campo é obrigatório.')
      .email({ message: 'Esse campo é obrigatório.' })
      .refine(value => normalEmailValidation({ value }), {
        message: 'Esse campo é obrigatório.'
      }),
    password: z.string().nonempty('Esse campo é obrigatório.'),
    confirmPassword: z.string().nonempty('Esse campo é obrigatório.')
  })
