import { type AnimationProps } from 'framer-motion';

const DURATION = 0.4;
export const section = (isExpand: boolean): AnimationProps => ({
  variants: {
    open: {
      height: 'auto'
    },
    close: {
      height: 0
    }
  },
  transition: { duration: DURATION },
  initial: 'close',
  animate: isExpand ? 'open' : 'close'
});

export const container = (isExpand: boolean): AnimationProps => ({
  variants: {
    open: {
      height: 'auto'
    },
    close: {
      height: 0
    }
  },
  transition: { duration: DURATION },
  initial: 'open',
  animate: isExpand ? 'close' : 'open'
});

export const image = (isExpand: boolean): AnimationProps => ({
  variants: {
    open: {
      height: '100%'
    },
    close: {
      height: '0%'
    }
  },
  transition: { duration: DURATION },
  initial: 'open',
  animate: isExpand ? 'close' : 'open'
});
