import React from "react";
import { useGLTF } from "@react-three/drei";

export function WithMeta(props) {
  const { scene } = useGLTF("/models/WithMeta.glb");
  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/WithMeta.glb");
