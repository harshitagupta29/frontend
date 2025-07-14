// src/components/Navbar.js
"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">YourLogo</div>

      <ul className="flex gap-6 text-sm font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>

      <div className="space-x-3">
        <Link href="/login" className="bg-white text-blue-900 px-4 py-1.5 rounded-md text-sm font-semibold">Login</Link>
        <Link href="/signup" className="bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-md text-sm font-semibold">Sign Up</Link>
      </div>
    </nav>
  );
}
