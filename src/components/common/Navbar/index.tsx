import { Account } from './icons/Account'
import { MagnifyingGlass } from './icons/MagnifyingGlass'
import { Shop } from './icons/Shop'

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed inset-0 z-[99999] max-h-[72px] w-full bg-[#f5f5f7c2] bg-opacity-10 bg-clip-padding px-6 py-4 backdrop-blur-sm backdrop-filter lg:px-4 xl:px-0">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-4 lg:gap-8">
        <div className="relative flex w-full flex-1">
          <figure className="pointer-events-none absolute left-4 top-1/2 z-10 w-5 -translate-y-1/2 text-neutral-200">
            <MagnifyingGlass className="h-4 w-4 text-neutral-600" />
          </figure>
          <input
            autoComplete="off"
            className="w-full rounded-sm bg-white px-3 py-2 pl-12 text-base outline-none ring-1 ring-neutral-300 duration-default focus:border-neutral-400 focus:ring-2 focus:ring-neutral-400"
            id="search"
            name="search"
            type="text"
          />
        </div>
        <div className="ml-2 flex items-center gap-4 lg:gap-6">
          <Shop className="h-5 w-5 cursor-pointer text-neutral-700 transition-all duration-300 hover:brightness-125" />
          <Account className="h-5 w-5 cursor-pointer text-neutral-700 transition-all duration-300 hover:brightness-125" />
        </div>
      </div>
    </nav>
  )
}
