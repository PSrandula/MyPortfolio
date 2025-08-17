import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Taskflow-taskmanagment-system",
    description: "A smart task management web app with Firebase real-time database and Gemini AI assistant.",
    image: "/projects/task.png",
    tags: ["React","Typescript", "TailwindCSS", "firebase"],
    // demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/taskflow-taskmanagment-system.git",
  },
  {
    id: 2,
    title: "Refab-b2b-platform ",
    description:
      "A B2B factory outlet resource exchange platform for the textile industry. Includes dynamic bidding, user authentication, and modern UI/UX for scalable business interactions.",
    image: "/projects/refab.png",
    tags: ["React", "Node.js", "Mongo DB"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/Refab-b2b-platform.git",
  },
  {
    id: 3,
    title: "Cleaning Booking System",
    description:
      "A full-stack web application to manage cleaning service bookings, Users can create, edit, delete, and view bookings with a clean and responsive UI powered by Tailwind CSS.",
    image: "/projects/clean.png",
    tags: ["React", "Node.js", "Mongo DB"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/cleaning-booking-management-system.git",
  },
  {
    id: 4,
    title: "power-fitness-gym-website",
    description: "Power Fitness Gym is a fully responsive, dynamic web application built using the MERN Stack ",
    image: "/projects/gym.png",
    tags: ["React", "Node.js", "Mongo DB"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/power-fitness-gym-website.git",
  },
  {
    id: 5,
    title: "DiveMe",
    description:
      "A real-time, web-based diving center booking system that connects tourists with certified dive providers. Features include interactive map discovery, package comparison, secure user registration.",
    image: "/projects/diveme.png",
    tags: ["React", "Node.js", "Mongo Db"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/DiveMe.git",
  },
  {
    id: 6,
    title: "Real-Time-Ticketing-System",
    description:
      "A full-stack real-time event ticketing system featuring a Java CLI that implements the Producer-Consumer pattern for ticket releases using multi-threading",
    image: "/projects/ticket.jpeg",
    tags: ["Java", "Oop"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/Real-Time-Ticketing-System.git",
  },
    {
    id: 7,
    title: "Plane-Management-System",
    description:
      "This Java project implements a plane seat reservation system for a private plane. It includes functionality to manage seat reservations, cancellations, and seat availability",
    image: "/projects/plane.jpeg",
    tags: ["Java"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/Plane-Management-System.git",
  },
  {
    id: 8,
    title: "Rest Countries Explorer",
    description:
      " A modern React application that fetches and displays data from the REST Countries API. Includes search, filtering by region and language, responsive UI and dynamic routing for country details",
    image: "/projects/country.png",
    tags: ["React", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/rest-countries-react-app.git",
  },
   {
    id: 9,
    title: "Study Assistant Chatbot",
    description: "A smart study assistant chatbot, Supports real-time chatting, authentication, and intelligent responses using Gemini's generative capabilities.",
    image: "/projects/chat.png",
    tags: ["React", "Firebase", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/PSrandula/study-assistant-chatbot.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary opacity-0 animate-fade-in-delay-1opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore some of my recent work showcasing my skills in **full-stack web development**, 
          UI/UX design, and software solutions. Each project was carefully crafted 
          to deliver excellent performance, usability, and a polished user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="w-fit flex items-center mx-auto gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            target="_blank"
            href="https://github.com/PSrandula"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
