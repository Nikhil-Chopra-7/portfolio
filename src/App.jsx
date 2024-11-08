import React, { useEffect, useRef, useState } from "react";
import Particles from "react-particles-js";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeContext } from "./ContextProvider/ThemeContext";

function App() {
  const [state, setState] = useState(false);
  const { newTheme, open, handleMenu } = React.useContext(ThemeContext);
  const scrollRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setState(true);
    }, 2000);
  }, []);
  // const handleTop = () => {
  // 	console.log('clicked', scrollRef);
  // 	scrollRef.current.scrollTop = 0;
  // };

  return (
    <>
      {!state ? (
        <div
          style={{
            background: `${newTheme.background}`,
          }}
          className="logoStart"
        >
          <img
            src="https://ik.imagekit.io/rt3e1gwcw/logo.webp"
            alt="logo"
            style={{ borderRadius: "100%" }}
          />
        </div>
      ) : (
        <div className="components">
          <div
            style={{
              background: `${newTheme.menuBackground}`,
              color: `${newTheme.title}`,
              left: `${open ? "-100vw" : "0"}`,
            }}
            className="links"
          >
            <a onClick={handleMenu} href="#home">
              Home
            </a>
            <a onClick={handleMenu} href="#about">
              About
            </a>
            <a onClick={handleMenu} href="#projects">
              Projects
            </a>
            <a onClick={handleMenu} href="#techstacks">
              Skills
            </a>
            <a onClick={handleMenu} href="#contact">
              Contact
            </a>
          </div>
          <Navbar />
          <Home scrollRef={scrollRef} />
        </div>
      )}
    </>
  );
}

export default App;
