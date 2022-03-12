/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React, { useContext } from "react";
import { FaTimes, FaLink } from "react-icons/fa";

import { AppContext } from "./AppProvider";

const Link = () => (
  <li>
    <a
      className="flex items-center w-full gap-2 p-4 text-xl font-bold capitalize transition duration-300 hover:text-blue-900 group hover:bg-blue-50 text-neutral-600"
      href="#">
      <FaLink className="w-4 h-4 transition text-neutral-600 group-hover:text-blue-600" />
      link
    </a>
  </li>
);

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext);

  let styling = "-translate-x-full";
  if (isSidebarOpen) styling = "translate-x-0";

  return (
    <div
      className={`absolute top-0 left-0 z-10 w-full h-full transition-all bg-white rounded shadow-lg sm:w-72 ${styling}`}>
      <div className="flex items-center justify-between gap-6 p-4">
        <strong className="text-xl font-bold text-blue-900 capitalize">
          simple sidebar
        </strong>
        <button onClick={closeSidebar}>
          <span className="sr-only">close sidebar</span>
          <FaTimes className="w-6 h-6 transition text-neutral-600 hover:text-red-600" />
        </button>
      </div>
      <ul>
        <Link />
        <Link />
        <Link />
        <Link />
      </ul>
    </div>
  );
};

export default Sidebar;
