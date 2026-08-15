import * as React from 'react';
import { cn } from '@/lib/utils';

export type InputProps = React.ComponentProps<'input'>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex min-h-11 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-base text-foreground shadow-2xs transition-colors',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-olive',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/40',
          'aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive',
          'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          'md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
export default Input;