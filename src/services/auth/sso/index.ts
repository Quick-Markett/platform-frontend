import { AxiosInstance } from 'axios'
import { compare } from 'bcryptjs'

import { User } from '@/types/models/user'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import { CreateUserData, LoginUserData } from './types'

export class SsoAuth {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createUser = async (
    payload: CreateUserData
  ): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data, status } = await this.instance.post(
        `/users/sso/create-user`,
        payload
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (err) {
      console.error({
        createUserErrorMessage: err.message
      })

      return {
        error: err.message
      }
    }
  }

  loginUser = async (
    payload: LoginUserData
  ): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data, status } = await this.instance.get(
        `/users/sso/login-user/${payload.email}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      const isValidPassword = await compare(
        payload.password,
        data.data.password
      )

      if (!isValidPassword) {
        throw new Error('Invalid Password')
      }

      return data
    } catch (err) {
      console.error({
        loginUserErrorMessage: err.message
      })
      return {
        error: err.message
      }
    }
  }
}
