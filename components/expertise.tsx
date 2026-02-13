import { Code2, Smartphone, Monitor, Database, Globe, Cuboid } from "lucide-react";

const expertise = [
    {
        title: "XR Development (AR/VR)",
        icon: Cuboid,
        description: "Building immersive experiences for Meta Quest 2, and mobile AR using Unity, AR Foundation, Vuforia, and Spark AR.",
        tags: ["Unity", "C#", "AR Foundation", "Vuforia", "Spark AR"]
    },
    {
        title: "Full Stack .NET",
        icon: Code2,
        description: "Developing robust desktop and web applications with C# and .NET, ensuring scalable backend architecture.",
        tags: ["C#", ".NET", "ASP.NET Core", "WPF", "WinForms"]
    },
    {
        title: "Modern Web Apps",
        icon: Globe,
        description: "Creating responsive frontends with React, Angular, and TypeScript, integrated with high-performance backends.",
        tags: ["React", "Angular", "TypeScript", "Tailwind CSS"]
    },
    {
        title: "Database Management",
        icon: Database,
        description: "Designing efficient data schemas and managing storage with SQL Server, MySQL, and MongoDB.",
        tags: ["MySQL", "MongoDB", "SQL Server", "Data Modeling"]
    },
    {
        title: "3D & Scripting",
        icon: Monitor,
        description: "Utilizing Blender for 3D modeling and Python for automation to support complex development pipelines.",
        tags: ["Blender", "Python", "Automation", "3D Modeling"]
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        description: "Experience with cross-platform frameworks like Flutter and native Android development for diverse client needs.",
        tags: ["Flutter", "Android", "Mobile UI", "Cross-Platform"]
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
                        My technical focus blends immersive technology with solid engineering principles to create scalable digital solutions.
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
