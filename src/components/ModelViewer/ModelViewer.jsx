import React, { useEffect, Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, useTexture, useFBX, useAnimations, Html } from "@react-three/drei";
import * as THREE from 'three';

const Model = () => {
  const group = useRef();
  const fbx = useFBX("/dragon_anim.fbx");
  const { actions, names } = useAnimations(fbx.animations, group);

  const props = useTexture({
    dragonMap: "/textures/Dragon_Bump_Col2.jpg",
    dragonNormal: "/textures/Dragon_Nor.jpg",
    fireMap: "/textures/Ani_Fire_A.png",
  });

  props.dragonMap.colorSpace = THREE.SRGBColorSpace;
  props.fireMap.colorSpace = THREE.SRGBColorSpace;

  // Apply texture manually
  React.useMemo(() => {
    fbx.traverse((child) => {
      if (child.isMesh) {
        const name = child.name.toLowerCase();

        if (name.includes('fire') || name.includes('flame') || name.includes('fx')) {
          child.material = new THREE.MeshStandardMaterial({
            map: props.fireMap,
            transparent: true,
            opacity: 1,
            depthWrite: false,
            emissive: new THREE.Color("orange"),
            emissiveMap: props.fireMap,
            emissiveIntensity: 2,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
          });
        } else {
          child.material = new THREE.MeshStandardMaterial({
            map: props.dragonMap,
            normalMap: props.dragonNormal,
            side: THREE.DoubleSide,
            roughness: 0.6,
          });
        }
      }
    });
  }, [fbx, props]);

  // Auto-play 'Fly' animation
  useEffect(() => {
    if (actions && names.length > 0) {
      // Find animation containing 'fly', otherwise use the first one
      const flyActionName = names.find(n => n.toLowerCase().includes('fly')) || names[0];
      const action = actions[flyActionName];

      if (action) {
        action.reset().fadeIn(0.5).play();
      }
    }
  }, [actions, names]);

  return (
    <group ref={group} dispose={null}>
      <Center>
        <primitive object={fbx} scale={0.01} />
      </Center>
    </group>
  );
};


const ModelViewer = () => {
  return (
    <div id="model-section" className="w-full h-[600px] bg-transparent relative flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center text-white mb-4">My 3D Dragon</h2>

      <div className="w-full h-full cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} />
          <pointLight position={[0, -2, 2]} intensity={1} color="orange" />

          <Suspense fallback={
            <Html center>
              <div className="text-white font-bold text-xl animate-pulse">Loading Dragon...</div>
            </Html>
          }>
            <Model />
          </Suspense>

          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.5}
            minDistance={90}
            maxDistance={190}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default ModelViewer;
