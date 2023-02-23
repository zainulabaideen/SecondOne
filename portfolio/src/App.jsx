// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
//Animation
import Aos from "aos";
import "aos/dist/aos.css"
const App = () => {
  useEffect(()=>{
    Aos.init({
      duration:1800,
      offset:100,
    })
  },[])
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      {/* <Testimonials /> */}
       <Hireme />
      <Contact /> 
      <footer className=" py-3 text-center">
        <h6 className="capitalize mb-3">M.Zain ul abaideen</h6>
<p>Portfolio &#169; All CopyRights Reserved {new Date().getFullYear()} </p>
      </footer>
    </div>
  );
};

export default App;
