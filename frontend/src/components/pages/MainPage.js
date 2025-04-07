// src/pages/MainPage.js
import React from "react";
import Home from "../../components/Home";
import About from "../../components/About";
import Project from "../../components/Project";
import Skills from "../../components/Skills";
import Contact from "../../components/Contact";

function MainPage() {
  return (
    <>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="projects"><Project /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default MainPage;
