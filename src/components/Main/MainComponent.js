import styles from "./Main.module.scss";
import me from "../../assets/images/2DR.jpg";
import gsap from "gsap";
import { useEffect } from "react";
import Intro from "../Intro/IntroComponent";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      "img",
      {
        y: "50vmin",
        opacity: 0,
        rotateZ: -6,
      },
      { y: 0, opacity: 100, rotateZ: 3 }
    );
  }, []);
  return (
    <main role="main">
      <Intro />
      <img src={me} alt="mahmood kiaheyrati" />
    </main>
  );
};

export default Hero;
