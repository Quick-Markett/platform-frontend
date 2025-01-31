import { AxiosInstance } from 'axios'

import { Review } from '@/types/models/review'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import { CreateReviewPayload, GetReviewByIdPayload } from './types'

export class Reviews {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getReviewById = async ({
    reviewId
  }: GetReviewByIdPayload): Promise<ServiceRequestResponse<Review>> => {
    try {
      const { data, status } = await this.instance.get(
        `/reviews/${reviewId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getReviewByIdErr) {
      console.error({
        getReviewByIdErrMessage: getReviewByIdErr.message
      })

      return {
        error: getReviewByIdErr.message
      }
    }
  }

  createReview = async ({
    payload
  }: CreateReviewPayload): Promise<ServiceRequestResponse<Review>> => {
    try {
      const { data, status } = await this.instance.post(`/reviews`, payload)

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (createReviewErr) {
      console.error({
        createReviewErrMessage: createReviewErr.message
      })

      return {
        error: createReviewErr.message
      }
    }
  }

  updateReview = async ({
    reviewId
  }: GetReviewByIdPayload): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.put(
        `/reviews/${reviewId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (updateReviewErr) {
      console.error({
        updateReviewErrMessage: updateReviewErr.message
      })

      return {
        error: updateReviewErr.message
      }
    }
  }

  deleteReview = async ({
    reviewId
  }: GetReviewByIdPayload): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.delete(
        `/reviews/${reviewId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (deleteReviewErr) {
      console.error({
        deleteReviewErrMessage: deleteReviewErr.message
      })

      return {
        error: deleteReviewErr.message
      }
    }
  }
}
