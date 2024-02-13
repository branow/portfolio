"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Portfolio", "/#portfolio"],
    ["Education", "/#education"],
    ["Contact", "/#footer"],
  ];

  return (
    <>
      <div className="w-full p-2 bg-neutral opacity-90 fixed top-0 z-10 flex flex-col md:opacity-100">
        <button
          className="p-3 rounded-full w-full text-neutral-content hover:bg-frosted-silver
          hover:text-white active:bg-pale-yellow md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 32 32"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 8h24M4 16h24M4 24h24"
            />
          </svg>
        </button>
        <div
          className={`flex flex-col justify-center md:hidden ${
            open ? "bock" : "hidden"
          }`}
          onClick={() => setOpen(false)}
        >
          {links.map((link) => (
            <span key={link[1]}>
              <NavLink title={link[0]} href={link[1]} />
            </span>
          ))}
        </div>
        <div
          className="hidden md:flex md:flex-row flex-wrap md:justify-center"
          onClick={() => setOpen(false)}
        >
          {links.map((link) => (
            <span key={link[1]}>
              <NavLink title={link[0]} href={link[1]} />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};
