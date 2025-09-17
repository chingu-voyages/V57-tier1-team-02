import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ type = "button", onClick, children, className, to }) => {
  const base =
    "px-4 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-900 transition";

  // If It's a NavLINK
  if (to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${base} ${isActive ? "bg-black" : ""} ${className}`
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer rounded-md bg-blue-500 text-white hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
