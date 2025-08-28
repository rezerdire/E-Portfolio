import { useState } from "react";
import { cn } from "../lib/utils";
const skills = [
    // Front-end
    { name: "HTML-CSS", level: 90, category: "front-end" },
    { name: "JavaScript", level: 80, category: "front-end" },
    { name: "Bootstrap", level: 80, category: "front-end" },
    { name: "React", level: 45, category: "front-end" },
    { name: "Tailwind CSS", level: 50, category: "front-end" },
    { name: "Livewire", level: 60, category: "front-end" },
    { name: "Vue JS ", level: 10, category: "front-end" },
    { name: "Alphine JS ", level: 35, category: "front-end" },

    // Back-end
    { name: "C#", level: 75, category: "back-end" },
    { name: "Java", level: 60, category: "back-end" },
    { name: "Python", level: 20, category: "back-end" },
    { name: "PHP/Laravel", level: 80, category: "back-end" },


    // Tools
    { name: "Git/GitHub", level: 65, category: "tools" },
    { name: "Figma", level: 50, category: "tools" },
    { name: "VsCode", level: 80, category: "tools" },
    { name: "Visual Studio 2022", level: 80, category: "tools" },

    //Database Tools
    {name:"MySQL", level: 70, category: "database" },
    {name:"MongoDB", level: 20, category: "database" },
        
    // Other Skill
    {name:"Cyber Security Practices", level: 60, category: "other" },
    {name:"Hardware/Software Troubleshooting", level: 80, category: "other" },
    {name:"System Administration", level: 80, category: "other" },
    {name:"SAP Business One Basic & Advance", level: 70, category: "other" },

];

const categories = ["all", "front-end", "back-end", "tools", "database", "other"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return  (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Skills</span>
            </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                    activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
                key={key}
                onClick={() => setActiveCategory(category)}
                >
                {category}
                </button>
            ))}
        </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">

                        <div className="text-left mb-4"> 
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>

                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                                style={{width: skill.level + "%" }}
                            /> 
                        </div>

                        <div className="text-right mt-1"> 
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>

                     </div>
                ))}
            </div>
        </div>
    </section>
    );
};