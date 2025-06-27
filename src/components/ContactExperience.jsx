import { Canvas } from "@react-three/fiber";
import { Menon } from "./models/Menon";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={5} color={"#1C34FF"} />
      <group rotation={[0, -0.4, 0]}>
        <Menon scale={2.2} position={[0, -2, 0]} rotation={[5, 0,1]} />
      </group>
    </Canvas>
  );
};

export default ContactExperience;
