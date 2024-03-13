import styles from "./Header.module.scss";
import Nav from "../Nav/NavComponent";
import ScrambleText from "../../assets/Js/ScrambleText";

const psudonym = "M4K14";

const Header = () => {
  const scramble = ({ target }) => {
    const scrambleText = new ScrambleText(target, {
      timeOffset: 100,
    }).start();
    target.innerHTML = psudonym;
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onMouseEnter={(e) => scramble(e)}>
        <p className="title-logo">{psudonym}</p>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
