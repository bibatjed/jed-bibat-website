import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
export function DarkModeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return (
    <button
      className="group relative h-14 w-14 rounded-xl border hover:border-blue-600 active:border-blue-600  hover:scale-110 bg-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-indigo-600 dark:active:border-indigo-600 translation-all"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      <span className="h-8 w-8 block mx-auto group-hover:scale-125 translation-all duration-300 text-gray-400">
        {loaded && resolvedTheme === "light" ? <MoonIcon /> : <SunIcon />}
      </span>

      <span className="absolute bottom-20 text-xs translate-y-10 -translate-x-1/2 min-w-max bg-white text-gray-600 p-2 border shadow-md font-medium transition-all duration-200 rounded-3xl scale-0 group-hover:scale-100 group-active:scale-0 group-hover:translate-y-2 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800 ">
        {loaded && resolvedTheme === "light" ? "Dark mode" : "Light mode"}
      </span>
    </button>
  );
}
