import { cva } from 'class-variance-authority'

export const selectVariants = cva(
  [
    'block',
    'h-9',
    'w-full',
    'cursor-pointer',
    'appearance-none',
    'rounded-sm',
    'p-2',
    'text-sm',
    'transition-all',
    'ease-in-out',
    'focus:outline-none',
    'disabled:text-gray-400',
    'disabled:bg-neutral-100',
    'duration-300'
  ],
  {
    variants: {
      variant: {
        primary: ['border', 'md:hover:bg-neutral-100', 'bg-white'],
        secondary: [
          'border',
          'border-neutral-300',
          'md:hover:border-neutral-500',
          'focus:border-neutral-500',
          'bg-white'
        ]
      },
      error: {
        true: ['border-2', 'border-red-400'],
        false: []
      },
      hasCurrentValue: {
        true: ['text-gray-900'],
        false: ['text-gray-400']
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
