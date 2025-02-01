import { Container } from '@/components/toolkit/Container'
import { instanceMotor } from '@/instances/instanceMotor'

import { MarketCard } from './MarketCard'

export const MarketOptions: React.FC = async () => {
  const { data: markets } = await instanceMotor.markets.getAllMarkets()

  return (
    <Container
      as="section"
      className="flex w-full flex-col gap-6 lg:gap-12"
      data-cid="markets-options"
      wrapperClassName="bg-white py-12 lg:py-20"
    >
      <article className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold lg:text-3xl">
          Mercados em Destaque
        </h2>
        <p className="text-sm text-neutral-600 lg:text-base">
          Veja alguns mercados que estão mais próximos de você.
        </p>
      </article>
      <ul className="grid w-full grid-cols-2 gap-3 lg:grid-cols-3 lg:gap-4">
        {markets.map((market, index: number) => (
          <MarketCard key={`${market.name}-${index}`} market={market} />
        ))}
      </ul>
    </Container>
  )
}
