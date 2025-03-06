import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to VIT PUNE
        </p>

        <AnimatedTitle
          title="<b>u</b>nite. <b>i</b>nnovate. <b>e</b>levate. <br /><b>e</b>-Summit '25!"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>🚀 E-Summit '25 – Where Ideas Ignite, Ventures Take Flight! 🌍✨</p>
          <p className="text-gray-500">
            Get ready for the ultimate entrepreneurial experience! E-Summit '25 is not just an event—
            movement where visionaries, innovators, and changemakers come together to redefine the future.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/esumm.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
