import { z } from 'zod'

import { normalEmailValidation } from '@/utils/helpers/normalEmailValidation'
import { verifyPhoneMinLength } from '@/utils/helpers/verifyPhoneMinLength'

export const loginFormSchema = ({
  requiredFieldCopy
}: {
  requiredFieldCopy: string
}) =>
  z.object({
    email: z
      .string()
      .nonempty(requiredFieldCopy)
      .email({ message: requiredFieldCopy })
      .refine(value => normalEmailValidation({ value }), {
        message: requiredFieldCopy
      }),
    password: z
      .string()
      .nonempty(requiredFieldCopy)
      .refine(value => verifyPhoneMinLength({ value }), {
        message: requiredFieldCopy
      })
  })
