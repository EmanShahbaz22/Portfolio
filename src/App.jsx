import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
