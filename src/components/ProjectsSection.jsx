import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Lanka Reads",
        description: "A platform for readers and writers built with MERN",
        image: "/projects/p1.png",
        tags: ["MERN", "Bootstrap"],
        githubUrl: "https://github.com/YasiruIsuranga/LankaReads",
        // demoUrl: "#",
    },
    {
        id: 2,
        title: "KV Audio",
        description: "An e-commerce website for renting music items built with MERN and taildwind CSS",
        image: "/projects/p2.png",
        tags: ["MERN", "Taildwind CSS", "supabase"],
        githubUrl: "https://github.com/YasiruIsuranga/kv-audio-frontend",
        demoUrl: "https://kv-audio-frontend-six.vercel.app/",
    },
    {
        id: 3,
        title: "Edu Master",
        description: "A LMS platform built with MERN",
        image: "/projects/p3.jpg",
        tags: ["MERN", "Taildwind CSS"],
        githubUrl: "https://github.com/YasiruIsuranga/EduMaster",
        // demoUrl: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative overflow-hidden">
            <div className="container mx-auto mx-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary "> Projects</span>
                </h2>

                <p className="text-center text-muted-foregroud mb-12 max-w-2xl mx-auto ">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 ">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center ">
                                    <div className="flex space-x-3">
                                        <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                            {/* <ExternalLink size={20} /> */}
                                        </a>
                                        <a href={project.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 ">
                    <a href="https://github.com/YasiruIsuranga" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    )
} 