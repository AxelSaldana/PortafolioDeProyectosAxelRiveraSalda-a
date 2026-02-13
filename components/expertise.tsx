import { Server, Database, Brain, Globe, Cpu, Layers } from "lucide-react";

const expertise = [
    {
        title: "Scalable Backend Systems",
        icon: Server,
        description: "Architecting high-performance ASP.NET Core APIs and distributed services capable of handling massive concurrency.",
        tags: ["ASP.NET Core", "Microservices", "gRPC", "Redis"]
    },
    {
        title: "Database Architecture",
        icon: Database,
        description: "Designing efficient schemas and optimizing complex queries for SQL Server and NoSQL solutions like MongoDB.",
        tags: ["SQL Server", "EF Core", "MongoDB", "Query Optimization"]
    },
    {
        title: "System Design",
        icon: Brain,
        description: "Applying Clean Architecture and SOLID principles to build maintainable, testable, and robust industrial-grade software.",
        tags: ["Clean Architecture", "SOLID", "DDD", "Design Patterns"]
    },
    {
        title: "Modern Web Engineering",
        icon: Globe,
        description: "Building responsive, interactive frontends with Next.js and React that integrate seamlessly with complex backends.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Interactive Applications",
        icon: Cpu,
        description: "Developing immersive interactive experiences using Unity and WebGL integration for products requiring 3D visualization.",
        tags: ["Unity", "C#", "Three.js", "WebGL"]
    },
    {
        title: "Performance & Security",
        icon: Layers,
        description: "Implementing JWT authentication, structured error handling, and performance-first development practices.",
        tags: ["OAuth2", "JWT", "Security Headers", "Caching"]
    }
];

export default function Expertise() {
    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
                    <div className="w-20 h-1 bg-primary mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        My technical focus is on building robust backend systems and high-performance applications with modern architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertise.map((item, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-primary/50 transition-all duration-300 hover:bg-zinc-900/80"
                        >
                            <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <item.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className="text-xs font-mono px-2 py-1 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
