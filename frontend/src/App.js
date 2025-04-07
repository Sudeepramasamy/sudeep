import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage"; // 👈 import this
import ProjectDetails from "./components/project_details/ProjectDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
