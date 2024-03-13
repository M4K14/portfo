import styles from "./SkillsCard.module.scss";
import { IconContext } from "react-icons";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillsCard = ({ container, listItems }) => {
  const skillscontainer = useRef(null);
  const cardItem = useRef([]);
  cardItem.current = [];
  const addCard = (e) => {
    cardItem.current.push(e);
  };

  useEffect(() => {
    gsap.fromTo(
      skillscontainer.current,
      { width: 0, opacity: 0 },
      {
        duration: 0.5,
        width: "102%",
        opacity: 1,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: skillscontainer.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      cardItem.current,
      { opacity: 0 },
      {
        duration: 0.5,
        delay: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: skillscontainer.current,
          start: "top 80%",
        },
        stagger: 0.2,
      }
    );
    gsap.fromTo(
      cardItem.current,
      { xPercent: 0 },
      {
        xPercent: 50,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: skillscontainer.current,
          scrub: 0.5,
        },
      }
    );
  }, []);

  return (
    <section className={styles[container]} ref={skillscontainer}>
      <IconContext.Provider value={{ color: "black", size: "3rem" }}>
        <ul className={styles.cards}>
          {Object.keys(listItems).map((key, i) => (
            <li key={`${i}`} className="card-item" ref={(e) => addCard(e)}>
              {listItems[key]}
              <span>{key}</span>
            </li>
          ))}
        </ul>
      </IconContext.Provider>
    </section>
  );
};

export default SkillsCard;
