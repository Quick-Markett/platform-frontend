import { SetStateAction } from 'react'

export interface RegisterMarketFormInputs {
  address: string
  cep: string
  city: string
  email: string
  marketDescription: string
  marketName: string
  phone_number: string
  state: string
}

export interface AddressData {
  city: string
  state: string
  street: string
}

export interface SecondStepProps {
  setCurrentStep: React.Dispatch<SetStateAction<number>>
}
