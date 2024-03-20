import { useEffect } from "react";
import "./Nav.module.scss";

const links = { about: "/", skills: "#skills", Contact: "#contact" };

const Nav = () => {
  useEffect(() => {
    // svg drawing part
    const path = document.querySelector("path");
    const length = path.getTotalLength();
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;
    path.getBoundingClientRect();
    path.style.transition = "stroke-dashoffset 1s ease-in 0s";

    const about = document.querySelector("header nav ul li:nth-child(1) a");
    about.onclick = (e) => {
      e.preventDefault();
      path.style.strokeWidth = "0.2rem";
      path.style.strokeDashoffset = 0;
    };
  }, []);

  return (
    <nav>
      <button>Menu</button>
      <ul role="presentation">
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
