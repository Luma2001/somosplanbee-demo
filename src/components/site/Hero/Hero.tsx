import React from 'react';
import { HeroBackground } from '@/components/site/Hero/HeroBackground';
import { HeroSideBySide } from '@/components/site/Hero/HeroSideBySide';
import { HeroProps } from '@/components/site/Hero/types';

export function Hero(props: HeroProps) {
  if (props.variant === 'side-by-side') {
    return <HeroSideBySide {...props} />;
  }

  return <HeroBackground {...props} />;
}