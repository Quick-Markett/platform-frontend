import { Anchor } from '@/components/toolkit/Anchor'
import { Button } from '@/components/toolkit/Button'

import { MarketActionsProps } from './types'

export const MarketActions: React.FC<MarketActionsProps> = ({ market }) => {
  return (
    <div className="flex w-full items-center justify-end gap-4 lg:gap-6">
      <Anchor
        className="md:text-base"
        href={`/mercados/${market.slug}/editar`}
        variant="primary"
      >
        Editar
      </Anchor>
      <Button className="md:text-base" variant="primary">
        Adicionar Produtos
      </Button>
    </div>
  )
}
