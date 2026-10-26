
export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 px-6 py-16 md:flex-row md:px-10">
      {/* Left side: text and buttons */}
      <div className="flex flex-col items-start gap-5 md:w-1/2">
        <p className="text-lg text-slate-500">Hello, I'm</p>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Sephora
          <span className="block text-indigo-600">
            Jean-Mary
          </span>
        </h1>

        <p className="max-w-lg text-lg leading-8 text-slate-600">
          Software developer building thoughtful web and mobile
          experiences that solve real problems.
        </p>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="#contact"
            className="rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            View Work
          </a>
        </div>
      </div>

      {/* Right side: profile picture */}
      <div className="flex justify-center md:w-1/2 md:justify-end">
        <img
          src="/assets/0A7A1262_websize.jpg"
          alt="Portrait of Sephora Jean-Mary"
          className="aspect-[4/5] w-full max-w-sm rounded-2xl object-cover shadow-xl"
        />
      </div>
    </section>
  );
}
