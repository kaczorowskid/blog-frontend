import { type KeyboardEvent } from 'react';

type UseAccessibility = {
  onKeyDown: (e: KeyboardEvent<HTMLDivElement>) => void;
};

export const useAccessibility = (callback: () => void): UseAccessibility => {
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.code === 'Enter') {
      callback();
    }
  };

  return {
    onKeyDown
  };
};
