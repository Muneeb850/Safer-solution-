import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Secondary frame check to guarantee scroll reset after animation frame
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 50);

      return () => clearTimeout(timer);
    } else {
      const performScroll = () => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const navHeight = window.innerWidth < 768 ? 80 : 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = Math.max(0, elementPosition - navHeight);

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      };

      const t1 = setTimeout(performScroll, 50);
      const t2 = setTimeout(performScroll, 300);
      const t3 = setTimeout(performScroll, 650);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [pathname, hash]);

  return null;
}
