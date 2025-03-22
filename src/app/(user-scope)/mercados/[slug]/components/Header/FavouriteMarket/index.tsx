'use client'

import { useState } from 'react'

import { FavouriteFill } from '@/assets/common/FavouriteFill'
import { FavouriteOutline } from '@/assets/common/FavouriteOutline'

export const FavouriteMarket: React.FC = () => {
  const [isMarketFavourite, setIsMarketFavourite] = useState<boolean>(false)

  return (
    <div className="flex w-full items-center justify-end gap-4">
      {isMarketFavourite ? (
        <button
          className="animate__animated animate__fadeIn animate__fast w-auto"
          onClick={() => setIsMarketFavourite(false)}
        >
          <FavouriteFill className="fill-slate-700 text-slate-700" />
        </button>
      ) : (
        <button
          className="animate__animated animate__fadeIn animate__fast w-auto"
          onClick={() => setIsMarketFavourite(true)}
        >
          <FavouriteOutline />
        </button>
      )}
    </div>
  )
}
