import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]">
              {" "}
              Pasindu
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Randula
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I am a Software Engineer crafting end-to-end digital solutions. 
            From intuitive front-end interfaces to robust back-end systems, 
            I build applications that are efficient, scalable, and user-friendly.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
      </div>

    </section>
  );
};
