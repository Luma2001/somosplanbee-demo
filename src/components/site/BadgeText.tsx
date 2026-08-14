import { Sparkles } from 'lucide-react';

interface BadgeTextProps {
  badgeText?: string;
  className?: string;
}

export function BadgeText({ badgeText, className = '' }: BadgeTextProps) {
  if (!badgeText) return null;

  return (
    <span
      className={`inline-flex w-fit items-center gap-1.5 rounded-sm border border-honey-deep/20 bg-honey/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-honey-deep select-none ${className}`}
    >
      <Sparkles className="size-3.5 shrink-0" aria-hidden="true" />
      {badgeText}
    </span>
  );
}

export default BadgeText;
