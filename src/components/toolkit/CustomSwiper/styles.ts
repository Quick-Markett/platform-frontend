import strechtedStyles from '@/styles/components/strechted-carousel.module.scss'

export const getSwiperStyles = (id: string) => {
  const swiperStyle = {
    strechted: strechtedStyles.strechtedHorizontalSwiper
  }

  return swiperStyle[id]
}
