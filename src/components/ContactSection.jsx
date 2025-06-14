import { Linkedin, Mail, Phone, Send } from "lucide-react"
import { cn } from "@/lib/utils";

export const ContactSection = () => {
    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30 overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate ? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
                    <div className="space-y-8 ">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6 flex flex-col items-center md:flex-col md:justify-center lg:flex-row lg:justify-between">
                            <div className="flex items-start space-x-4 ">
                                {/* <div className="p-3 rounded-full bg-primary/10">
                                    
                                </div> */}
                                <div>
                                    <h4 className="font-medium flex justify-center"><Mail className="h-6 w-6 text-primary" /></h4>
                                    <a href="mailto:yasiruisuranga1@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                        yasiruisuranga1@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                {/* <div className="p-3 rounded-full bg-primary/10">
                                    
                                </div> */}
                                <div>
                                    <h4 className="font-medium flex justify-center"><Phone className="h-6 w-6 text-primary" /></h4>
                                    <a href="tel:+94764604560" className="text-muted-foreground hover:text-primary transition-colors">
                                        +94 76 460 4560
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4 mb-5">
                                {/* <div className="p-3 rounded-full bg-primary/10">
                                    
                                </div> */}
                                <div>
                                    <h4 className="font-medium flex justify-center"><Linkedin className="h-6 w-6 text-primary" /></h4>
                                    <a href="https://www.linkedin.com/in/yasiru-isuranga-40aa04240/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                                        linkedin.com/in/yasiru-isuranga
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6 ">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Your name..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="YourEmail@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Hello..." />
                            </div>

                            <button
                                type="submit"
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                )}>
                                    Send Message
                                    <Send size={16}/>
                            </button>

                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    )
}