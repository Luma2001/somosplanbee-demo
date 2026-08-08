import { HeroBackgroundProps } from '@/components/site/Hero/HeroBackground';
import { HeroSideBySideProps } from '@/components/site/Hero/HeroSideBySide';

export type HeroProps =
  | ({ variant: 'background' } & HeroBackgroundProps)
  | ({ variant: 'side-by-side' } & HeroSideBySideProps);