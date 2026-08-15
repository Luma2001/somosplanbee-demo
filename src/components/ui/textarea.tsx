import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.ComponentProps<'textarea'>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-24 w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-base text-foreground shadow-2xs transition-colors',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-olive',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/40',
          'aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive',
          'md:text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
export default Textarea;