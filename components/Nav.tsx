import React from "react";
import { FaMarkdown } from "react-icons/fa";

const Nav = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="text-3xl font-bold font-mono">
        <span className="text-sky-500 hover:text-sky-900 transition">Mark</span>
        <span className="text-sky-900 hover:text-sky-500 transition">que</span>
      </span>
    </div>
  );
};

export default Nav;
