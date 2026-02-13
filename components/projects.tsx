import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Enterprise Invoice Management",
        category: "Full Stack System",
        description: "A comprehensive invoicing platform processing $1M+ monthly volume. Built with Clean Architecture to ensure maintainability and scalability across distributed teams.",
        tech: [".NET 8", "SQL Server", "React", "Docker"],
        architecture: "Microservices",
        link: "#",
        github: "#"
    },
    {
        title: "Real-time Analytics Dashboard",
        category: "Data Visualization",
        description: "High-performance dashboard rendering live operational metrics. Optimized signalR connections for sub-100ms latency updates.",
        tech: ["ASP.NET Core", "SignalR", "Next.js", "Redis"],
        architecture: "Event-Driven",
        link: "#",
        github: "#"
    },
    {
        title: "Interactive Product Configurator",
        category: "3D Web Application",
        description: "A WebGL-based product configurator allowing users to customize complex industrial machinery in real-time.",
        tech: ["Three.js", "React Three Fiber", "C# API", "Azure"],
        architecture: "Client-Side Rendering",
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section className="py-24 bg-zinc-950 relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                        <div className="w-20 h-1 bg-secondary mb-6"></div>
                        <p className="text-xl text-muted-foreground max-w-xl">
                            Select works demonstrating problem-solving capabilities and technical depth.
                        </p>
                    </div>
                    <button className="text-primary hover:text-white transition-colors font-mono text-sm border-b border-primary pb-1">
                        View All Projects
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-500 hover:translate-y-[-5px]"
                        >
                            {/* Image Placeholder - In real usage, use actual images */}
                            <div className="h-48 bg-linear-to-br from-zinc-800 to-zinc-900 group-hover:from-zinc-700 group-hover:to-zinc-800 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 text-6xl font-black text-zinc-950 select-none">
                                    {project.category.split(" ")[0]}
                                </div>
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
                                        <a href={project.github} className="text-zinc-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.link} className="text-zinc-400 hover:text-white transition-colors">
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
