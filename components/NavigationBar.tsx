import { DarkModeToggleButton } from "./DarkModeToggleButton";
export default function NavigationBar() {
  return (
    <div className="fixed bottom-6 left-1/2 z-10  max-w-min  -translate-x-1/2 rounded-2xl border border-gray-300 bg-white/60 px-2.5 py-1.5 shadow backdrop-blur-md dark:border-gray-700 dark:bg-gray-900/60 dark:shadow-black/50 sm:w-auto sm:p-2.5">
      <nav>
        {" "}
        <DarkModeToggleButton />
      </nav>
    </div>
  );
}
