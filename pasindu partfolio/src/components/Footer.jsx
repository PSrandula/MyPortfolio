import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Pasindu Randula All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white shadow-md hover:shadow-lg transition-all duration-300"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
