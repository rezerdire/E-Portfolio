import { useState } from "react";
import { cn } from "../lib/utils";

const categories = [
    {
        id: "front-end",
        label: "Frontend",
        title: "Frontend Development",
        description: "Building responsive, accessible interfaces with modern frontend technologies.",
        skills: [
            { name: "HTML & CSS", score: 90, level: "Advanced" },
            { name: "JavaScript", score: 80, level: "Advanced" },
            { name: "Bootstrap", score: 100, level: "Advanced" },
            { name: "React", score: 55, level: "Intermediate" },
            { name: "Tailwind CSS", score: 90, level: "Advanced" },
            { name: "Livewire", score: 70, level: "Intermediate" },
            { name: "Vue.js", score: 10, level: "Basic" },
            { name: "Alpine.js", score: 45, level: "Familiar" },
        ],
    },
    {
        id: "back-end",
        label: "Backend",
        title: "Backend Development",
        description: "Developing application logic, APIs, and server-side features.",
        skills: [
            { name: "PHP / Laravel", score: 80, level: "Advanced" },
            { name: "C#", score: 75, level: "Intermediate" },
            { name: "Java", score: 60, level: "Intermediate" },
            { name: "Python", score: 20, level: "Basic" },
        ],
    },
    {
        id: "database",
        label: "Database",
        title: "Database",
        description: "Working with relational and document databases for application data.",
        skills: [
            { name: "MySQL", score: 70, level: "Intermediate" },
            { name: "MongoDB", score: 20, level: "Basic" },
        ],
    },
    {
        id: "tools",
        label: "Tools",
        title: "Tools",
        description: "Using design, version-control, and development tools to ship reliably.",
        skills: [
            { name: "Git / GitHub", score: 65, level: "Intermediate" },
            { name: "Figma", score: 50, level: "Familiar" },
            { name: "VS Code", score: 80, level: "Advanced" },
            { name: "Visual Studio 2022", score: 80, level: "Advanced" },
        ],
    },
    {
        id: "other",
        label: "Other",
        title: "Other Skills",
        description: "Supporting skills across security, troubleshooting, administration, and business systems.",
        skills: [
            { name: "Cybersecurity Practices", score: 60, level: "Intermediate" },
            { name: "Hardware / Software Troubleshooting", score: 80, level: "Advanced" },
            { name: "System Administration", score: 80, level: "Advanced" },
            { name: "SAP Business One", score: 70, level: "Intermediate" },
        ],
    },
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const activeCategoryData = categories.find(
        (category) => category.id === activeCategory
    ) ?? categories[0];

    return (
        <section id="skills" className="relative bg-secondary/30 px-4 py-24 font-sans text-foreground">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
                    My <span className="text-primary">Skills</span>
                </h2>
                <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
                    A focused overview of the technologies and tools I use to build,
                    design, and support digital experiences.
                </p>

                <div
                    className="-mx-4 mb-10 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0"
                    role="tablist"
                    aria-label="Skill categories"
                >
                    <div className="flex min-w-max gap-2 md:justify-start">
                        {categories.map((category) => {
                            const isActive = activeCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    id={`skills-tab-${category.id}`}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-controls="skills-panel"
                                    className={cn(
                                        "cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
                                        isActive
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-secondary/70 text-foreground hover:bg-secondary"
                                    )}
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div
                    id="skills-panel"
                    role="tabpanel"
                    aria-labelledby={`skills-tab-${activeCategoryData.id}`}
                    className="gradient-border p-6 shadow-xs md:p-8"
                >
                    <div className="flex flex-col gap-3 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold">
                                {activeCategoryData.title}
                            </h3>
                            <p className="mt-2 max-w-2xl text-muted-foreground">
                                {activeCategoryData.description}
                            </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                            {activeCategoryData.skills.length} skills
                        </span>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {activeCategoryData.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="rounded-lg bg-background/60 p-4 transition-colors duration-300 hover:bg-background"
                            >
                                <div className="mb-3 flex items-center justify-between gap-4">
                                    <h4 className="text-lg font-semibold">{skill.name}</h4>
                                    <span className="shrink-0 text-sm text-primary">
                                        {skill.level}
                                    </span>
                                </div>
                                <div
                                    role="progressbar"
                                    aria-label={`${skill.name} proficiency`}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-valuenow={skill.score}
                                    aria-valuetext={skill.level}
                                    className="h-2 overflow-hidden rounded-full bg-secondary/50"
                                >
                                    <div
                                        className="h-full rounded-full bg-primary transition-[width] duration-700"
                                        style={{ width: `${skill.score}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
