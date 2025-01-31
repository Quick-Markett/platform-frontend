import { AxiosInstance } from 'axios'

import { OrderItem } from '@/types/models/orderItem'
import { Product } from '@/types/models/product'
import { ServiceRequestResponse } from '@/types/services/serviceRequestResponse'

import {
  CreateOrderItemPayload,
  DeleteOrderItemPayload,
  GetOrderItemByIdPayload,
  GetOrderItemsPayload,
  UpdateOrderItemPayload
} from './types'

export class OrderItems {
  private instance: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.instance = instance
  }

  getOrderItemById = async ({
    orderItemId
  }: GetOrderItemByIdPayload): Promise<ServiceRequestResponse<OrderItem>> => {
    try {
      const { data, status } = await this.instance.get(
        `/order-items/${orderItemId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getOrderItemByIdErr) {
      console.error({
        getOrderItemByIdErrMessage: getOrderItemByIdErr.message
      })

      return {
        error: getOrderItemByIdErr.message
      }
    }
  }

  getOrderItems = async ({
    orderItemId
  }: GetOrderItemsPayload): Promise<ServiceRequestResponse<Product[]>> => {
    try {
      const { data, status } = await this.instance.get(
        `/order-items/get-order-items/${orderItemId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (getOrderItemsErr) {
      console.error({
        getOrderItemsErrMessage: getOrderItemsErr.message
      })

      return {
        error: getOrderItemsErr.message
      }
    }
  }

  createOrderItem = async ({
    payload
  }: CreateOrderItemPayload): Promise<ServiceRequestResponse<OrderItem>> => {
    try {
      const { data, status } = await this.instance.post(`/order-items`, payload)

      if (status !== 200) {
        throw new Error(data.message)
      }

      return data
    } catch (createOrderItemErr) {
      console.error({
        createOrderItemErrMessage: createOrderItemErr.message
      })

      return {
        error: createOrderItemErr.message
      }
    }
  }

  updateOrderItem = async ({
    orderItemId
  }: UpdateOrderItemPayload): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.put(
        `/order-items/${orderItemId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (updateOrderItemErr) {
      console.error({
        updateOrderItemErrMessage: updateOrderItemErr.message
      })

      return {
        error: updateOrderItemErr.message
      }
    }
  }

  deleteOrderItem = async ({
    orderItemId
  }: DeleteOrderItemPayload): Promise<ServiceRequestResponse<void>> => {
    try {
      const { data, status } = await this.instance.delete(
        `/order-items/${orderItemId.toString()}`
      )

      if (status !== 200) {
        throw new Error(data.message)
      }
    } catch (deleteOrderItemErr) {
      console.error({
        deleteOrderItemErrMessage: deleteOrderItemErr.message
      })

      return {
        error: deleteOrderItemErr.message
      }
    }
  }
}
