import { User } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import { traxios } from 'traxios'

import { DYNAMO_API_BASE_URL } from '@/constants/environments/dynamoApiBaseUrl'
import { DYNAMO_API_HEADERS } from '@/constants/headers/dynamoApiHeaders'

export const POST = async (request: NextRequest) => {
  const endpoint = new URL(DYNAMO_API_BASE_URL)

  try {
    const requestData: {
      email: string
      codeConfirm: string
    } = await request.json()

    endpoint.pathname = '/auth/session'

    const requestOptions: RequestInit = {
      headers: DYNAMO_API_HEADERS
    }

    const { data, ok } = await traxios.post<{
      user: User
      token: string
      message?: string
    }>(endpoint.toString(), requestData, requestOptions)

    if (!ok) {
      throw new Error(data.message)
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error({
      'POST/auth/session': error.message
    })
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    )
  }
}
