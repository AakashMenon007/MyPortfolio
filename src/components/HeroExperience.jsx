import { Canvas } from "@react-three/fiber";
import { Aakash } from "./models/Aakash";
import { Suspense } from "react";

const HeroExperience = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#FF28D5"} />
      <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

      <group>
        <Aakash scale={9} position={[0, -14.7, 0]} />
        </group>
      </Suspense>  
    </Canvas>
  );
};

export default HeroExperience;
