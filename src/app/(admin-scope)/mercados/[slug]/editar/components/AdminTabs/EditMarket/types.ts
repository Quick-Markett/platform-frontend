import { SetStateAction } from 'react'

import { DefaultFormFields } from '@/constants/forms/default-forms-fields'

export interface RegisterMarketFormInputs
  extends Pick<
    DefaultFormFields,
    | 'address'
    | 'cep'
    | 'city'
    | 'email'
    | 'marketDescription'
    | 'phone_number'
    | 'state'
  > {}

export interface AddressData {
  city: string
  state: string
  street: string
}

export interface SecondStepProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>
}
