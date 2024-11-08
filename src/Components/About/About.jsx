import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://ik.imagekit.io/rt3e1gwcw/20220813_181710__1_-removebg-preview.png"
      : "https://miro.medium.com/max/1360/1*IRGHmiGsa16stedQvIaZfw.gif";
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={img}
          alt=""
          style={{
            borderRadius: "16px",
            background: "#d8d1c4",
            backdropFilter: "blur(40px)",
          }}
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          A frontend engineer with over 3 years of experience, specializing in
          building interactive and user-focused web applications. With expertise
          in React.js, Next.js, and a strong foundation in design principles, I
          create seamless digital experiences. Currently, I work at Leap
          Finance, where I develop everything from landing pages to data-driven
          dashboards. Outside of work, I enjoy chess, cricket, and exploring new
          music. Let's connect to build something impactful!
        </p>
      </div>
    </div>
  );
};

export default About;
