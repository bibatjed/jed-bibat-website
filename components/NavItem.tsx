import Link from "next/link";
interface NavItemProps {
  icon: React.ReactNode;
  name: string;
  link: string;
}
export default function NavItem(props: NavItemProps) {
  return (
    <div className="group relative h-14 w-14 rounded-xl border hover:border-blue-600 active:border-blue-600  hover:scale-110 bg-gray-200 dark:border-gray-800 dark:bg-gray-800 dark:hover:border-indigo-600 dark:active:border-indigo-600 translation-all">
      <Link href={props.link}>
        <a>
          <span className="h-full w-8 flex justify-center items-center mx-auto group-hover:scale-125 translation-all duration-300 text-gray-400">
            {props.icon}
          </span>

          <span className="absolute bottom-20 left-1/2 -translate-x-1/2 text-xs translate-y-10 min-w-max bg-white text-gray-600 p-2 border shadow-md font-medium transition-all duration-200 rounded-3xl scale-0 group-hover:scale-100 group-active:scale-0 group-hover:translate-y-2 dark:text-gray-300 dark:border-gray-600 dark:bg-gray-800 ">
            {props.name}
          </span>
        </a>
      </Link>
    </div>
  );
}
