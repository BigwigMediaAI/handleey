"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Plans", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-black/95 shadow-md backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 font-bold text-lg">
            <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-yellow-500 text-black">
              H
            </div>
            <span className="text-black dark:text-white">Handlyee</span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href="https://api.whatsapp.com/send?phone=918368573451"
              target="_blank"
              className="px-5 py-2 rounded-md text-sm font-semibold bg-yellow-500 text-black hover:bg-yellow-400 transition"
            >
              Start Free Trial
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-black dark:text-white"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 transition ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsOpen(false)}
        />

        {/* DRAWER */}
        <div
          className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-white dark:bg-black p-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-lg font-bold text-black dark:text-white">
              Menu
            </span>
            <button onClick={() => setIsOpen(false)}>
              <X className="text-black dark:text-white" />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-gray-800 dark:text-gray-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://api.whatsapp.com/send?phone=918368573451"
            target="_blank"
            className="mt-10 block text-center py-3 rounded-md font-semibold bg-yellow-500 text-black"
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </>
  );
}
