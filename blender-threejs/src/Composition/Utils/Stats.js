import Stats from 'stats.js';
import React, { useEffect, useRef } from 'react';

export const StatsComponent = () => {
  const statsRef = useRef();

  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0);
    statsRef.current.appendChild(stats.dom);
    const animate = () => {
      stats.begin();
      stats.end();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return <div ref={statsRef} />;
};