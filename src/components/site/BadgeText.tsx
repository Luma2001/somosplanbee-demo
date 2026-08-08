import { Sparkles } from 'lucide-react';


interface BadgeTextProps {
  badgeText?: string;
}

const BadgeText = ({ badgeText }: BadgeTextProps) => {
  return (
    <div>
            {badgeText && (
            <p className="inline-flex items-center gap-2 bg-honey-deep px-4 py-1.5 text-lg font-semibold text-primary">
              <Sparkles className="size-4" aria-hidden="true" />
              {badgeText}
            </p>)}
    </div>
  )
}

export default BadgeText
