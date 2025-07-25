"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-1 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/Capturew.PNG"
            alt="Fintract Global Logo"
            width={120}
            height={120}
            className="w-auto h-12 border border-gray-200 p-0.5"
          />
        </Link>

        {/* Center Nav Links */}
        <div className="hidden md:flex space-x-6 mx-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm ${
                pathname === item.href
                  ? "text-green-700 font-semibold"
                  : "text-gray-700"
              } hover:text-green-700 transition`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="border border-green-700 text-green-700 px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition text-base font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition text-base font-medium"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-0.5 bg-black mb-1" />
            <div className="w-6 h-0.5 bg-black mb-1" />
            <div className="w-6 h-0.5 bg-black" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block py-2 ${
                pathname === item.href
                  ? "text-green-700 font-semibold"
                  : "text-gray-700"
              } hover:text-green-700 transition`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 space-y-2">
            <Link
              href="/login"
              className="w-full block text-center border border-green-700 text-green-700 px-4 py-2 rounded-full hover:bg-green-700 hover:text-white transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="w-full block text-center bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800 transition text-sm"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
