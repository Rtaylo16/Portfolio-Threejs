import { useMemo } from 'react';
import * as THREE from 'three';

function useFloorCircles() {
  const { circleFirst, circleSecond, circleThird } = useMemo(() => {
    const circleGeometry = new THREE.CircleGeometry(5, 64);
    const circleMaterial = new THREE.MeshStandardMaterial({ color: '#858585' });
    const circleMaterial2 = new THREE.MeshStandardMaterial({ color: '#aeeffa' });
    const circleMaterial3 = new THREE.MeshStandardMaterial({ color: 0x7ad0ac });

    const circleFirst = new THREE.Mesh(circleGeometry, circleMaterial);
    const circleSecond = new THREE.Mesh(circleGeometry, circleMaterial2);
    const circleThird = new THREE.Mesh(circleGeometry, circleMaterial3);

    circleFirst.position.y = -0.29;
    circleSecond.position.y = -0.28;
    circleSecond.position.x = 2;
    circleThird.position.y = -0.27;

    circleFirst.scale.set(0, 0, 0);
    circleSecond.scale.set(0, 0, 0);
    circleThird.scale.set(0, 0, 0);

    circleFirst.rotation.x =
      circleSecond.rotation.x =
      circleThird.rotation.x =
        -Math.PI / 2;

    circleFirst.receiveShadow =
      circleSecond.receiveShadow =
      circleThird.receiveShadow =
        true;

    return { circleFirst, circleSecond, circleThird };
  }, []);

  return { circleFirst, circleSecond, circleThird };
}

export default useFloorCircles;