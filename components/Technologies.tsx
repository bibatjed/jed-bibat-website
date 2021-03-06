import React from "react";
interface Props {
  name: string;
  icon: React.ReactNode;
}
export default function Technologies(props: Props) {
  return (
    <div className="flex items-center space-x-4 p-3">
      <span className="h-13 w-13 rounded-full p-2 shadow-md border-0 bg-white dark:border-gray-600 dark:bg-gray-800">
        {props.icon}
      </span>
      <p className="text-gray-700 dark:text-gray-300 text-lg"> {props.name}</p>
    </div>
  );
}
