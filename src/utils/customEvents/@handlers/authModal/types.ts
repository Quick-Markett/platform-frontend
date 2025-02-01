import { AuthFormCustomSteps } from '@/components/common/AuthForm/types'

export interface AuthModalEventData {
  initialStep: AuthFormCustomSteps
  redirectUrl?: string
}
