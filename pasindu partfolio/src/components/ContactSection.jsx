import {
  Instagram,
  Linkedin,
  Github,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs.sendForm('service_f5ao9z8', 'template_7sxyehn', e.target, 'pHdd-nSA8uaHsNUkf')
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.target.reset();
    })
    .catch(() => {
      toast({
        title: "Error!",
        description: "Failed to send message. Try again later.",
      });
    })
    .finally(() => setIsSubmitting(false));
};
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary opacity-0 animate-fade-in-delay-1opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(168,85,247,0.8)]"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project idea or want to collaborate? Feel free to reach out. 
          I'm always excited to discuss new opportunities and bring creative solutions 
          to life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:pasindusadeep046@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pasindusadeep046@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+94741953250"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 741953250
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-pink-600 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Colombo, Srilanka
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                {[
                  { href: "https://www.linkedin.com/in/pasindu-randula-514693294", icon: Linkedin },
                  { href: "https://github.com/PSrandula", icon: Github },
                  { href: "https://www.facebook.com/ran.dula.984?mibextid=LQQJ4d", icon: Facebook },
                  { href: "https://www.instagram.com/ran_du_x/?igsh=OGQ5ZDc2ODk2ZA%3D%3D#", icon: Instagram },
                ].map(({ href, icon: Icon }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    className="text-foreground hover:text-pink-600 hover:drop-shadow-[0_0_8px_rgba(219,39,119,0.8)] transition-all duration-300"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
  <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

  <form className="space-y-6" onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name" className="block text-sm font-medium mb-2">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        placeholder="Pasindu..."
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium mb-2">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        placeholder="pasindu@gmail.com"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium mb-2">
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
        placeholder="Hello, Send your message"
      />
    </div>

    <button
      type="submit"
      disabled={isSubmitting}
      className={cn(
        "w-full flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-pink-600 via-fuchsia-500 to-purple-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
      )}
    >
      {isSubmitting ? "Sending..." : "Send Message"}
      <Send size={16} />
    </button>
  </form>
</div>

        </div>
      </div>
    </section>
  );
};
