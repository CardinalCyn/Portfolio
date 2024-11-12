"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const headerTitles = ["About", "Skills", "Projects", "Resume", "Contact"];

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">
            Salah Zanabili
          </a>
          <div className="hidden md:flex space-x-4">
            {headerTitles.map((title) => (
              <a
                key={title}
                href={`#${title.toLowerCase()}`}
                className="hover:text-primary"
              >
                {title}
              </a>
            ))}
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-primary text-primary-foreground"
              aria-label={`Switch to ${
                theme === "dark" ? "light" : "dark"
              } mode`}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button
            className="md:hidden p-2 ml-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Menu size={24} />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 w-full">
            <div className="flex">
              {headerTitles.map((title) => (
                <a
                  key={title}
                  href={`#${title.toLowerCase()}`}
                  className="block w-full py-2 px-4 hover:bg-primary hover:text-primary-foreground rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
