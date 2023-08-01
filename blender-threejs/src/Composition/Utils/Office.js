import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import { useGLTF, Environment, useProgress,GridHelper, AxesHelper, PerspectiveCamera, BakeShadows, useVideoTexture, Effects, useTexture, ScrollControls, useScroll,useAnimations} from '@react-three/drei';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import * as THREE from 'three';
import { useLayoutEffect, Suspense, useRef, useEffect, useState, useCallback, useContext } from 'react';
import url from '../Screentexture.mp4';
import CameraController from './CameraController';
import VideoHandler from './VideoHandler';
import ModelContext from '../../../src/modelContext';
import { useSpring, animated } from '@react-spring/three'
import ScrollAnimations from './ScrollAnimation';
import { VideoTexture } from 'three/src/textures/VideoTexture';
import useConsistentScale from './Size';
import  useFloorCircles  from './circles';

extend({ THREE });
extend({ VideoTexture });
extend({animated})



function setModel(object, videoTexture) {
  
}

function enableShadows(obj) {
  obj.traverse((node) => {
    if (node instanceof THREE.Mesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });
}






 function Office({ circleFirst, circleSecond, circleThird} ) {
    const { scene } = useGLTF('/models/officelights.gltf');
    const { size } = useThree();
    const [scale, setScale] = useState(0.6);

    
    const actualRoom = scene; // Get the actual room from the scene

    const { setIsModelLoaded } = useContext(ModelContext);;
  
    useLayoutEffect(() => {
      actualRoom.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      enableShadows(actualRoom);
      setModel(actualRoom);
   
     
    }, [actualRoom]);
    const handleModelLoad = useCallback(() => {
      setIsModelLoaded(true);
    }, []);
  
    scene.onLoad = handleModelLoad;
    const [scrollOffset, setScrollOffset] = useState(0);
  
    const debounce = useCallback((func, wait) => {
      let timeout;
      return (...args) => {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }, []);
  
    useEffect(() => {
      const handleScroll = debounce((e) => {
        e.preventDefault();
        const delta = e.deltaY * 0.0001;
        const newOffset = Math.min(Math.max(scrollOffset + delta, 0), 1);
        setScrollOffset(newOffset);
      }, 50); // Adjust the debounce time as needed
    
      window.addEventListener("wheel", handleScroll, { passive: false });
      return () => {
        window.removeEventListener("wheel", handleScroll);
      };
    }, [scrollOffset, debounce]);
    
    const { position } = useSpring({
      from: { position: [0, 0, -10] },
      to: { position: [0, 0, 0] },
      config: { duration: 2000 },
      delay: 1000,
    });

    const initialWidth = 1;
    const initialHeight = 1;

    useEffect(() => {
      let newScale = Math.min(size.width, size.height) / 1000; 
      newScale = Math.max(0.1, newScale); 
      newScale = Math.min(0.6, newScale);
      setScale(newScale);
    }, [size]);

  
    return (
      <>
      <ScrollAnimations model={scene} circleFirst={circleFirst} circleSecond={circleSecond} circleThird={circleThird}/>
        <animated.mesh position={position}>
          <CameraController scrollOffset={scrollOffset} />
          <VideoHandler url={url} scene={scene} />
          <primitive object={scene}  receiveShadow  scale={scale}/>
        </animated.mesh>
    </>
    );
  }

  export default Office;