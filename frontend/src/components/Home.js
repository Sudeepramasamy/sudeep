import React from "react";
import "./styles/About.css";

function Home() {
  return (
    <section id="home" className="section home">
      <h1>Hey .. I'm Sudeep</h1>
      <p>Hi, I'm a Full Stack Python Developer passionate about building dynamic and user-friendly web applications.
        I specialize in creating seamless experiences using Django, React, PostgreSQL, and REST APIs.
        With a strong foundation in both frontend and backend development, I turn ideas into fully functional 
        digital solutions.</p>
        <a href="/Sudeep_python_developer_resume.pdf" download className="download-btn">
        Download Resume
      </a>
    </section>
  );
}

export default Home;
