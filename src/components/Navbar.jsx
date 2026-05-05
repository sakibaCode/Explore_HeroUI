import { ThemeProvider } from "next-themes";
import Link from "next/link";
import React from "react";
import { ThemeSwitch } from "./ThemeSwitch";

const MyNavbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 shadow-md ">

            {/* Brand */}
            <div className="font-bold text-xl">
                ACME
            </div>

            {/* Links */}
            <ul className="hidden md:flex gap-6">
                <li>
                    <Link href="/" className="hover:text-blue-500">
                        Home
                    </Link>
                </li>

                <li>
                    <Link href="/task" className="hover:text-blue-500">
                        Tasks
                    </Link>
                </li>

                <li>
                    <Link href="#" className="hover:text-blue-500">
                        Docs
                    </Link>
                </li>
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Sign Up
                </button>

                <ThemeSwitch />
            </div>
        </nav>
    );
};

export default MyNavbar;