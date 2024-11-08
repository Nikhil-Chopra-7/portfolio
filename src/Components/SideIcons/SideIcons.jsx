import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./SideIcons.module.css";

const SideIcons = () => {
  const { newTheme } = React.useContext(ThemeContext);
  console.log(newTheme);
  return (
    <div className={styles.container}>
      <div
        className={styles.icons}
        style={{ right: 0, color: `${newTheme.sideIcons}` }}
      >
        <div className={styles.rightEmail}>
          <li>
            <a
              href="https://www.linkedin.com/in/nikhil-chopra-0784351a0"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="feather feather-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="mailto: nikhilchopra736@gmail.com"
              aria-label="email"
              target="_blank"
              rel="noreferrer"
            >
              {newTheme.title !== "white" ? (
                <img
                  width="20px"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4igrsBZmQcoSZ0cB-5CS6Qj0qcT4kTomZQ&usqp=CAU"
                  alt="email"
                />
              ) : (
                <img
                  src="https://freesvg.org/img/Mail-Icon-White-on-Black.png"
                  alt="email"
                  width="35px"
                />
              )}
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideIcons;
