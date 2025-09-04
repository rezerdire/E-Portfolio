import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Mykha Shoe Store Online Ordering System",
        description: "E-commerce style Shoe Store Ordering System with modules for Admin, Cashier, and End-User, enabling account management, order processing, and streamlined transactions.",
        image: "/projects/mykhashoestore.png",
        tags: ["HTML/CSS", "BootStrap", "PHP",],
        demoUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Landing Page Sample for Flip Market",
        description: "A visually appealing and user-friendly landing page designed for a shoe store, showcasing products, promotions, and key information to attract and engage visitors.",
        image: "/projects/FlipMarket.png",
        tags: ["Laravel", "Livewire", "Tailwind CSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/rezerdire/LandingPageSample.git"
    },
    {
        id: 3,
        title: "E-Commerce Admin Side with CRM Dashboard",
        description: "A Laravel-powered Filament admin panel with a CRM dashboard, featuring complete CRUD inventory management for products, orders, and customers.",
        image: "/projects/E-Commerce.png",
        tags: ["Laravel", "Filament"],
        demoUrl: "#",
        githubUrl: "https://github.com/rezerdire/E-COMMERCE.git"  
    }
]


export const ProjectSection = () => {
  return ( <section id="projects" className="py-2 px-4 relative">
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured
             <span className="text-primary">Projects</span></h2>
             <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of
                the projects I've worked on recently. Click on the links to view more details.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div 
                    key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                   
                        <div className="h-48 overflow-hidden">
                            <img src= {project.image} alt={project.title} className="w-full h-full object-cover
                             transition-transform duration-500 group-hover:scale-110" 
                             />
                         </div>


                        <div className="p-6"> 
                            <div className="flex flex-wrap gap-2 mb-4"> 
                                {project.tags.map((tag)=>(
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                ))}
                            </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3"> 
                                        <a href={project.demoUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                        <a href={project.githubUrl} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>    
                                </div>
                        </div>
                    </div>
                ))}
             </div>

             <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto" href="https://github.com/rezerdire" target="_blank">
                    Check My GitHub <ArrowRight size={16} />
                </a>
             </div>
    </div>
  </section>

  );
};
