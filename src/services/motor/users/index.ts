import { AxiosInstance } from 'axios'

import { User } from '@/types/models/user'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import { GetUserByIdPayload } from './types'

export class Users {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getUserById = async ({
    userId
  }: GetUserByIdPayload): Promise<ServiceRequestResponse<User>> => {
    try {
      const { data, status } = await this.instance.get(
        `/users/${userId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getUserByIdErr) {
      console.error({
        getUserByIdErrMessage: getUserByIdErr.message
      })

      return {
        error: getUserByIdErr.message
      }
    }
  }
}
