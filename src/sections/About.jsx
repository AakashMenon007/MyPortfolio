import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import GradientSpheres from "../components/GradientSpheres";
import { MUS } from "../components/models/MUS";
import TitleHeader from "../components/TitleHeader";
import { bentoSocialLinks } from "../constants";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div>
                  <img
                    src="/images/flower.svg"
                    alt="flower"
                    className="md:w-32 w-16 flower"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
                    AAKASH V MENON
                  </h1>
                  <p className="md:text-2xl mt-2">
                    I am an XR/VR Developer skilled in Unity, Unreal Engine, and
                    programming languages like Python, C++, Java, and HTML/CSS.
                    With a background in graphic design and expertise in tools
                    like Adobe Photoshop and Illustrator, I create immersive
                    virtual experiences that blend aesthetics and functionality.
                    I’m passionate about tackling challenges that push creative
                    and technical boundaries and welcome opportunities for
                    impactful collaborations.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
              <div className="bg-[#B1B1B1] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
<Canvas>
                    {/* Ambient Light for overall illumination */}
                    <ambientLight intensity={0.5} color="#ffffff" />
                    
                    {/* Directional Light for focused scene lighting */}
                    <directionalLight 
                      intensity={3} 
                      position={[5, 10, 100]} 
                      shadow-mapSize-width={1024} 
                      shadow-mapSize-height={1024}
                      color="#FFFFFF"
                      castShadow 
                    />
                    
                    {/* SpotLight to highlight the model */}
                    <spotLight 
                      intensity={100} 
                      position={[0, 5, 10]} 
                      angle={Math.PI / 6} 
                      penumbra={10} 
                      castShadow 
                    />
                    
                    {/* PointLight for additional accents */}
                    <pointLight intensity={0.7} position={[-5, 2, -5]} color="#ffcc00" />
                    
                    {/* Orbit Controls for interactivity */}
                    <OrbitControls enableZoom={false} />

                    {/* The MUS Model */}
                    <MUS 
                      scale={2.5}
                      position={[0, -0.5, 0]}
                      rotation={[0.15, -0, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Immersive XR/VR Solutions
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Seamlessly blending creativity and technology, designed for
                    engagement, innovation, and ease of adaptation.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    User-Centered Design
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Intuitive and visually captivating interfaces to elevate
                    your digital experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    DREAM BIG!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    THINK BOLD!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    CREATE UNIQUE!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div
                key={index}
                className="md:col-span-4 col-span-12 row-span-2"
              >
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title md:text-4xl text-2xl md:m-0 ms-5 font-large justify-center">
                        {item.name}
                      </h1>
                    </div>
                    <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
