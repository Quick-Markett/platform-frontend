import { Ticket } from './icons/Ticket'

export const WelcomeBar: React.FC = () => {
  return (
    <div className="flex w-full items-center justify-center gap-4 bg-emerald-600 px-4 py-3">
      <Ticket className="h-5.5 w-5.5 rotate-[-55deg] text-white" />
      <p className="text-sm font-normal text-white lg:text-base">
        Você tem vários cupons! Aproveite seus descontos.
      </p>
    </div>
  )
}
