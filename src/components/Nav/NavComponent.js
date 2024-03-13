import gsap from "gsap";
import "./Nav.module.scss";
import { useEffect, useRef } from "react";

const links = { about: "/", skills: "/", Contact: "/" };

const Nav = () => {
  const menu = useRef(null);

  const openUp = () => {
    gsap.fromTo(
      "ul[role=" + "presentation" + "]",
      { display: "none", width: 0 },
      {
        duration: 1,
        display: "block",
        width: "100%",
        stagger: true,
      }
    );
  };

  return (
    <nav>
      <button onMouseEnter={openUp}>Menu</button>
      <ul role="presentation" ref={menu}>
        {Object.keys(links).map((key, index) => (
          <li role="menuitem" key={index}>
            <a href={links[key]}>{key}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
