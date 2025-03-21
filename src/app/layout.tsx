import type { Metadata, NextPage } from 'next'
import { getServerSession } from 'next-auth'

import { AuthModal } from '@/components/common/AuthModal'
import { APP_FONT } from '@/constants/font'
import NextAuthProvider from '@/contexts/NextAuthProvider'
import { authOptions } from '@/libs/auth'

import '@/styles/index.scss'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout: NextPage = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt">
      <body className={`selection:bg-[#ecc79c38] ${APP_FONT.className}`}>
        <NextAuthProvider session={session}>
          {children}
          <AuthModal />
        </NextAuthProvider>
      </body>
    </html>
  )
}

export default RootLayout
