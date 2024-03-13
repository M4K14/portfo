import styles from "./Intro.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  useEffect(() => {
    const textElements = gsap.utils.toArray("h1");
    textElements.forEach((text) => {
      gsap.to(text, {
        backgroundSize: "0%",
        ease: "none",
        scrollTrigger: {
          trigger: text,
          start: "center 25%",
          end: "center 80%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <div className={styles.intro}>
      <h1>
        Hello World! <span>WOAH</span>
      </h1>
      <h1>
        I'm Mahmood Kia <span>WHO?</span>
      </h1>
      <h1>
        A Front-End Dev <span>WHAT?</span>
      </h1>
      <h1>
        Who's also a khar! <span>HOW?</span>
      </h1>
    </div>
  );
};

export default Intro;
