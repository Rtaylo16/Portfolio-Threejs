import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import { useLayoutEffect } from 'react';
import useFloorCircles from './circles';

function Floor({circleFirst, circleSecond, circleThird} ) {
  const { scene, size } = useThree();

  

  useLayoutEffect(() => {
    const geometry = new THREE.PlaneGeometry(200, 200);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffe6a2,
      side: THREE.BackSide,
    });
    const plane = new THREE.Mesh(geometry, material);

    plane.rotation.x = Math.PI / 2;
    plane.position.y = -0.3;
    plane.receiveShadow = true;

    scene.add(plane);
    scene.add(circleFirst);
    scene.add(circleSecond);
    scene.add(circleThird);



    return () => {
      scene.remove(plane, );
      geometry.dispose();
      material.dispose();
    };
  }, [scene]);

  return null;
}

export default Floor;