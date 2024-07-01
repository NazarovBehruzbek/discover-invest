import React, { useEffect, useState } from "react";
import Projects from "../../components/Projects/Projects";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Advantages from "../../components/Advantages/Advantages";
import Contacts from "../../components/Contacts/Contacts";
import Team from "../../components/Team/Team";
import News from "../../components/News/News";

const Main = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updateScrollHeight = () => {
      setScrollHeight(document.documentElement.scrollHeight);
    };
    const updateScrollPosition = () => {
      setScrollPosition(window.scrollY);
    };
    updateScrollHeight();
    updateScrollPosition();
    window.addEventListener('scroll', updateScrollPosition);
    window.addEventListener('resize', updateScrollHeight);
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
      window.removeEventListener('resize', updateScrollHeight);
    };
  }, []);
  return (
    <div className="w-[100%] min-h-[100vh] overflow-hidden">
      <Navbar scrollPosition={scrollPosition}/>
      <Header/>
      <About/>
      <Advantages/>
      <Team/>
      <Projects />
      <News/>
      <Contacts/>
    </div>
  );
};

export default Main;
