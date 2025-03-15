import { DEFAULT_USER_DATA } from '@/components/common/AuthForm/SignUpForm/data'
import { auth } from '@/instances/instanceAuth'
import { generateHash } from '@/utils/auth/generateHash'
import { getUserSession } from '@/utils/auth/getUserSession'

export const credentialsOptions = {
  id: 'credentials',
  name: 'credentials',
  credentials: {
    email: {
      label: 'email',
      type: 'email'
    },
    password: {
      label: 'password',
      type: 'password'
    },
    name: {
      label: 'username',
      type: 'text'
    }
  },
  async authorize(credentials) {
    const user = await getUserSession()

    if (!user) {
      try {
        if (credentials.action === 'signIn') {
          const { email, password } = credentials

          const { data: userData, error } = await auth.sso.loginUser({
            email,
            password
          })

          if (userData && !error) {
            return {
              ...userData
            }
          }
        }

        if (credentials.action === 'signUp') {
          const { name, email, password } = credentials

          const hashedPassword = await generateHash({ password })

          const { data: createdUserData } = await auth.sso.createUser({
            ...DEFAULT_USER_DATA,
            email,
            name,
            password: hashedPassword
          })

          if (createdUserData) {
            const { data: loginData, error: loginError } =
              await auth.sso.loginUser({
                email,
                password
              })

            if (loginData && !loginError) {
              return {
                ...loginData
              }
            }
          }
        }
      } catch (error) {
        console.error({
          credentialsOptionsErrorMessage: error.message
        })
      }
    }

    return {
      id: user.id,
      ...user
    }
  }
}
