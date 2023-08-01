import { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController() {
  const mainCamera = useRef();
  const { set: setRenderer, size, camera } = useThree();

  useEffect(() => {
    setRenderer(() => ({ camera: mainCamera.current }));
  }, [setRenderer]);

  const [rotation, setRotation] = useState(0);

  let rAF;
  const handleMouseMove = (e) => {
    if (rAF) {
      return;
    }

    rAF = requestAnimationFrame(() => {
      const newRotation = ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      setRotation(newRotation * 0.05);
      rAF = null;
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (mainCamera.current) {
      const radius = 10;
      mainCamera.current.position.x = radius * Math.sin(rotation);
      mainCamera.current.position.z = radius * Math.cos(rotation);
      mainCamera.current.lookAt(0, 0, 0);
    }
  });

  useEffect(() => {
    const updateCameraAspect = () => {
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
    };

    updateCameraAspect();
    window.addEventListener('resize', updateCameraAspect);

    return () => {
      window.removeEventListener('resize', updateCameraAspect);
    };
  }, [camera, size]);

  return (
    <perspectiveCamera ref={mainCamera} position={[0, 6, 10]} />
  );
}