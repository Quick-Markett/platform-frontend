import { NextPage } from 'next'

import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { WelcomeBar } from '@/components/common/WelcomeBar'
import { getMetaData } from '@/utils/seo/getMetaData'

import { FormStepper } from './components/FormStepper'

export async function generateMetadata() {
  return getMetaData({
    title: '',
    description: '',
    image: '',
    url: '/mercados'
  })
}

const Page: NextPage = async () => {
  return (
    <>
      <Navbar />
      <WelcomeBar />
      <main className="min-h-[62vh]">
        <FormStepper />
      </main>
      <Footer />
    </>
  )
}

export default Page
