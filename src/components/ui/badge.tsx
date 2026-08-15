import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow-2xs hover:bg-olive',
        secondary:
          'border-border/40 bg-secondary text-secondary-foreground hover:bg-secondary/80 font-medium',
        honey:
          'border-honey-deep/20 bg-honey/20 text-honey-deep hover:bg-honey/30 font-medium',
        olive:
          'border-olive/20 bg-olive/15 text-olive hover:bg-olive/25 font-medium',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow-2xs hover:bg-destructive/90',
        outline:
          'border-border bg-transparent text-foreground hover:bg-muted/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
export default Badge;