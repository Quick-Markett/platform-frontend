import { z } from 'zod'

import { normalEmailValidation } from '@/utils/helpers/normalEmailValidation'

export const registerMarketSchema = () =>
  z.object({
    marketName: z.string().nonempty('Esse campo é obrigatório.'),
    marketDescription: z.string().nonempty('Esse campo é obrigatório.'),
    phone_number: z.string().nonempty('Esse campo é obrigatório.'),
    cep: z.string().nonempty('Esse campo é obrigatório.'),
    email: z
      .string()
      .nonempty('Esse campo é obrigatório.')
      .email({ message: 'Esse campo é obrigatório.' })
      .refine(value => normalEmailValidation({ value }), {
        message: 'Esse campo é obrigatório.'
      }),
    state: z.string().nonempty('Esse campo é obrigatório.'),
    city: z.string().nonempty('Esse campo é obrigatório.'),
    address: z.string().nonempty('Esse campo é obrigatório.')
  })
