import { motion } from "framer-motion";

function ThemeTransition({ theme, isTransitioning }) {
  if (!isTransitioning) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <>
      <motion.div
        initial={{ x: "-110%" }}
        animate={{ x: "0%" }}
        exit={{ x: "110%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed -left-[10%] top-0 z-[5] h-full w-[120%] -skew-x-3"
        style={{ backgroundColor: isDark ? "#020617" : "#ffffff" }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pointer-events-none fixed inset-0 z-[4] dark:bg-black/20 bg-black/5"
      />
    </>
  );
}

export default ThemeTransition;
