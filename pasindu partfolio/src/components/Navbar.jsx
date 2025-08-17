import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // <- add state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Pasindu </span>{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-500 text-transparent bg-clip-text animate-pulse drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">
              Portfolio
            </span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-600 hover:via-fuchsia-500 hover:to-purple-700 hover:drop-shadow-[0_0_8px_rgba(219,39,119,0.8)] transition-all duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 drop-shadow-[0_0_8px_rgba(219,39,119,0.8)] transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Dark/Light Mode Toggle inside mobile menu only */}
            <button
              onClick={toggleTheme}
              className="mt-4 p-2 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
