import "./App.css";
import Certification from "./components/Certification/CertComponent";
import Contact from "./components/Contact/ContactComponent";
import Hero from "./components/Hero/HeroComponent";
import SkillsRibbon from "./components/SkillsRibbon/SkillsRibbonComponent";

function App() {
  return (
    <>
      <Hero />
      <SkillsRibbon />
      <Certification />
      <Contact />
    </>
  );
}

export default App;
