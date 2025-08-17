import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 80, category: "frontend" },
  { name: "Next.js", level: 70, category: "frontend" },
  { name: "Angular", level: 60, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 80, category: "backend" },
  { name: "Php laravel", level: 75, category: "backend" },
  { name: "Sql", level: 70, category: "backend" },
  { name: "Springboot", level: 60, category: "backend" },
  { name: "Firebase", level: 80, category: "backend" },

  // Languages
  { name: "Java", level: 90, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "Object Oriented Programming", level: 85, category: "languages" },
  { name: "C/C++", level: 70, category: "languages" },

  // Tools
  { name: "Git/GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 75, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend","languages", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary opacity-0 animate-fade-in-delay-1opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 capitalize shadow-md",
                activeCategory === category
                  ? "bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white shadow-lg"
                  : "bg-secondary/70 text-foreground hover:bg-gradient-to-r hover:from-pink-600 hover:via-fuchsia-500 hover:to-purple-700 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="h-2 rounded-full origin-left animate-[grow_1.5s_ease-out] bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
