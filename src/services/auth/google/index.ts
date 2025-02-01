import { AxiosInstance } from 'axios'

import { User } from '@/types/models/user'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import { CreateUserData, LoginUserData, UpdateUserData } from './types'

export class GoogleAuth {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  createUser = async (
    payload: CreateUserData
  ): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data, status } = await this.instance.post(`/google`, payload)

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
        `/users/google/login-user/${payload.email}`
      )

      if (status !== 200) {
        throw new Error(data.message)
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

  updateUser = async ({
    userId,
    googleId
  }: UpdateUserData): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data, status } = await this.instance.get(
        `/users/google/update-user/${userId}/${googleId}`
      )

      if (status !== 200) {
        throw new Error(data.message)
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
