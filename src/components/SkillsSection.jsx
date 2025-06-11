import { DivideCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const skills = [
    //frontend
    { name: "HTML", level: 95, category: "frontend", icon: "/icons/html.svg" },
    { name: "CSS", level: 95, category: "frontend", icon: "/icons/css.svg" },
    { name: "JavaScript", level: 70, category: "frontend", icon: "/icons/javascript.svg" },
    { name: "ReactJs", level: 70, category: "frontend", icon: "/icons/react-icon.svg" },
    { name: "Tailwind CSS", level: 70, category: "frontend", icon: "/icons/tailwind.svg" },
    { name: "Bootstrap CSS", level: 70, category: "frontend", icon: "/icons/bootstrap.svg" },

    //backend
    { name: "NodeJs", level: 60, category: "backend", icon: "/icons/node.svg" },
    { name: "ExpressJs", level: 60, category: "backend", icon: "/icons/express.svg" },
    { name: "PHP", level: 60, category: "backend", icon: "/icons/php.svg" },
    { name: "MongoDB", level: 60, category: "backend", icon: "/icons/mongodb.svg" },
    { name: "SQL", level: 60, category: "backend", icon: "/icons/sql.svg" },

    //Tools
    { name: "Git/GitHub", level: 60, category: "tools", icon: "/icons/github.svg" },

];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12 ">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-primary"
                            )}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className=" p-6 rounded-full shadow-xs card-hover">
                            <div className="flex flex-col justify-center items-center mb-4 ">
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className="w-16 h-16 object-contain"
                                />  
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            {/* <div className="w-full bg-secondary/50 h-2 rounded-full overflow--hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div> */}
                            {/* <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}