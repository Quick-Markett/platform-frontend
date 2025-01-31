import { AxiosInstance } from 'axios'

import { Order } from '@/types/models/order'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import {
  CreateOrderPayload,
  DeleteOrderByIdPayload,
  GetMarketOrdersPayload,
  GetOrderByIdPayload,
  GetUserOrdersPayload,
  UpdateOrderByIdPayload
} from './types'

export class Orders {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getOrderById = async ({
    orderId
  }: GetOrderByIdPayload): Promise<ServiceRequestResponse<Order>> => {
    try {
      const { data, status } = await this.instance.get(
        `/orders/${orderId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getOrderByIdErr) {
      console.error({
        getOrderByIdErrMessage: getOrderByIdErr.message
      })

      return {
        error: getOrderByIdErr.message
      }
    }
  }

  getMarketOrders = async ({
    orderId
  }: GetMarketOrdersPayload): Promise<ServiceRequestResponse<Order[]>> => {
    try {
      const { data, status } = await this.instance.get(
        `/orders/get-market-orders/${orderId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getMarketOrdersErr) {
      console.error({
        getMarketOrdersErrMessage: getMarketOrdersErr.message
      })

      return {
        error: getMarketOrdersErr.message
      }
    }
  }

  getUserOrders = async ({
    userId
  }: GetUserOrdersPayload): Promise<ServiceRequestResponse<Order[]>> => {
    try {
      const { data, status } = await this.instance.get(
        `/orders/get-user-orders/${userId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getUserOrdersErr) {
      console.error({
        getUserOrdersErrMessage: getUserOrdersErr.message
      })

      return {
        error: getUserOrdersErr.message
      }
    }
  }

  createOrder = async ({
    payload
  }: CreateOrderPayload): Promise<ServiceRequestResponse<Order>> => {
    try {
      const { data, status } = await this.instance.post(`/orders`, payload)

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (createOrderErr) {
      console.error({
        createOrderErrMessage: createOrderErr.message
      })

      return {
        error: createOrderErr.message
      }
    }
  }

  updateOrder = async ({
    orderId
  }: UpdateOrderByIdPayload): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.put(
        `/orders/${orderId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (updateOrderErr) {
      console.error({
        updateOrderErrMessage: updateOrderErr.message
      })

      return {
        error: updateOrderErr.message
      }
    }
  }

  deleteOrder = async ({
    orderId
  }: DeleteOrderByIdPayload): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.delete(
        `/orders/${orderId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (deleteOrderErr) {
      console.error({
        deleteOrderErrMessage: deleteOrderErr.message
      })

      return {
        error: deleteOrderErr.message
      }
    }
  }
}
