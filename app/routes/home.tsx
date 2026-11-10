import type { Route } from "./+types/home";
import { Navbar } from "~/components/NavBar";
import { Hero } from "~/components/Hero";
import TechSkills from "~/components/TechSkills";
import { Projects } from "~/components/Projects";
import { About } from "~/components/About";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  const title = "Sephora Jean-Mary | Software Developer";
  const description =
    "Portfolio of Sephora Jean-Mary, a software developer building web and mobile apps with React, Node.js, Python and PostgreSQL.";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechSkills />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
