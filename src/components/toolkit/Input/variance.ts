import { cva } from 'class-variance-authority'

export const inputVariants = cva(
  [
    'rounded-sm',
    'p-2.5',
    'text-sm',
    'ring-0',
    'outline-none',
    'duration-default',
    'disabled:bg-neutral-100',
    'disabled:cursor-not-allowed'
  ],
  {
    variants: {
      variant: {
        primary: [
          'border',
          'focus:ring-white',
          'focus:ring-1',
          'focus:border-white',
          'bg-white'
        ],
        secondary: [
          'border',
          'border-neutral-300',
          'focus:border-neutral-500',
          'bg-white'
        ]
      },
      error: {
        true: ['border-2', 'border-red-400'],
        false: []
      }
    },
    defaultVariants: {
      variant: 'primary'
    }
  }
)
