import { Navbar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { About } from "../components/About";
import { Footer } from "../components/Footer";


export default function Home(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  )
}