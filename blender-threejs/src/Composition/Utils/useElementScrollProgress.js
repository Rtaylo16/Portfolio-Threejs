import { useState, useEffect } from 'react';

function useElementScrollProgress(ref) {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      const totalHeight = element.clientHeight - element.offsetTop;
      const scrolledHeight = window.pageYOffset - element.offsetTop;
      const scrollProgress = scrolledHeight / totalHeight;

      setScrollYProgress(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref]);

  return { scrollYProgress };
}

export default useElementScrollProgress;