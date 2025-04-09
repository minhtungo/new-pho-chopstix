import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';

export function useScroll() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }, 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrolling };
}
