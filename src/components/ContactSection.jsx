import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
export const ContactSection = () => {
   const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to reach out.
          We can discuss new opportunities, collaborations, or any questions you
          may have.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left column - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              {/* Email */}
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vacaro.267597@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vacaro.267597@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                    <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                            href="tel:+639473263835"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            +63 947 326 3835

                        </a>
                    </div>
              </div>

              {/* Location */}
              <div className="flex items-start  space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Commonwealth, Quezon City, Philippines
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/christian-vacaro-8498b5275/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.facebook.com/rezerdire"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://www.instagram.com/chrschnl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>



                {/* Right column - Contact Form */}
                <div className="bg-card p-8 rounded-lg shadow-xs"onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form className="space-y-6">

                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                        Your Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Ruby Chan"
                        />
                    </div>

                     <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        Your Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="ruby.chan@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium">
                        Your Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        required
                        className="resize-none w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Hello, I have a message for you."
                        />
                    </div>
                         <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn(
                            "cosmic-button w-full flex items-center justify-center gap-2"
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
