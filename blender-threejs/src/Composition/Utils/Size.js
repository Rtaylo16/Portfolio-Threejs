import { useState, useEffect } from 'react';

function useConsistentScale(initialWidth, initialHeight) {
  const [scale, setScale] = useState([initialWidth, initialHeight, 1]);

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const scaleFactor = Math.min(
        viewportWidth / initialWidth,
        viewportHeight / initialHeight
      );

      setScale([initialWidth * scaleFactor, initialHeight * scaleFactor, 1]);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => {
      window.removeEventListener('resize', updateScale);
    };
  }, [initialWidth, initialHeight]);

  return scale;
}

export default useConsistentScale;