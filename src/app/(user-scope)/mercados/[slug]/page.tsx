import { NextPage } from 'next'

import { WelcomeBar } from '@/components/common/WelcomeBar'
import { instanceMotor } from '@/instances/instanceMotor'
import { getMetaData } from '@/utils/seo/getMetaData'

import { Header } from './components/Header'
import { DynamicMarketPageProps } from './types'

export async function generateMetadata({ params }: DynamicMarketPageProps) {
  const { slug } = await params

  return getMetaData({
    title: '',
    description: '',
    image: '',
    url: `/mercados/${slug}`
  })
}

// export async function generateStaticParams() {
//   const { data: markets } = await instanceMotor.markets.getAllMarkets()

//   return markets.map(({ slug }) => ({
//     slug
//   }))
// }

const Page: NextPage = async ({ params }: DynamicMarketPageProps) => {
  const { slug } = await params
  const formattedSlug = Number(slug)

  // TODO: Replace "getMarketById" by "getMarketBySlug"
  const { data: market } = await instanceMotor.markets.getMarketById({
    marketId: formattedSlug
  })

  return (
    <>
      <WelcomeBar />
      <main>
        <Header market={market} />
      </main>
    </>
  )
}

export default Page
