import React, { useRef, useEffect, useMemo, useState } from 'react';
import { useGLTF, useProgress } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import * as THREE from 'three';
import gsap from 'gsap';

export function Aakash(props) {
  const group = useRef();
  const headsetRef = useRef();
  const { progress } = useProgress();
  const [isIntroAnimationDone, setIsIntroAnimationDone] = useState(false);

  const { nodes, materials, scene } = useGLTF('/models/Aakash.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);

  const mouse = useRef(new THREE.Vector2());

  // Intro animation using GSAP
  useEffect(() => {
    if (progress === 100) {
      gsap.from(group.current.rotation, {
        y: Math.PI,
        duration: 1.5,
        ease: 'power1.inOut',
        onComplete: () => setIsIntroAnimationDone(true),
      });
    }
  }, [progress]);

  // Attach headset to "Head" node
  useEffect(() => {
    if (group.current && headsetRef.current) {
      const head = group.current.getObjectByName('Head');
      if (head && headsetRef.current.parent !== head) {
        head.add(headsetRef.current);

        // Corrected HMD position, rotation (in radians), and scale
        headsetRef.current.position.set(0, 0.14, 0.03);
        headsetRef.current.rotation.set(Math.PI / 2.2, 0, 0); // 45 degrees in radians
        headsetRef.current.scale.set(0.01, 0.01, 0.01);
      }
    }
  }, [isIntroAnimationDone]);

  // Handle mouse movement for head rotation
  useEffect(() => {
    if (isIntroAnimationDone) {
      const handleMouseMove = (event) => {
        const { innerWidth, innerHeight } = window;
        mouse.current.x = (event.clientX / innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / innerHeight) * 2 + 1;

        // Clamp mouse values to prevent extreme movements
        const clampedX = THREE.MathUtils.clamp(mouse.current.x, -0.5, 0.5);
        const clampedY = THREE.MathUtils.clamp(mouse.current.y, -0.5, 0.5);

        const target = new THREE.Vector3(clampedX, clampedY, 1);
        const head = group.current.getObjectByName('Head');
        if (head) {
          head.lookAt(target); // Adjust head orientation
        }

        group.current.rotation.y = clampedX * 0.5; // Smooth horizontal rotation
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isIntroAnimationDone]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <mesh
        ref={headsetRef}
        geometry={nodes.Quest3HMD.geometry}
        material={materials.Quest3HMD}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
}

useGLTF.preload('/models/Aakash.glb');
