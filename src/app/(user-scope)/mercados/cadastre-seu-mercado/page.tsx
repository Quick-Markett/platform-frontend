import { NextPage } from 'next'

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
      <WelcomeBar />
      <main className="min-h-[62vh]">
        <FormStepper />
      </main>
    </>
  )
}

export default Page
