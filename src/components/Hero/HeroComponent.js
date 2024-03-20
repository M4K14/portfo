import styles from "./Hero.module.scss";
import Header from "../Header/HeaderComponent";
import Main from "../Main/MainComponent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const skillsText = useRef(null);

  useEffect(() => {
    gsap.to(skillsText.current, {
      scale: 3,
      bottom: "-3",
      scrollTrigger: {
        trigger: skillsText.current,
        start: "top 80%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <svg width="1066" height="786" viewBox="0 0 1066 786" fill="none">
          <path
            id="imp"
            d="M513.055 6C245.055 65.4539 -395.228 827.234 367.055 778C1265.05 720 1135.72 221.333 837.055 126C467.455 -6.8 274.388 30 261.055 80"
          />
        </svg>
        <Header />
        <Main />
      </section>
      <p id="skills" className={styles.skills} ref={skillsText}>
        Skills
      </p>
    </>
  );
};

export default Hero;
