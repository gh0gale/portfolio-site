import "./App.css";
import { About } from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Project/Project";
import Skills from "./components/Skill/Skills";


function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
