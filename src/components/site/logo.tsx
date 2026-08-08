import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export function Logo({ className = '', variant = 'default' }: LogoProps) {
  const logoSrc = variant === 'white' ? '/images/logo/logo-white.png' : '/images/logo/logohorizontal.png';

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 transition-opacity hover:opacity-90 ${className}`}
    >
      
      <Image
        src={logoSrc}
        alt="PlanBee — Impacto Social & Upcycling"
        width={140}
        height={40}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
}