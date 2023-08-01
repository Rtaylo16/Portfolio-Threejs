import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useThree } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimations = ({ model, circleFirst, circleSecond, circleThird }) => {
  const modelFirstMoveAnimationRef = useRef();
  const modelSecondMoveAnimationRef = useRef();
  const modelThirdMoveAnimationRef = useRef();
  const modelFirstMoveAnimationMobileRef = useRef();
  const modelSecondMoveAnimationMobileRef = useRef();
  const modelThirdMoveAnimationMobileRef = useRef();
  const circleFirstAnimationRef = useRef();
  const circleSecondAnimationRef = useRef();
  const circleThirdAnimationRef = useRef();
  const sidebar1TopAnimationRef = useRef();
  const circleFirstAnimationMobileRef = useRef();
  const circleSecondAnimationMobileRef = useRef();
  const circleThirdAnimationMobileRef = useRef();
  const sidebar1BottomAnimationRef = useRef();
  const sidebar2TopAnimationRef = useRef();
  const sidebar2BottomAnimationRef = useRef();
  const sidebar3TopAnimationRef = useRef();
  const sidebar3BottomAnimationRef = useRef();



  useEffect(() => {

    const setupModelFirstMoveAnimation = () => {
      if (!model) return;

      const modelFirstMoveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.first-move',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          invalidateOnRefresh: true,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },
          onEnter: () => console.log('Entering first-move animation'),
          onLeave: () => console.log('Leaving first-move animation')
        },
      });

      modelFirstMoveTimeline.fromTo(
        model.position,
        { x: 0 },
        {
          x: 3, // Change this value to the desired position on the right for the first move
          duration: 1,
          ease: 'linear',
          immediateRender: false,
        }
      ).to(
        model.rotation,
        {
          y: 0, // Change this value to the original rotation angle
          duration: 1,
          ease: 'linear',
        },
        '<' // Place the rotation animation right after the model movement
      );

      modelFirstMoveAnimationRef.current = modelFirstMoveTimeline;
    };

    const setupModelSecondMoveAnimation = () => {
      if (!model) return;

      const modelSecondMoveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-move',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },

          onEnter: () => console.log('Entering second animation'),
          onLeave: () => console.log('Leaving second animation')
        },
      });

      modelSecondMoveTimeline.fromTo(
        model.position,
        { x: 3 },
        {
          x: -2,
          // Change this value to the desired position for the second move
          duration: 1,
          ease: 'linear',
          immediateRender: false,
        }
      );

      modelSecondMoveAnimationRef.current = modelSecondMoveTimeline;
    };

    const setupModelThirdMoveAnimation = () => {
      if (!model) return;

      const modelThirdMoveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.third-move',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },
          onEnter: () => console.log('Entering third animation'),
          onLeave: () => console.log('Leaving third animation')
        },
      });

      modelThirdMoveTimeline.fromTo(
        model.position,
        { x: -2 },
        {
          x: 0,
          duration: 1,
          ease: 'linear',
          immediateRender: false,
        }
      );

      modelThirdMoveAnimationRef.current = modelThirdMoveTimeline;
    };

    const setupModelFirstMoveAnimationMobile = () => {
      if (!model) return;

      const modelFirstMoveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.first-move-mobile',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          invalidateOnRefresh: true,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },
          onEnter: () => console.log('Entering first move  mobile animation'),
          onLeave: () => console.log('Leaving first move  mobile animation')
        },
      });

      modelFirstMoveTimeline.fromTo(
        model.position,
        { x: 0 },
        {
          x: 0, // Change this value to the desired position on the right for the first move
          duration: 1,
          ease: 'linear',
          immediateRender: false,
        }
      ).to(
        model.rotation,
        {
          y: 0, // Change this value to the original rotation angle
          duration: 1,
          ease: 'linear',
        },
        '<' // Place the rotation animation right after the model movement
      );

      modelFirstMoveAnimationMobileRef.current = modelFirstMoveTimeline;
    };

    const setupModelSecondMoveAnimationMobile = () => {
      if (!model) return;

      const modelSecondMoveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-move-mobile',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },

          onEnter: () => console.log('Entering  mobile second animation'),
          onLeave: () => console.log('Leaving mobile second animation')
        },
      });

      modelSecondMoveTimeline.fromTo(
        model.position,
        { x: 2 },
        {
          x: 0,
          // Change this value to the desired position for the second move
          duration: 1,
          ease: 'linear',
          immediateRender: false,
        }
      );

      modelSecondMoveAnimationMobileRef.current = modelSecondMoveTimeline;
    };

    const setupModelThirdMoveAnimationMobile = () => {
      if (!model) return;

      const modelThirdMoveTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.third-move-mobile',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },

          onEnter: () => console.log('Entering  mobile third animation'),
          onLeave: () => console.log('Leaving mobile third animation')
        },
      });

      modelThirdMoveTimeline.fromTo(
        model.position,
        { x: 0 },
        {
          x: 0,
          // Change this value to the desired position for the second move
          duration: 1,
          ease: 'linear',
          immediateRender: false,
        }
      );

      modelThirdMoveAnimationMobileRef.current = modelThirdMoveTimeline;
    };

    const setupCircleFirstAnimationMobile = () => {
      if (!circleFirst) return;

      const circleFirstTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.first-move-mobile',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },
          onEnter: () => console.log('Entering  mobile first  circle animation'),
          onLeave: () => console.log('Leaving mobile first circle animation')
        },
      }).to(circleFirst.scale, {
        x: 20,
        y: 20,
        z: 20,
        ease: 'power2.inOut',
      });

      circleFirstAnimationMobileRef.current = circleFirstTimeline;
    };

    const setupCircleSecondAnimationMobile = () => {
      if (!circleSecond) return;

      const circleSecondTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-move-mobile',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },
          onEnter: () => console.log('Entering  mobile second  circle animation'),
          onLeave: () => console.log('Leaving mobile second circle animation')
        },
      }).to(circleSecond.scale, {
        x: 20,
        y: 20,
        z: 20,
        ease: 'power2.inOut',
      }).to(
        // Zoom in on the computer
        model.scale,
        {
          x: 1, // Change this value to the desired scale
          y: 1, // Change this value to the desired scale
          z: 1, // Change this value to the desired scale
          duration: 1,
          ease: 'linear',
        },
      ).to(
        // Rotate the model
        model.rotation,
        {
          y: Math.PI / 2.5, // Change this value to the desired rotation angle
          duration: 1,
          ease: 'linear',
        },
        '<' // Place the rotation animation right after the model movement
      );

      circleSecondAnimationMobileRef.current = circleSecondTimeline;
    };

    const setupCircleThirdAnimationMobile = () => {
      if (!circleThird) return;

      const circleThirdTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.third-move-mobile',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },
          onEnter: () => console.log('Entering  mobile third  circle animation'),
          onLeave: () => console.log('Leaving mobile third circle animation')

        },
      }).to(circleThird.scale, {
        x: 20,
        y: 20,
        z: 20,
        ease: 'power2.inOut',
      }).to(
        // Zoom in on the computer
        model.scale,
        {
          x: 1.5, // Change this value to the desired scale
          y: 1.5, // Change this value to the desired scale
          z: 1.5, // Change this value to the desired scale
          duration: 1,
          ease: 'linear',
        }).to(
          // Rotate the model
          model.rotation,
          {
            y: Math.PI / 4, // Change this value to the desired rotation angle
            duration: 1,
            ease: 'linear',
          },
          '<' // Place the rotation animation right after the model movement
        );

      circleThirdAnimationMobileRef.current = circleThirdTimeline;
    };

    const killAllAnimations = () => {
      if (modelFirstMoveAnimationRef.current) {
        modelFirstMoveAnimationRef.current.kill();
      }
      if (modelSecondMoveAnimationRef.current) {
        modelSecondMoveAnimationRef.current.kill();
      }
      if (circleFirstAnimationRef.current) {
        circleFirstAnimationRef.current.kill();
      }
      if (circleSecondAnimationRef.current) {
        circleSecondAnimationRef.current.kill();
      }
      if (circleThirdAnimationRef.current) {
        circleThirdAnimationRef.current.kill();
      }
      if (sidebar1TopAnimationRef.current) {
        sidebar1TopAnimationRef.current.kill();
      }
      if (sidebar1BottomAnimationRef.current) {
        sidebar1BottomAnimationRef.current.kill();
      }
      if (sidebar2TopAnimationRef.current) {
        sidebar2TopAnimationRef.current.kill();
      }
      if (sidebar1BottomAnimationRef.current) {
        sidebar2BottomAnimationRef.current.kill();
      }
      if (sidebar3TopAnimationRef.current) {
        sidebar3TopAnimationRef.current.kill();
      }
      if (sidebar3BottomAnimationRef.current) {
        sidebar3BottomAnimationRef.current.kill();
      } if (modelFirstMoveAnimationMobileRef.current) {
        modelFirstMoveAnimationMobileRef.current.kill();
      } if (modelSecondMoveAnimationMobileRef.current) {
        modelSecondMoveAnimationMobileRef.current.kill();
      } if (modelThirdMoveAnimationMobileRef.current) {
        modelThirdMoveAnimationMobileRef.current.kill();
      }
    };



    const setupScrollTrigger = () => {
      console.log(`Screen width: ${window.innerWidth}px`);
      console.log(`Screen height: ${window.innerHeight}px`);
      ScrollTrigger.matchMedia({

        //Desktop
        "(min-width: 969px)": () => {
          killAllAnimations();
          // set up animations for desktop...
          setupModelFirstMoveAnimation();
          setupModelSecondMoveAnimation();
          setupModelThirdMoveAnimation();
        },

        // Mobile
        "(max-width: 968px)": () => {
          killAllAnimations();
          // set up animations for mobile...
          setupModelFirstMoveAnimationMobile();
          setupModelSecondMoveAnimationMobile();
          setupModelThirdMoveAnimationMobile();
          setupCircleFirstAnimationMobile();
          setupCircleSecondAnimationMobile();
          setupCircleThirdAnimationMobile();
        },
      });
    };


    const setupCircleFirstAnimation = () => {
      if (!circleFirst) return;

      const circleFirstTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.first-move',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 }
        },
      }).to(circleFirst.scale, {
        x: 20,
        y: 20,
        z: 20,
        ease: 'power2.inOut',
      });

      circleFirstAnimationRef.current = circleFirstTimeline;
    };

    const setupCircleSecondAnimation = () => {
      if (!circleSecond) return;

      const circleSecondTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.second-move',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 }
        },
      }).to(circleSecond.scale, {
        x: 20,
        y: 20,
        z: 20,
        ease: 'power2.inOut',
      }).to(
        // Zoom in on the computer
        model.scale,
        {
          x: 1, // Change this value to the desired scale
          y: 1, // Change this value to the desired scale
          z: 1, // Change this value to the desired scale
          duration: 1,
          ease: 'linear',
        },
      ).to(
        // Rotate the model
        model.rotation,
        {
          y: Math.PI / 2.5, // Change this value to the desired rotation angle
          duration: 1,
          ease: 'linear',
        },
        '<' // Place the rotation animation right after the model movement
      );

      circleSecondAnimationRef.current = circleSecondTimeline;
    };

    const setupCircleThirdAnimation = () => {
      if (!circleThird) return;

      const circleThirdTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '.third-move',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 3,
          smoothScroll: true,
          snap: { snapTo: 1 / 3 },

        },
      }).to(circleThird.scale, {
        x: 20,
        y: 20,
        z: 20,
        ease: 'power2.inOut',
      }).to(
        // Zoom in on the computer
        model.scale,
        {
          x: 1.5, // Change this value to the desired scale
          y: 1.5, // Change this value to the desired scale
          z: 1.5, // Change this value to the desired scale
          duration: 1,
          ease: 'linear',
        }).to(
          // Rotate the model
          model.rotation,
          {
            y: Math.PI / 4, // Change this value to the desired rotation angle
            duration: 1,
            ease: 'linear',
          },
          '<' // Place the rotation animation right after the model movement
        );

      circleThirdAnimationRef.current = circleThirdTimeline;
    };

    const setupSidebar1TopAnimation = () => {
      const sidebar = document.querySelector('.sidebar-1');
      if (!sidebar) return;

      const sidebarAnimation = gsap.to(sidebar, {
        borderTopRightRadius: 10,
        scrollTrigger: {
          trigger: sidebar,
          start: "top bottom",
          end: "top top",
          scrub: 0.6,
        },
      });

      sidebar1TopAnimationRef.current = sidebarAnimation;
    };

    const setupSidebar1BottomAnimation = () => {
      const sidebar = document.querySelector('.sidebar-1');
      if (!sidebar) return;

      const sidebarAnimation = gsap.to(sidebar, {
        borderBottomRightRadius: 10,
        scrollTrigger: {
          trigger: sidebar,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      sidebar1BottomAnimationRef.current = sidebarAnimation;
    };

    const setupSidebar2TopAnimation = () => {
      const sidebar = document.querySelector('.sidebar-2');
      if (!sidebar) return;

      const sidebarAnimation = gsap.to(sidebar, {
        borderTopLeftRadius: 10,
        scrollTrigger: {
          trigger: sidebar,
          start: "top bottom",
          end: "top top",
          scrub: 0.6,
        },
      });

      sidebar2TopAnimationRef.current = sidebarAnimation;
    };

    const setupSidebar2BottomAnimation = () => {
      const sidebar = document.querySelector('.sidebar-2');
      if (!sidebar) return;

      const sidebarAnimation = gsap.to(sidebar, {
        borderBottomLeftRadius: 10,
        scrollTrigger: {
          trigger: sidebar,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      sidebar2BottomAnimationRef.current = sidebarAnimation;
    };

    const setupSidebar3TopAnimation = () => {
      const sidebar = document.querySelector('.sidebar-3');
      if (!sidebar) return;

      const sidebarAnimation = gsap.to(sidebar, {
        borderTopRightRadius: 10,
        scrollTrigger: {
          trigger: sidebar,
          start: "top bottom",
          end: "top top",
          scrub: 0.6,
        },
      });

      sidebar3TopAnimationRef.current = sidebarAnimation;
    };

    const setupSidebar3BottomAnimation = () => {
      const sidebar = document.querySelector('.sidebar-3');
      if (!sidebar) return;

      const sidebarAnimation = gsap.to(sidebar, {
        borderBottomRightRadius: 10,
        scrollTrigger: {
          trigger: sidebar,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 0.6,

        },
      });

      sidebar3BottomAnimationRef.current = sidebarAnimation;
    };

    setupScrollTrigger();
    setupCircleFirstAnimation();
    setupCircleSecondAnimation();
    setupCircleThirdAnimation();
    setupSidebar1TopAnimation();
    setupSidebar1BottomAnimation();
    setupSidebar2TopAnimation();
    setupSidebar2BottomAnimation();
    setupSidebar3TopAnimation();
    setupSidebar3BottomAnimation();



    return killAllAnimations;
  }, [model, circleFirst, circleSecond, circleThird]);

  return null;
};

export default ScrollAnimations