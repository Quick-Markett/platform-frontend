import { Button } from '@/components/toolkit/Button'

export const MarketActions: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-end gap-4 lg:gap-6">
      <Button variant="primary">Editar</Button>
      <Button variant="primary">Adicionar Produtos</Button>
    </div>
  )
}
