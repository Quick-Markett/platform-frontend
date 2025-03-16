'use client'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Button } from '@/components/toolkit/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'
import { useUserSession } from '@/hooks/useUserSession'
import { instanceMotor } from '@/instances/instanceMotor'
import { tryCatch } from '@/utils/helpers/tryCatch'
import { zodResolver } from '@hookform/resolvers/zod'

import { registerMarketSchema } from './schema'
import { AddressData, RegisterMarketFormInputs } from './types'

export const SecondStep: React.FC = () => {
  const { user } = useUserSession()
  const [addressData, setAddressData] = useState<AddressData | null>(null)

  const {
    register,
    handleSubmit,
    formState: { isValidating, isSubmitSuccessful, isSubmitting }
  } = useForm<RegisterMarketFormInputs>({
    resolver: zodResolver(registerMarketSchema())
  })

  const getMarketAddress = async (cep: string) => {
    const request = await tryCatch(
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
    )

    if (request.error) {
      console.error(request.error)
      toast.error(
        'Houve um erro ao encontrar as informações referentes ao endereço do estabelecimento'
      )
    }

    const requestData = await request.data.json()

    setAddressData({ city: requestData.localidade, state: requestData.estado })
  }

  const onSubmit: SubmitHandler<RegisterMarketFormInputs> = async ({
    address,
    cep,
    email,
    marketName,
    marketDescription,
    phone_number
  }) => {
    try {
      await instanceMotor.markets.createMarket({
        payload: {
          owner_id: user.id,
          city: addressData.city,
          state: addressData.state,
          description: marketDescription,
          name: marketName,
          zip_code: cep,
          address,
          email,
          phone_number,
          logo_url: ''
        }
      })
    } catch (submitMarketRegisterFormErr) {
      console.error(submitMarketRegisterFormErr)
    }
  }

  return !isSubmitSuccessful ? (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
      <article className="flex w-full flex-col gap-2">
        <h2 className="text-left text-2xl font-semibold lg:text-3xl">
          Formulário de Registro de Mercado
        </h2>
        <p className="text-left text-sm text-neutral-500 lg:text-base">
          Estamos quase lá! só precisamos de mais algumas informações...
        </p>
      </article>
      <form id="register-market" onSubmit={handleSubmit(onSubmit)}>
        <section className="flex w-full flex-col gap-1">
          <InputField
            id="marketName"
            label="Nome do Mercado"
            maxLength={80}
            minLength={8}
            placeholder="Digite o nome do seu estabelecimento"
            spellCheck={false}
            autoFocus
            {...register('marketName')}
            variant="secondary"
          />
          <InputField
            id="marketDescription"
            label="Fale um pouco mais sobre o seu Mercado"
            maxLength={40}
            minLength={8}
            placeholder="Digite uma descrição para seu estabelecimento"
            spellCheck={false}
            autoFocus
            {...register('marketDescription')}
            variant="secondary"
          />
          <InputField
            id="email"
            label="Email de Contato"
            maxLength={40}
            minLength={8}
            placeholder="Digite um email de contato para seus clientes"
            spellCheck={false}
            autoFocus
            {...register('email')}
            variant="secondary"
          />
          <InputField
            id="phone_number"
            label="Telefone de contato"
            maxLength={40}
            minLength={8}
            placeholder="Digite um telefone de contato para seus clientes"
            spellCheck={false}
            autoFocus
            {...register('phone_number')}
            variant="secondary"
          />
          <InputField
            onChange={async e => {
              if (e.target.value.length === 8) {
                await getMarketAddress(e.target.value)
              }
            }}
            id="cep"
            label="CEP"
            maxLength={8}
            minLength={8}
            placeholder="Digite aqui o CEP do seu estabelecimento"
            spellCheck={false}
            autoFocus
            {...register('cep')}
            variant="secondary"
          />
          <Button
            className="mt-4 min-w-full md:text-sm"
            isLoading={isSubmitting || isValidating}
            type="submit"
            variant="primary"
          >
            Cadastrar
          </Button>
        </section>
      </form>
    </div>
  ) : (
    <div></div>
  )
}
