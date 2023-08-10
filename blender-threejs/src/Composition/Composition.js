import { Canvas, useFrame, useLoader, useThree, extend } from '@react-three/fiber';
import { useGLTF, Environment, useProgress,GridHelper, AxesHelper, PerspectiveCamera, BakeShadows, useVideoTexture, Effects, useTexture, ScrollControls, useScroll,useAnimations} from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import * as THREE from 'three';
import { useLayoutEffect, Suspense, useRef, useEffect, useState, useCallback, useContext } from 'react';
import { VideoTexture } from 'three/src/textures/VideoTexture';
import url from './Screentexture.mp4';
import CameraController from '../Composition/Utils/CameraController';
import VideoHandler from './Utils/VideoHandler';
import Floor from './Utils/Floor';
import Sunlight from'./Utils/Sunlight';
import ModelContext from '../modelContext';
import Spinner from './Utils/Spinner';
import { motion } from "framer-motion";
import { useSpring, animated } from '@react-spring/three'
import ScrollAnimations from './Utils/ScrollAnimation';
import Office from './Utils/Office'
import useConsistentScale from './Utils/Size'
import useFloorCircles from './Utils/circles';



extend({ THREE });
extend({ VideoTexture });
extend({animated})



export default function Firstload({ className, children, setLoading }) {


  const { circleFirst, circleSecond, circleThird } = useFloorCircles();

  return (
    <div className={className}>

      <Canvas
        style={{
          height: "100vh",
          backgroundColor: "#f9f2e6",
          width: "100vw",
        }}
        shadows
      >
        <Suspense>
          <Sunlight/>
          <Office scale={[0.6,0.6,0.6]} 
          rotation={Math.PI} 
          castShadow 
          circleFirst={circleFirst}
          circleSecond={circleSecond}
          circleThird={circleThird}
          setLoading={setLoading}
          />
          <Floor 
              circleFirst={circleFirst}
              circleSecond={circleSecond}
              circleThird={circleThird}
          />
        </Suspense>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}