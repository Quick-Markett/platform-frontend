'use client'

import { useState } from 'react'

import { Container } from '@/components/toolkit/Container'

import { FirstStep } from './FirstStep'
import { SecondStep } from './SecondStep'

export const FormStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  return (
    <Container
      as="section"
      className="flex w-full flex-col gap-8 lg:gap-12"
      data-cid="form-stepper"
      wrapperClassName="bg-white py-12 lg:py-16"
    >
      {currentStep === 1 ? (
        <FirstStep setCurrentStep={setCurrentStep} />
      ) : (
        <SecondStep setCurrentStep={setCurrentStep} />
      )}
    </Container>
  )
}
