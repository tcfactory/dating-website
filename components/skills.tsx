import Link from "next/link";
import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "../utils/scroll-observer";
import Modal from "../components/signupmodal";


const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 3;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }
  return (
    <div ref={refContainer} className="bg-black text-fuchsia-300">
      <div className="min-h-screen max-w-5xl mx-auto px-10  py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-5xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div
            className={s.skillText}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            The internet has made it easier for all of us to connect and fulfill
            our fantasies.
          </div>
          <span
            className={`${s.skillText} inline-block after:content-['_'] pt-12 pb-12`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            You can easily find the profile of your dreams using our advanced
            search tools.
          </span>
          <span
            className={`${s.skillText} inline-block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            Sign up for free today and have fun!
          </span>
        </div>
        <Link href="/signup">
          <button className="bg-fuchsia-400 hover:bg-fuchsia-700 text-white rounded-full mt-40 py-6 px-6 text-4xl">
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Skills;
