// import { cookies } from 'next/headers'

// import { Auth } from '@/services/auth'
// import { generateDefaultUsername } from '@/utils/auth/generateDefaultUsername'
// import { getUserSession } from '@/utils/auth/getUserSession'

// export const googleOptions = {
//   clientId: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   async profile(profile) {
//     const cookie = await cookies()
//     const locale = cookie.get('NEXT_LOCALE')?.value

//     const user = await getUserSession()

//     const { sub: googleId, email, picture, given_name, family_name } = profile

//     if (!user) {
//       try {
//         const { data: userData, error } = await Auth.google.loginUser({
//           email
//         })

//         if (userData && !error) {
//           return {
//             ...userData
//           }
//         }

//         const { data: createdUserData } = await auth.google.createUser({
//           email,
//           firstname: given_name,
//           lastname: family_name,
//           profile_picture: picture,
//           background_picture: 'blank',
//           google_id: googleId,
//           locale,
//           username: generateDefaultUsername(given_name)
//         })

//         if (createdUserData) {
//           const { data: loginData, error: loginError } =
//             await auth.google.loginUser({
//               email
//             })

//           if (loginData && !loginError) {
//             return {
//               ...loginData
//             }
//           }
//         }
//       } catch (error) {
//         console.error({
//           googleOptionsErrorMessage: error.message
//         })
//       }
//     }

//     return {
//       id: user.id,
//       ...user
//     }
//   }
// }
