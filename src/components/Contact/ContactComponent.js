import styles from "./Contact.module.scss";
import {
  FaTelegram,
  FaMastodon,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import { BsSignal } from "react-icons/bs";
import { GoMoveToTop } from "react-icons/go";
import { IconContext } from "react-icons";

const Contact = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <a href="#top" className={styles.gotop}>
        <GoMoveToTop />
      </a>
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
        <IconContext.Provider value={{ style: { margin: ".4rem" } }}>
          <a href="https://t.me/+989393201404" target="_blank">
            <FaTelegram />
          </a>
          <a
            target="_blank"
            href="https://signal.me/#eu/ZuAXJxJC3N2JBosFi4cNC6zU0SpVVQkln5QAaVe6W43AX-CbM2xE04Rel5vFExQK"
          >
            <BsSignal />
          </a>
          <a href="https://infosec.exchange/@M4K14" target="_blank">
            <FaMastodon />
          </a>
          <a href="https://github.com/M4K14" target="_blank">
            <FaGithub />
          </a>
          <a
            href="https://stackoverflow.com/users/16621255/mahmood-kiaheyrati"
            target="_blank"
          >
            <FaStackOverflow />
          </a>
        </IconContext.Provider>
      </aside>
    </footer>
  );
};

export default Contact;
