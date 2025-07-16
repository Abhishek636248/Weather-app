import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full h-auto bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 z-10">
      <h1 className="text-2xl font-extrabold text-white">Sky-Cast 🌍</h1>

      <ul className="flex flex-col md:flex-row gap-3 md:gap-8 text-white text-base font-semibold">
        <li>
          <NavLink to='' className={({ isActive }) => (isActive ? "bg-pink-300 rounded-md px-2 py-1" : "px-2 py-1")}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='/live' className={({ isActive }) => (isActive ? "bg-pink-300 rounded-md px-2 py-1" : "px-2 py-1")}>
            LIVE-WEATHER
          </NavLink>
        </li>
        <li>
          <NavLink to='/weather-foracast' className={({ isActive }) => (isActive ? "bg-pink-300 rounded-md px-2 py-1" : "px-2 py-1")}>
            WEATHER-FORECAST
          </NavLink>
        </li>
        <li>
          <NavLink to='/about-us' className={({ isActive }) => (isActive ? "bg-pink-300 rounded-md px-2 py-1" : "px-2 py-1")}>
            ABOUT-US
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
