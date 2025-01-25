import { Container } from '@/components/toolkit/Container'
import { formatCurrency } from '@/utils/getters/getFormattedCurrency'

import { MARKETS } from './data'

export const MarketOptions: React.FC = () => {
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
        {MARKETS.map((market, index: number) => (
          <li
            className="flex w-full cursor-pointer items-center gap-3 rounded-sm border border-neutral-100 p-2 transition-all duration-300 hover:bg-neutral-50"
            key={`${market.nome}-${index}`}
          >
            <figure className="h-12 w-12 rounded-sm bg-neutral-200 lg:h-20 lg:w-20" />
            <article className="w-full flex-1">
              <p className="text-base font-medium">{market.nome}</p>
              <p className="mt-2 text-xs lg:text-sm lg:text-neutral-600">
                Está à {market.distancia}km de você
              </p>
              <div className="mt-0.5 flex items-center gap-1">
                <p className="text-xs lg:text-sm lg:text-neutral-500">
                  {market.tempoEntrega.minTime}min-{market.tempoEntrega.maxTime}
                  min
                </p>
                <span className="text-xs text-neutral-500 lg:text-sm"> • </span>
                {market.precoEntrega === 'Grátis' ? (
                  <p className="text-sm text-amber-700">
                    {market.precoEntrega}
                  </p>
                ) : (
                  <p className="text-xs text-neutral-500 lg:text-sm">
                    {formatCurrency(Number(market.precoEntrega))}
                  </p>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Container>
  )
}
