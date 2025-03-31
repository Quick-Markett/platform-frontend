import { useAdminContext } from '@/contexts/AdminProvider'

import { NoResults } from './NoResults'

export const EditCategories: React.FC = () => {
  const { categories } = useAdminContext()

  const hasResults = categories.length > 0

  return (
    <div className="flex w-full flex-col gap-6">
      <h2 className="text-xl font-medium lg:text-2xl">
        Editar Categorias do Mercado
      </h2>
      <div className="flex flex-col gap-3 rounded-md border border-neutral-200 bg-white p-8">
        {hasResults ? <p>categorias</p> : <NoResults />}
      </div>
    </div>
  )
}
