import { UseFormReturn } from 'react-hook-form'

import { RegisterMarketFormInputs } from '@/app/(user-scope)/mercados/cadastre-seu-mercado/components/FormStepper/SecondStep/types'

import { InputProps } from '../Input/types'

export interface PhoneNumberProps extends Omit<InputProps, 'name'> {
  formMethods: UseFormReturn<DefaultFormMethods>
  label?: string
  name: keyof RegisterMarketFormInputs
}

export interface DefaultFormMethods {
  address?: string
  cep?: string
  city?: string
  email?: string
  marketDescription?: string
  marketName?: string
  phone_number?: string
  state?: string
}
