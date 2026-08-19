function Hero({ theme }) {
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center px-6 pt-16"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="mb-4 inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-600">
          React + Tailwind CSS
        </span>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Build Your
          <span className="text-violet-600"> Interface.</span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-xl text-lg leading-relaxed transition-colors duration-400 ease-in-out ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Latihan membuat website dengan React, Tailwind CSS, dan animasi
          pergantian tema.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
            Explore
          </button>

          <button
            className={`rounded-xl border px-6 py-3 font-medium transition-colors ${
              isDark
                ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                : "border-slate-300 text-slate-700 hover:bg-slate-100"
            }`}
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
