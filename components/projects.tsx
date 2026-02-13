import { ExternalLink, Github, Boxes, Microscope, ShoppingCart } from "lucide-react";

// Inferred from CV Work History
const projects = [
    {
        title: "Industrial AR Visualization",
        category: "Augmented Reality",
        description: "Built real-time AR applications with Unity to visualize industrial processes, improving understanding and optimization for international clients.",
        tech: ["Unity", "C#", "AR Foundation", "Vuforia"],
        architecture: "Mobile AR",
        link: "#",
        github: "#",
        icon: Boxes
    },
    {
        title: "Medical VR Simulators",
        category: "Virtual Reality",
        description: "Designed and developed VR simulators for medical training, providing immersive educational experiences for the healthcare sector.",
        tech: ["Unity", "VR/XR", "C#", "Blender"],
        architecture: "Immersive Simulation",
        link: "#",
        github: "#",
        icon: Microscope
    },
    {
        title: "E-Commerce & WordPress Platforms",
        category: "Full Stack Web",
        description: "Developed tailored e-commerce sites and interactive online stores using WordPress, Angular, and React, optimizing user experience and high-impact solutions.",
        tech: ["WordPress", "PHP", "Angular", "React"],
        architecture: "MVC / CMS",
        link: "#",
        github: "#",
        icon: ShoppingCart
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
                            Selected projects from my experience in XR development and Full Stack Engineering.
                        </p>
                    </div>
                    {/* <button className="text-primary hover:text-white transition-colors font-mono text-sm border-b border-primary pb-1">
            View All Projects
          </button> */}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

                                    {/* Placeholder links since CV didn't have specific URLs */}
                                    {/* 
                    <div className="flex gap-4">
                        <a href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    </div> 
                    */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
