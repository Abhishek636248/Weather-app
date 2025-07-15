import React from 'react';
import { NavLink } from 'react-router-dom'; //navlink ko import kiya gya hai

export default function Header() {
    return (
        <>
            <header className="w-full h-[80px] bg-gradient-to-r from-purple-500 to-pink-500 flex justify-between items-center px-8 z-10">
                <h1 className="text-2xl text-center font-extrabold text-white">Sky-Cast 🌍</h1>
                <ul className="flex gap-10 text-white text-lg font-bold">
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
        </>
    );
}
