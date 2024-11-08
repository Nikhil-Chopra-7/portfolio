import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import Typewriter from "typewriter-effect";
import SideIcons from "../SideIcons/SideIcons";
import TechStacks from "../TechStacks/TechStacks";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button } from "../Button/Button";
import About from "../About/About";
import { projects } from "../../Utils/Projects";
import Contact from "../Contact/Contact";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";

const Home = ({ scrollRef }) => {
  const [width] = WindowSize();
  console.log(width, "width");
  const [projectArray, setProjectArray] = useState(projects);
  const { newTheme } = React.useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    document.body.style.backgroundColor = newTheme.background;
  }, [newTheme]);

  const handleButton = () => {};

  // const handleShowMoreBtn = () => {
  // 	if (projects.length === projectArray.length) {
  // 		setProjectArray(projects.slice(0, 3));
  // 	} else {
  // 		setProjectArray(projects);
  // 	}
  // };
  return (
    <div ref={scrollRef}>
      <SideIcons />
      <div
        id="top"
        className={styles.profile}
        style={{ backgroundColor: `${newTheme.imgBackground}` }}
      >
        {width > 650 ? (
          <img
            className={styles.profileImage}
            src="https://ik.imagekit.io/rt3e1gwcw/20220813_181710__1_-removebg-preview.png?updatedAt=1730995490797"
            style={{
              scale: "70%",
              borderRadius: "16px",
              background: "#d8d1c4",
            }}
            alt="Profile pic"
          />
        ) : (
          ""
        )}
        <div
          id="home"
          data-aos="fade-zoom-out"
          className={styles.intro}
          style={{ color: `${newTheme.para}` }}
        >
          <h1>
            <p>Hi, My name is</p>
            <div className={styles.name} style={{ color: `${newTheme.title}` }}>
              Nikhil Chopra
            </div>
          </h1>

          <h1>
            <Typewriter
              options={{
                strings: [
                  "Frontend Engineer Specializing in High-Impact, User-Centric Web Solutions",
                  "Crafting Interactive and Intuitive Digital Experiences as a Frontend Engineer",
                ],
                autoStart: true,
                loop: true,
                delay: "natural",
                deleteSpeed: 25,
                pauseFor: 1000,
              }}
            />
          </h1>
          <div className={styles.btn}>
            <a
              href="https://drive.google.com/file/d/1ppPhhAv2srIS-e5FspYZ0KOVmSZ5LIzQ/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              {/*  add resume here*/}
              <Button
                text={
                  <span className={styles.resumeBtn}>
                    <span>See my Resume 😇 </span>{" "}
                    {/* <i className='fas fa-file-download'></i> */}
                    <i class="fas fa-download"></i>
                  </span>
                }
                handleButton={handleButton}
              />
              {width <= 650 ? (
                <div>
                  <a href="#contact">
                    <h2>Contact me</h2>
                  </a>
                </div>
              ) : (
                ""
              )}
            </a>
          </div>
          <h2 style={{ marginTop: "60px" }}>
            Programming is an art where mind paints the logic on the
            Computer.... -Donald Knuth
          </h2>
        </div>
      </div>

      <div
        id="about"
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
        className={styles.tagline}
      >
        <About />
      </div>

      <div id="techstacks" className={styles.techStacks}>
        <TechStacks />
      </div>

      <div
        id="experience"
        className={styles.tagline}
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-in-sine"
          data-aos-duration="700"
          style={{ color: `${newTheme.para}` }}
        ></div>
      </div>

      {/* project section from here => */}
      <div id="projects" className={styles.projects}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          Projects
        </h1>
        <div className={styles.borderBottom} />
        <div>
          {projectArray.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        {/* <Button
					text={
						projects.length !== projectArray.length
							? 'Show More'
							: 'Show Less'
					}
					handleButton={handleShowMoreBtn}
				/> */}
      </div>

      <div
        style={{
          background: `${newTheme.highlightBackground}`,
        }}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Home;
