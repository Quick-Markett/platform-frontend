import { UseFormReturn } from 'react-hook-form'

import { RegisterMarketFormInputs } from '@/app/(user-scope)/mercados/cadastre-seu-mercado/components/FormStepper/SecondStep/types'
import { DefaultFormFields } from '@/constants/forms/default-forms-fields'

import { InputProps } from '../Input/types'

export interface PhoneNumberProps extends Omit<InputProps, 'name'> {
  formMethods: UseFormReturn<DefaultFormFields>
  label?: string
  name: keyof RegisterMarketFormInputs
}
