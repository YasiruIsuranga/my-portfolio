import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative overflow-hidden"
        >
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
                        <p className="text-muted-foreground ">
                            dedicated Full-Stack Developer with hands-on experience building modern web applications using the MERN stack (MongoDB, Express.js, React, Node.js). Over the past few years, I’ve contributed to real-world projects with teams like Knights and Singularity Systems, where I developed e-commerce platforms, education portals, and user-focused front-end designs.
                        </p>
                        <p className="text-muted-foreground ">
                            I thrive on transforming ideas into scalable, efficient, and visually engaging web solutions. My approach blends clean code, responsive design, and user experience into everything I build.
                        </p>
                        <div className="flex flex-col sm:fles-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>
                            <a href="/resume/Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 duration-300 hover:scale-105 active:scale-95 transition-clors" target="_blank">    
                                Check My CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6  text-secondary">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-5 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive websites and web applications with MERN Stack.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-5 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        Designing intutive user interfaces and seamless user experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-5 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion to with agile methodologies. 
                                    </p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}