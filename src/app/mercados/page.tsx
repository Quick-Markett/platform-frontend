import { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { WelcomeBar } from '@/components/common/WelcomeBar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { MarketOptions } from './components/MarketOptions'
import { Offers } from './components/Offers'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    opengraph: ''
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar />
      <WelcomeBar />
      <main>
        <Offers />
        <MarketOptions />
      </main>
      <Footer />
    </>
  )
}

export default Page
