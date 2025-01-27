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
  > {}

export interface LoginUserData {
  email: string
  password: string
}
