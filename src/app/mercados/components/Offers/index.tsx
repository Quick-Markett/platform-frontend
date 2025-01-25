import React from 'react'

import { Container } from '@/components/toolkit/Container'

import { OffersWrapper } from './OffersWrapper'

export const Offers: React.FC = () => {
  return (
    <Container
      as="section"
      className="flex w-full flex-col gap-6 lg:gap-12"
      data-cid="markets-options"
      wrapperClassName="bg-white pt-12 lg:pt-20"
    >
      <article className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Produtos em Promoção
        </h2>
        <p className="text-sm text-neutral-600 lg:text-base">
          Veja alguns produtos que estão por preços imperdíveis perto de sua
          residência.
        </p>
      </article>
      <OffersWrapper />
    </Container>
  )
}
