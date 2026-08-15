import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] motion-reduce:active:scale-100',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-2xs hover:bg-olive hover:text-white',
        olive:
          'bg-olive text-white shadow-soft hover:bg-olive/90 hover:shadow-lift',
        honey:
          'bg-honey text-graphite shadow-2xs hover:bg-honey-deep hover:text-white',
        destructive:
          'bg-destructive text-destructive-foreground shadow-2xs hover:bg-destructive/90',
        outline:
          'border border-border bg-background text-foreground shadow-2xs hover:bg-secondary hover:text-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-2xs hover:bg-secondary/80',
        ghost:
          'hover:bg-secondary hover:text-foreground',
        link:
          'text-olive underline-offset-4 hover:underline p-0 h-auto font-medium',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 rounded-lg px-3 text-xs',
        lg: 'h-12 rounded-xl px-8 text-base',
        icon: 'size-11 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
export default Button;