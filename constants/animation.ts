import { Variants } from 'framer-motion';

export const defaultEasing = [0.6, -0.05, 0.01, 0.99];

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity',
  },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 30,
    transition: { duration: 0.6, ease: defaultEasing },
    willChange: 'opacity, transform',
  },
};

export const themeAnimation = 'transition: background-color 0.2s ease-in, color 0.2s ease-in;';

export const comeUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: { type: 'spring', damping: 20 },
    willChange: 'opacity, y',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 20 },
    willChange: 'opacity, y',
  },
};
