export function Projects() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      {/* Project 1 */}
      <section className="flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-zinc-900 p-6 md:flex-row md:p-10">
        <div className="w-full md:w-1/2">
          <img
            src="/eagles-temple.png"
            alt="Screenshot of the Eagles Temple app homepage"
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Church App
          </p>

          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Eagles Temple Church App
          </h3>

          <p className="mb-6 leading-7 text-zinc-400">
            A church app built with another developer in 2026, featuring sermon
            screens, dashboards, and backend integrations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="YOUR_GITHUB_URL"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
            >
              GitHub ↗
            </a>

            <a
              href="YOUR_WEBSITE_URL"
              className="rounded-full border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-white"
            >
              Live Website ↗
            </a>
          </div>
        </div>
      </section>

      {/* Project 2 */}
      <section className="flex flex-col items-center gap-8 rounded-2xl border border-white/10 bg-zinc-900 p-6 md:flex-row-reverse md:p-10">
        <div className="w-full md:w-1/2">
          <img
            src="/bible-duo.png"
            alt="Screenshot of the Bible language learning app"
            className="aspect-video w-full rounded-xl object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-400">
            Mobile App
          </p>

          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            Bible Language Learning
          </h3>

          <p className="mb-6 leading-7 text-zinc-400">
            A personal project that helps people learn languages through
            Bible-based lessons, inspired by the bite-sized learning experience
            of Duolingo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="YOUR_GITHUB_URL"
              className="rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
            >
              GitHub ↗
            </a>

            <a
              href="#"
              className="rounded-full border border-zinc-600 px-6 py-3 font-semibold text-white transition hover:border-white"
            >
              Learn More ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
