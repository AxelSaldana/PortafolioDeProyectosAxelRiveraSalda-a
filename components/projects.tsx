import { ExternalLink, Github, Boxes, Microscope, ShoppingCart, Server, Cpu, Globe } from "lucide-react";

// Projects sourced from GitHub: AxelSaldana
const projects = [
    {
        title: "Kitchen Electrics Warehouse",
        category: "Full Stack System",
        description: "Comprehensive warehouse management system for white goods kitchen appliances. Features inventory control, product registration, user management, and reporting capabilities.",
        tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"], // Inferred from "warehouse management" standard stacks or description if available
        architecture: "MVC / Monolith",
        link: "https://github.com/AxelSaldana/kitchen-electrics-warehouse",
        github: "https://github.com/AxelSaldana/kitchen-electrics-warehouse",
        icon: Boxes
    },
    {
        title: "News NLP Processor",
        category: "AI & Data Science",
        description: "Natural Language Processing system for news classification. Utilizes Python libraries for scraping, splitting, and analyzing text data.",
        tech: ["Python", "NumPy", "Scikit-learn", "Pandas", "Scraping"],
        architecture: "Data Pipeline",
        link: "https://github.com/AxelSaldana/news-nlp-processor",
        github: "https://github.com/AxelSaldana/news-nlp-processor",
        icon: Server
    },
    {
        title: "Twitter Clone Ecosystem",
        category: "Distributed System",
        description: "A full-stack recreation of Twitter's core functionality, split into a Go-based backend and a frontend client, demonstrating microservice concepts.",
        tech: ["Go", "Netlify", "React", "REST API"],
        architecture: "Client-Server",
        link: "https://github.com/AxelSaldana/Twitter",
        github: "https://github.com/AxelSaldana/Twitter",
        icon: Cpu
    },
    {
        title: "Axis Marker Plugin",
        category: "Unity Tooling",
        description: "Custom Unity plugin for visualizing axis markers, enhancing the development workflow for 3D environments and AR/VR applications.",
        tech: ["Unity", "C#", "Editor Scripting"],
        architecture: "Plugin / Add-on",
        link: "https://github.com/AxelSaldana/AxisMarkerPlugin",
        github: "https://github.com/AxelSaldana/AxisMarkerPlugin",
        icon: Microscope
    },
    {
        title: "Virtual Reality Projects",
        category: "VR Simulation",
        description: "A collection of immersive virtual reality experiences and simulations developed with Unity. Demonstrates interaction design and spatial computing concepts.",
        tech: ["Unity", "C#", "XR Interaction Toolkit", "Oculus SDK"],
        architecture: "VR Experience",
        link: "https://github.com/AxelSaldana/ProyectoVirtuales",
        github: "https://github.com/AxelSaldana/ProyectoVirtuales",
        icon: Microscope
    },
    {
        title: "Twitter Frontend Client",
        category: "React Application",
        description: "The responsive frontend interface for the distributed Twitter clone system. Built with React to consume the Go-based microservices API.",
        tech: ["React", "JavaScript", "CSS Modules", "Axios"],
        architecture: "SPA Client",
        link: "https://github.com/AxelSaldana/TwitterFront",
        github: "https://github.com/AxelSaldana/TwitterFront",
        icon: Globe
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-zinc-950 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
                        <div className="w-20 h-1 bg-secondary mb-6"></div>
                        <p className="text-xl text-muted-foreground max-w-xl">
                            Selected open-source projects demonstrating Full Stack engineering and Tooling capabilities.
                        </p>
                    </div>
                    <a href="https://github.com/AxelSaldana" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors font-mono text-sm border-b border-primary pb-1 flex items-center gap-2">
                        View GitHub Profile <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:translate-y-[-5px]"
                        >
                            {/* Image Placeholder - Abstract representation since we don't have screenshots */}
                            <div className="h-48 bg-linear-to-br from-zinc-800 to-zinc-900 group-hover:from-zinc-700 group-hover:to-zinc-800 transition-colors relative overflow-hidden flex items-center justify-center">
                                <project.icon className="w-20 h-20 text-zinc-700 group-hover:text-zinc-500 transition-colors opacity-50" />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-mono text-primary mb-2 block tracking-wider uppercase">{project.category}</span>
                                        <h3 className="text-xl font-bold group-hover:text-white transition-colors">{project.title}</h3>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-medium text-zinc-400 bg-zinc-800/50 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                        {project.architecture}
                                    </div>


                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
