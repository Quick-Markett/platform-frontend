'use client'

import { signIn } from 'next-auth/react'
import Error from 'next/error'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/toolkit/Button'
import { InputField } from '@/components/toolkit/Fields/InputField'
import useRefreshRoute from '@/hooks/useRefreshRoute'
import { useUserSession } from '@/hooks/useUserSession'
import { auth } from '@/instances/instanceAuth'
import { instanceMotor } from '@/instances/instanceMotor'
import { handleCloseAuthModal } from '@/utils/customEvents/@handlers/authModal/handleCloseAuthModal'
import { zodResolver } from '@hookform/resolvers/zod'

import { DEFAULT_USER_DATA } from './data'
import { signUpFormSchema } from './schema'
import { OnSubmitPayload, SignUpFormInputs, SignUpFormProps } from './types'

export const SignUpForm: React.FC<SignUpFormProps> = ({
  setActiveStep,
  setCommonFormsData
}) => {
  const { user } = useUserSession()
  const { refreshRoute } = useRefreshRoute({
    onRefresh: handleCloseAuthModal
  })

  const {
    register,
    handleSubmit,
    formState: { isValidating }
  } = useForm<SignUpFormInputs>({
    resolver: zodResolver(signUpFormSchema())
  })

  const [isLoading, setIsLoading] = useState({
    email: false,
    google: false
  })

  const onSubmit: SubmitHandler<SignUpFormInputs> = async ({
    name,
    email: originalEmail,
    password,
    confirmPassword
  }: OnSubmitPayload) => {
    if (password !== confirmPassword) {
      return new Error({
        statusCode: 500,
        title: 'The passwords are diferent!'
      })
    }

    const email = originalEmail.trim().toLowerCase()

    setIsLoading(prev => ({
      ...prev,
      email: true
    }))

    try {
      const { error: accountDoesNotExist } =
        await instanceMotor.users.getUserByEmail({ email })

      if (accountDoesNotExist) {
        const { error } = await auth.sso.createUser({
          ...DEFAULT_USER_DATA,
          name,
          email,
          password
        })

        if (error) {
          throw new Error({
            statusCode: 500,
            title: 'Error when trying to create new user'
          })
        }

        setActiveStep('feedback')
      }
    } catch (signUpErr) {
      console.error(signUpErr)
    } finally {
      setIsLoading({
        email: false,
        google: false
      })
    }
  }

  const handleSignInWithGoogle = async () => {
    setIsLoading(prev => ({
      ...prev,
      google: true
    }))
    signIn('google')
  }

  useEffect(() => {
    if (user) {
      refreshRoute()
    }
  }, [user, refreshRoute])

  return (
    <form
      className="flex flex-col gap-4"
      id="login-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        id="name"
        placeholder="Digite o seu nome"
        autoFocus
        {...register('name')}
      />
      <InputField
        id="email"
        placeholder="Digite o seu email"
        autoFocus
        {...register('email')}
      />
      <InputField
        id="password"
        placeholder="Digite a sua senha"
        autoFocus
        {...register('password')}
      />
      <InputField
        id="confirmPassword"
        placeholder="Confirme a sua senha"
        autoFocus
        {...register('confirmPassword')}
      />
      <Button
        className="flex w-full cursor-pointer items-center gap-2 rounded-md border border-slate-200 px-2 py-1.5 transition-all duration-300 hover:bg-slate-50"
        onClick={() => handleSignInWithGoogle()}
        variant="custom"
      >
        <figure className="w-8">
          <Image
            alt="Google Logo"
            className="w-8"
            height={512}
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            width={512}
          />
        </figure>
        <p className="text-sm text-slate-500">Entrar com o Google</p>
      </Button>
      <Button
        className="min-w-full"
        isLoading={isLoading.email || isValidating}
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  )
}
