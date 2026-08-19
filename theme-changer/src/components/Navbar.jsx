import {
  FiMoon,
  FiSun,
  FiHome,
  FiUser,
  FiFolder,
  FiBriefcase,
  FiMail,
} from "react-icons/fi";

function Navbar({ theme, toggleTheme }) {
  const menus = [
    {
      name: "Home",
      href: "#home",
      icon: FiHome,
    },
    {
      name: "About",
      href: "#about",
      icon: FiUser,
    },
    {
      name: "Projects",
      href: "#projects",
      icon: FiFolder,
    },
    {
      name: "Services",
      href: "#services",
      icon: FiBriefcase,
    },
    {
      name: "Contact",
      href: "#contact",
      icon: FiMail,
    },
  ];

  const isDark = theme === "dark";

  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border px-3 shadow-lg backdrop-blur-xl transition-all duration-400 ease-in-out ${
          isDark
            ? "border-slate-700/60 bg-slate-950/80 shadow-black/20"
            : "border-slate-200/80 bg-white/80 shadow-slate-200/50"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className={`flex items-center rounded-full px-4 text-lg font-bold tracking-tight ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Theme<span className="text-violet-600">Lab</span>
        </a>

        {/* Desktop Menu */}
        <div
          className={`hidden items-center rounded-full border p-1 md:flex ${
            isDark
              ? "border-slate-800 bg-slate-900/70"
              : "border-slate-200 bg-slate-50/80"
          }`}
        >
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <a
                key={menu.name}
                href={menu.href}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  isDark
                    ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                    : "text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm"
                }`}
              >
                <Icon
                  size={15}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5"
                />

                <span>{menu.name}</span>
              </a>
            );
          })}
        </div>

        {/* Theme Button */}
        <button
          onClick={toggleTheme}
          className={`group relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-400 ease-in-out ${
            isDark
              ? "border-slate-700 bg-slate-900 text-yellow-400 hover:bg-slate-800"
              : "border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-600"
          }`}
          aria-label="Change theme"
        >
          {isDark ? (
            <FiSun
              size={18}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          ) : (
            <FiMoon
              size={18}
              className="transition-transform duration-300 group-hover:-rotate-12"
            />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
