import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Footer from "./components/Footer/Footer";
import { data } from "../data";

function App() {



  return (
    <div>
      <Header data={data} />
      <MainContent data={data} />
      <Projects projects={data.projects} />

      <Skills skills={data.skills} />

      <Footer data={data} />
    </div>
  );
}

export default App;
