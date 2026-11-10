const highlights = [
  {
    title: "Full-Stack Development",
    text: "Building web applications with frontend, backend, APIs, and databases.",
  },
  {
    title: "Problem Solving",
    text: "Applying analytical thinking to debugging, application logic, and data.",
  },
  {
    title: "Technical Education",
    text: "Experience teaching coding, website development, mathematics, and STEM.",
  },
  {
    title: "Continuous Learning",
    text: "Exploring technologies and improving through hands-on projects.",
  },
];

export function About() {
  return (
    <section id="about" className="w-full bg-slate-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-3">
          Get to know me
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          About Me
        </h2>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5 text-slate-300 leading-7">
            <p>
              I'm a Computer Science graduate from Florida International
              University with a passion for building useful, user-focused
              software. My experience spans full-stack web development, database
              design, API integration, and responsive user interfaces.
            </p>

            <p>
              Through projects like Eagles Temple Church App, PetTendr, and Tech
              Blog, I've worked with technologies including React, JavaScript,
              Node.js, Express, MongoDB, and PostgreSQL to build applications
              with practical functionality.
            </p>

            <p>
              My background in mathematics and coding education has strengthened
              my problem-solving, communication, and analytical skills. At
              Michael Krop Senior High School and West Lakes Preparatory
              Academy, I helped students develop their technical skills while
              learning to approach complex problems step by step.
            </p>

            <p>
              I also gained software development experience at MITRE
              Corporation, where I worked on Python-based web scraping and data
              visualization as part of the AI For All senior design project.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-800 bg-slate-900 p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-6">{item.text}</p>
              </div>
            ))}
            <p className="py-10 flex ">
              <a
                href="https://github.com/sjean149?tab=repositories"
                target="_blank"
                className="px-6 py-2 rounded-2xl bg-indigo-500 mt-6 transition hover:bg-indigo-900"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
