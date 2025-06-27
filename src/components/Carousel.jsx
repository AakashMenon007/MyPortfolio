import { useState, useRef, useEffect } from "react";
import { slides } from "../constants";
import gsap from "gsap";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    gsap.to(sliderRef.current, {
      x: `-${currentSlide * 830}px`, // 800px slide width + 30px gap
      duration: 1,
      ease: "power2.inOut",
    });
  }, [currentSlide]);

  return (
    <div className="relative">
      <div className="w-full relative h-[450px] overflow-hidden">
        <div className="carousel-gradient-left-box md:w-40 w-12 h-full absolute bottom-0 left-0 z-20"></div>
        <div className="carousel-gradient-right-box md:w-40 w-12 h-full absolute bottom-0 right-0 z-20"></div>

        {/* Center first slide with padding */}
        <div
          className="absolute w-full top-0 overflow-hidden"
          style={{ paddingLeft: `calc((100vw - 800px) / 2)`, paddingRight: `calc((100vw - 800px) / 2)` }}
        >
          <div
            ref={sliderRef}
            className="flex h-[450px] items-center gap-[30px]"
          >
            {slides.map((slide, index) => (
              <div
                className="slider-item w-[800px] h-[450px] flex-none relative"
                key={index}
              >
                <img
                  src={slide.img}
                  alt="slide"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute w-full h-28 bottom-0 left-0 bg-black-300 bg-opacity-90 px-5 py-2 flex flex-col justify-center">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex-center gap-2">
                      <p className="md:text-xl text-white-50 opacity-80">
                        {index + 1}.
                      </p>
                      <p className="md:text-xl text-white-50 opacity-80">
                        {slide.title}
                      </p>
                    </div>
                    <div
                      className="flex-center gap-4 cursor-pointer"
                      onClick={() =>
                        slide.previewLink && window.open(slide.previewLink, "_blank")
                      }
                    >
                      <p className="text-xl hidden md:block text-white-50 opacity-80">
                        Preview Project
                      </p>
                      <img
                        src="/images/arrowupright.svg"
                        alt="arrow"
                        className="md:size-8 size-6"
                      />
                    </div>
                  </div>
                  <p className="md:text-sm text-xs text-white-50 opacity-70 mt-1">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-white-50 flex justify-end gap-4 md:-translate-x-24 -translate-x-4">
        <div
          onClick={prevSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-10 h-10 flex-center"
        >
          <img src="/images/CaretLeft.svg" alt="left" className="w-4 h-4" />
        </div>
        <div
          onClick={nextSlide}
          className="rounded-full cursor-pointer bg-blue-50 hover:bg-pink-100 active:scale-90 transition-all w-10 h-10 flex-center"
        >
          <img src="/images/CaretRight.svg" alt="Right" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
