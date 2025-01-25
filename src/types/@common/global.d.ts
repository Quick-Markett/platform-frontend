import { User } from './authentication'

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: User
  }
}
