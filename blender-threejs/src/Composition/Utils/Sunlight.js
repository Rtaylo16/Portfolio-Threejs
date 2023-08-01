import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function Sunlight() {
  const { scene } = useThree();

  useEffect(() => {
    const sunLight = new THREE.DirectionalLight("#ffffff", 1);
    sunLight.castShadow = true;
    sunLight.shadow.camera.far = 20;
    sunLight.shadow.mapSize.set(1048, 1048);
    sunLight.shadow.normalBias = 0.05;

    sunLight.position.set(-10, -10, -10);
    scene.add(sunLight);
    const ambientLight = new THREE.AmbientLight("#ffffff", 0.05);
    scene.add(ambientLight);

    return () => {
      scene.remove(sunLight);
      scene.remove(ambientLight);
    };
  }, [scene]);

  return null;
}