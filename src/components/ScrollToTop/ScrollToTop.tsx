import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [pathname]);

  return null;
};
