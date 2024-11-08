import { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <div style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          <a href="mailto:nikhilchopra736@gmail.com">
            Email: nikhilchopra736@gmail.com
          </a>
          <br />
          <a href="tel:9915323765">9915323765</a>
        </div>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:9915323765"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto: nikhilchopra736@gmail.com"
            aria-label="email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-envelope"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-chopra-0784351a0"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        Designed and build by Nikhil Chopra, 2024 All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
