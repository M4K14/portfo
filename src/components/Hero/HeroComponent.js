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
        <Header />
        <Main />
      </section>
      <p className={styles.skills} ref={skillsText}>
        Skills
      </p>
    </>
  );
};

export default Hero;
