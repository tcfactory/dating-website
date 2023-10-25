import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "../utils/scroll-observer";

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div
      ref={refContainer}
      className="content-container relative min-h-screen flex flex-col items-center justify-center top-0 -z-10"
      style={
        {
          // transform: `translateY(-${progress * 20}vh)`,
        }
      }
    >
      {/* <video autoPlay loop muted playsInline className='absolute w-full h-full object-cover'>
                <source src = '/heart-on-pillow.mp4' type="video/mp4"/>
                <source src = '/heart-on-pillow.webm' type="video/webm"/>
                <source src="/heart-on-pillow.ogg" type="video/ogg" />
        </video> */}
      <div className="background relative">
        <Image
          className="object-cover"
          src="/lingerie2.png"
          layout="fill"
          alt="background-girl"
        />
      </div>

      <div
        className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image src="/logo.svg" width={200} height={200} alt="logo" />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Crush in my Backyard</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Dating Website,</span> <span>for all.</span>
        </h2>
      </div>
      <div
        className={`flex-grow-0 pb-20 md;pb-10 transition-all duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src="/arrow-down.png"
          width={100}
          height={100}
          alt="scroll down"
          onLoad={handleImageLoaded}
        />
      </div>
    </div>
  );
};

export default Masthead;
