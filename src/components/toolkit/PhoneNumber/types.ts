import { UseFormReturn } from 'react-hook-form'

import { RegisterMarketFormInputs } from '@/app/(user-scope)/mercados/cadastre-seu-mercado/components/FormStepper/SecondStep/types'

import { InputProps } from '../Input/types'

export interface PhoneNumberProps extends Omit<InputProps, 'name'> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formMethods: UseFormReturn<any>
  label?: string
  name: keyof RegisterMarketFormInputs
}
