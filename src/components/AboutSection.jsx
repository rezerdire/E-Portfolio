import { Briefcase, Code, Cpu, Network, User } from "lucide-react";

export const AboutSection = () => {
    return (
         <section id="about" className="py-24 px-4 relative">{""}
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* {Left section} */}
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Enthusiast</h3>
                <p className="text-muted-foreground">
                   Graduated as an IT in 2025, currently dedicating my time in Web Development,
                   I'm jack of all trades, master of some. I have a strong foundation in various programming languages
                   including PHP, C#, and Java.
                </p>

                <p className="text-muted-foreground">
                    In these past months I have been focusing in web development, application design, and database management. 
                    I love building creative, user-friendly websites and applications with modern 
                    frameworks and technologies. My focus is on turning ideas into efficient, 
                    high-performing solutions while ensuring great design and smooth user experiences. 
                    Always eager to learn, I bring technical knowledge and innovative thinking to every project.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                    <a href="#contact" className="cosmic-button">Get In Touch</a>
                    
                    <a href="#" className="px-6 py-2 rounded-full border 
                    border-primary text-primary hover:bg-primary/10 
                    transition-colors duration-300">Download Resume/CV</a>

                </div>
            

            </div>

            {/* {Right section} */}
            <div className="grid grid-cols-1 gap-6">

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary"/>
                        </div>

                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web Development</h4>
                            <p className="text-muted-foreground">Building responsive and user-friendly websites using modern frameworks.</p>
                        </div>

                    </div>
                </div>

                <div className="gradient-border p-6  card-hover">
                    <div className="flex items-start gap-4">

                        <div className="p-3 rounded-full bg-primary/10">
                            <Cpu className="h-6 w-6 text-primary"/>
                        </div>

                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Hardware & IT Support</h4>
                            <p className="text-muted-foreground"> Skilled in basic troubleshooting and hardware support, 
                                with experience using ticketing systems to document and resolve issues efficiently.</p>
                        </div>
                    </div>
                </div>

                <div className="gradient-border p-6  card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Network  className="h-6 w-6 text-primary"/>
                        </div>

                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Network and Cyber Security</h4>
                            <p className="text-muted-foreground">  Knowledge in Ethernet cabling, network 
                            troubleshooting, and basic cybersecurity practices.</p>
                        </div>
                    </div>
                </div>


            </div> 
        </div>
    </div>
    </section>
    );
}