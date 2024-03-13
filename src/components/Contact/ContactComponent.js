import styles from "./Contact.module.scss";
import { FaTelegram } from "react-icons/fa";
import { BsSignal } from "react-icons/bs";
import { FaMastodon } from "react-icons/fa";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <footer className={styles.footer}>
      <header>
        <h3>
          <span className={styles.download}>Download my</span>{" "}
          <span className={styles.cv}>CV</span>
        </h3>
      </header>
      <body>
        <address>📧 E-mail: leceu@hi2.in</address>
        <address>🤙 Phone: +98 939 320 1404</address>
      </body>
      <aside>
        <IconContext.Provider value={{ style: { margin: ".5rem" } }}>
          <FaTelegram />
          <BsSignal />
          <FaMastodon />
        </IconContext.Provider>
      </aside>
    </footer>
  );
};

export default Contact;
