import selfie from "./assets/selfie.jpg";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-10">
      {/* Left side: text and buttons */}
      <div className="flex flex-col items-start gap-5 md:w-1/2">
        <p className="text-lg text-slate-400">Hello, I'm</p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
          Sephora
          <span className="block text-indigo-400">Jean-Mary</span>
        </h1>

        <p className="max-w-lg text-lg leading-8 text-slate-300">
          Software developer building thoughtful web and mobile experiences that
          solve real problems.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#projects"
            className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-500"
          >
            View Work
          </a>

          {/* Put your PDF at public/resume.pdf */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
          >
            Resume 
          </a>

          <a
            href="#contact"
            className="rounded-full px-6 py-3 font-semibold text-slate-300 transition hover:text-white"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right side: profile picture */}
      <div className="flex justify-center md:w-1/2 md:justify-end">
        <img
          src={selfie}
          alt="Portrait of Sephora Jean-Mary"
          width={384}
          height={384}
          fetchPriority="high"
          className="aspect-square w-full max-w-sm rounded-full object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
