import { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function VideoHandler({ url, scene }) {
  const videoRef = useRef();

  useEffect(() => {
    const handleVideoMetadata = (vid, child) => {
      const texture = new THREE.VideoTexture(vid);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.magFilter = THREE.LinearFilter;
      texture.minFilter = THREE.LinearFilter;
      texture.repeat.x = -1;
      texture.repeat.y = -1;
      texture.anisotropy = 0;

      child.material = new THREE.MeshStandardMaterial({
        map: texture,
        emissiveMap: texture,
        emissiveIntensity: 1,
        side: THREE.DoubleSide,
      });

      const render = () => {
        requestAnimationFrame(render);
        texture.needsUpdate = true;
      };
      render();
    };

    const vid = document.createElement("video");
    vid.src = url;
    vid.loop = true;
    vid.muted = true;
    vid.crossOrigin = "anonymous";
    vid.autoplay = true;

    vid.addEventListener("loadedmetadata", () => {
      scene.traverse((child) => {
        if (child.name === "screen") {
          handleVideoMetadata(vid, child);
        }
      });
    });

    vid.addEventListener("ended", () => {
      vid.currentTime = 0;
      vid.play();
    });

    vid.play().catch((error) => {
      console.error("Video play failed:", error);
    });

    videoRef.current = vid;
    return () => {
      vid.pause();
      videoRef.current = null;
    };
  }, [url, scene]);

  return null;
}