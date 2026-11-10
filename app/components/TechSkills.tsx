import StackIcon from "tech-stack-icons";

const skills = [
  // Frontend
  { name: "react", label: "React", category: "Frontend" },
  { name: "js", label: "JavaScript", category: "Frontend" },
  { name: "html5", label: "HTML5", category: "Frontend" },
  { name: "css3", label: "CSS3", category: "Frontend" },
  { name: "tailwindcss", label: "Tailwind CSS", category: "Frontend" },
  { name: "vitejs", label: "Vite", category: "Frontend" },

  // Backend
  { name: "python", label: "Python", category: "Backend" },
  { name: "flask", label: "Flask", category: "Backend" },
  { name: "nodejs", label: "Node.js", category: "Backend" },
  { name: "expressjs", label: "Express", category: "Backend" },

  // Database
  { name: "postgresql", label: "PostgreSQL", category: "Database" },
  { name: "supabase", label: "Supabase", category: "Database" },
  { name: "mongodb", label: "MongoDB", category: "Database" },

  // Tools
  { name: "git", label: "Git", category: "Tools" },
  { name: "github", label: "GitHub", category: "Tools" },
  { name: "vscode", label: "VS Code", category: "Tools" },
];

const categories = ["Frontend", "Backend", "Database", "Tools"];

export default function TechSkills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl">
        Tech Skills
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category}
            className="rounded-xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
              {category}
            </h3>

            <ul className="flex flex-wrap gap-5">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li key={skill.name} className="flex flex-col items-center gap-2">
                    <StackIcon name={skill.name} className="h-10 w-10" />
                    <span className="text-sm text-slate-300">{skill.label}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
