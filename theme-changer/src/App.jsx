import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThemeTransition from "./components/ThemeTransition";

function App() {
  const [theme, setTheme] = useState("light");
  const [transitionTheme, setTransitionTheme] = useState("dark");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const wait = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const toggleTheme = async () => {
    if (isTransitioning) return;

    const nextTheme = theme === "light" ? "dark" : "light";

    // Set transition color before animation starts
    setTransitionTheme(nextTheme);

    // Mulai animasi
    setIsTransitioning(true);

    // Tunggu sampai overlay selesai gesekan masuk (500ms + sedikit buffer)
    await wait(500);

    // Ganti tema utama + data-theme attribute
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);

    // Tunggu overlay bersih keluar dan React render
    await wait(300);

    // Hilangkan layer
    setIsTransitioning(false);
  };

  const isDark = theme === "dark";

  // Set initial data-theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return (
    <div
      data-theme={theme}
      className={`relative min-h-screen transition-colors duration-500 ease-in-out ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      {/* =========================
          NAVBAR
      ========================= */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* =========================
          THEME TRANSITION
      ========================= */}
      <ThemeTransition
        theme={transitionTheme}
        isTransitioning={isTransitioning}
      />

      {/* =========================
          MAIN
      ========================= */}
      <main>
        {/* =========================
            HERO
        ========================= */}
        <section
          id="home"
          className="relative min-h-screen"
        >
          {/* Background */}
          <div
            className={`absolute inset-0 z-0 ${
              isDark
                ? "bg-slate-950"
                : "bg-white"
            }`}
          />

          {/* Content */}
          <div className="relative z-10">
            <Hero theme={theme} />
          </div>
        </section>

        {/* =========================
            ABOUT
        ========================= */}
        <section
          id="about"
          className="relative flex min-h-screen items-center justify-center px-6"
        >
          {/* Background */}
          <div
            className={`absolute inset-0 z-0 ${
              isDark
                ? "bg-slate-900"
                : "bg-slate-100"
            }`}
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              About
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              About ThemeLab
            </h2>

            <p
              className={`mt-5 leading-relaxed ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              ThemeLab adalah project latihan untuk
              mempelajari React, Tailwind CSS, dan
              Framer Motion melalui pembuatan website
              dengan fitur pergantian tema.
            </p>
          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================= */}
        <section
          id="projects"
          className="relative flex min-h-screen items-center justify-center px-6"
        >
          {/* Background */}
          <div
            className={`absolute inset-0 z-0 ${
              isDark
                ? "bg-slate-950"
                : "bg-white"
            }`}
          />

          {/* Content */}
          <div className="relative z-10 max-w-5xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Projects
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              My Projects
            </h2>

            <p
              className={`mx-auto mt-5 max-w-xl ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Beberapa project yang dibuat menggunakan
              teknologi web modern.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Project One",
                  description: "React Website",
                },
                {
                  title: "Project Two",
                  description: "UI Design",
                },
                {
                  title: "Project Three",
                  description: "Landing Page",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className={`rounded-2xl border p-6 text-left transition-colors ${
                    isDark
                      ? "border-slate-800 bg-slate-900"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-violet-100">
                    <span className="font-semibold text-violet-600">
                      Preview
                    </span>
                  </div>

                  <h3 className="font-bold">
                    {project.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm ${
                      isDark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            SERVICES
        ========================= */}
        <section
          id="services"
          className="relative flex min-h-screen items-center justify-center px-6"
        >
          {/* Background */}
          <div
            className={`absolute inset-0 z-0 ${
              isDark
                ? "bg-slate-900"
                : "bg-slate-100"
            }`}
          />

          {/* Content */}
          <div className="relative z-10 max-w-5xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Services
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              What I Do
            </h2>

            <p
              className={`mx-auto mt-5 max-w-xl ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Beberapa layanan yang bisa dilakukan
              menggunakan teknologi web.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                "Web Development",
                "UI Design",
                "Responsive Design",
              ].map((service) => (
                <div
                  key={service}
                  className={`rounded-2xl p-8 shadow-sm transition-colors ${
                    isDark
                      ? "bg-slate-800"
                      : "bg-white"
                  }`}
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
                    ✦
                  </div>

                  <h3 className="mt-5 font-bold">
                    {service}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isDark
                        ? "text-slate-400"
                        : "text-slate-500"
                    }`}
                  >
                    Membuat tampilan website yang
                    sederhana, menarik, dan responsive.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================
            CONTACT
        ========================= */}
        <section
          id="contact"
          className="relative flex min-h-screen items-center justify-center px-6"
        >
          {/* Background */}
          <div
            className={`absolute inset-0 z-0 ${
              isDark
                ? "bg-slate-950"
                : "bg-white"
            }`}
          />

          {/* Content */}
          <div className="relative z-10 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-violet-600">
              Contact
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Let's Work Together
            </h2>

            <p
              className={`mt-5 leading-relaxed ${
                isDark
                  ? "text-slate-400"
                  : "text-slate-500"
              }`}
            >
              Punya project atau ide? Mari kita buat
              sesuatu yang menarik bersama.
            </p>

            <button className="mt-8 rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
              Contact Me
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;