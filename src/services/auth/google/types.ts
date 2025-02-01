import { User } from '@/types/models/user'

export interface CreateUserData
  extends Pick<
    User,
    | 'address'
    | 'city'
    | 'email'
    | 'password'
    | 'firstname'
    | 'lastname'
    | 'state'
    | 'zip_code'
    | 'profile_picture'
    | 'google_id'
  > {}

export interface LoginUserData {
  email: string
}

export interface UpdateUserData {
  googleId: string
  userId: number
}
