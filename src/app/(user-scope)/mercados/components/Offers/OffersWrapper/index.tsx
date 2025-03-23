import { CustomSwiper } from '@/components/toolkit/CustomSwiper'

import { OFFERS, desktopSliderOptions } from './data'
import { OfferCard } from './OfferCard'

export const OffersWrapper: React.FC = () => {
  const offersComponents = OFFERS.map((offer, index: number) => (
    <OfferCard key={`${offer.productName}-${index}`} offer={offer} />
  ))

  return (
    <div className="flex w-full">
      <CustomSwiper
        fadeColor="#f8fafc"
        options={desktopSliderOptions}
        slides={offersComponents}
        swiperSlideClassName="cursor-grab"
        swiperStyleId="strechted"
        hasLeftFade
        hasRightFade
      />
    </div>
  )
}
