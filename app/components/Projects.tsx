import BibleLingo from "./assets/BibleLingoLandscape.webp";
import EaglesTemple from "./assets/eaglestemplehome.webp";

type Project = {
  tag: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  github?: string;
  live?: string;
};

// To add a project, add an object here. Buttons only render when a link is set.
const projects: Project[] = [
  {
    tag: "Church App",
    title: "Eagles Temple Church App",
    description:
      "A church app built with another developer in 2026, featuring sermon screens, dashboards, and backend integrations.",
    image: EaglesTemple,
    imageAlt: "Screenshot of the Eagles Temple app homepage",
    github: "https://github.com/sjean149/eaglestemple",
    live: "https://...", // add the live site URL when it's deployed
  },
  {
    tag: "Mobile & Web App",
    title: "Bible Language Learning",
    description:
      "An Android app and web app that helps people learn French, Spanish, or English through Bible-based grammar and vocabulary lessons and by reading the Bible.",
    image: BibleLingo,
    imageAlt: "Screenshot of the Bible language learning app",
    github: "https://github.com/sjean149/BibleLingo.git", // add the repo URL
    live: "https://biblelingo-1.onrender.com/",
  },
  {
    tag: "Portfolio WebApp",
    title: "Nurse portfolio for client",
    description:
      "An Android app and web app that helps people learn French, Spanish, or English through Bible-based grammar and vocabulary lessons and by reading the Bible.",
    image: BibleLingo,
    imageAlt: "Screenshot of the Bible language learning app",
    github: "https://github.com/sjean149/BibleLingo.git", // add the repo URL
    live: "https://biblelingo-1.onrender.com/",
  },
];

const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl space-y-10 px-6 py-20">
      <h2 className="text-3xl font-bold text-white md:text-4xl">Projects</h2>

      {projects.map((p, i) => (
        <article
          key={p.title}
          className={`flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-zinc-900 p-6 md:p-10 ${
            i % 2 ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <div className="w-full md:w-1/2">
            <img
              src={p.image}
              alt={p.imageAlt}
              width={1200}
              height={675}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full md:w-1/2">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
              {p.tag}
            </p>

            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
              {p.title}
            </h3>

            <p className="mb-6 leading-7 text-zinc-400">{p.description}</p>

            <div className="flex flex-wrap gap-4">
              {p.github && (
                <a
                  href={p.github}
                  {...external}
                  className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
                >
                  GitHub 
                </a>
              )}

              {p.live && (
                <a
                  href={p.live}
                  {...external}
                  className="rounded-full border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-white"
                >
                  Live Website {"↗︎"}
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
