import { VariantProps, cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-accent-fg shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_8px_20px_-8px_var(--accent)] hover:brightness-110 active:brightness-95',
        outline: 'surface-neo text-fg hover:text-accent hover:border-accent/40',
        ghost: 'text-fg-muted hover:text-fg hover:bg-surface-hover',
      },
      size: {
        sm: 'h-9 px-4',
        md: 'h-11 px-6',
        lg: 'h-14 px-8 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
