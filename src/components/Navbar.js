"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white px-4 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-lg font-bold">Fintract Global</h1>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="#" className="text-blue-900 bg-white px-4 py-1 rounded-md text-sm font-semibold">Login</Link>
          <Link href="#" className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-md text-sm font-semibold">Sign Up</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col text-sm">
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="#" className="text-blue-900 bg-white px-4 py-1 rounded-md font-semibold w-fit">Login</Link>
          <Link href="#" className="bg-yellow-400 text-blue-900 px-4 py-1 rounded-md font-semibold w-fit">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}

