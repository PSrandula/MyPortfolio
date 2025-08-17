import { Briefcase, Code, User, Server, Laptop} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary opacity-0 animate-fade-in-delay-1opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Software Engineer | Full-Stack Web Developer
            </h3>

            <p className="text-muted-foreground">
              I'm a 3rd-year undergraduate at the Informatics Institute of Technology (IIT) Sri Lanka, 
              pursuing a University of Westminster degree through their collaborative program. 
              As an aspiring Software Engineer and Full-Stack Developer, I focus on creating 
              responsive, accessible, and performant web applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about building elegant solutions to complex problems and continuously 
              learning new technologies and techniques to stay at the forefront of the ever-evolving 
              web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                {" "}
                Get In Touch
              </a>

              <a
                href="/projects/pasinducv.pdf"
                className="px-6 py-2 rounded-full border-2 border-pink-600 text-pink-600 text-sm font-semibold hover:bg-gradient-to-r hover:from-pink-600 hover:via-fuchsia-500 hover:to-purple-700 hover:text-white transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          <div className="flex justify-center md:justify-center">
            <div className="p-1 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 shadow-lg">
              <img
                src="/public/pasindu.jpg"
                alt="Pasindu Randula"
                className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover border-2 border-white"
              />
            </div>
          </div>

          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Laptop className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, scalable, and performant websites and web applications 
                    using modern front-end and back-end technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                 <Code className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Solutions</h4>
                  <p className="text-muted-foreground">
                    Designing and implementing custom software solutions tailored to 
                    client needs and business requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Crafting intuitive interfaces and seamless user experiences 
                    for web and mobile applications.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Managing projects end-to-end with agile methodologies, ensuring 
                    timely delivery and quality outcomes.
                  </p>
                </div>
              </div>
            </div>
             <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Database Development</h4>
                  <p className="text-muted-foreground">
                    Creating efficient, secure, and scalable database architectures 
                    to support web and software applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
