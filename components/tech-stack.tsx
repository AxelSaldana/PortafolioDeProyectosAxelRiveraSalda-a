
const education = [
    {
        name: "Universidad Politécnica De San Luis Potosí",
        degree: "Information Technology Engineering (ITI)",
        date: "Expected 06/2024"
    },
    {
        name: "Certifications",
        degree: "Unity Certified User, Cisco Entrepreneurship & Cybersecurity, IT Essentials",
        date: "Various"
    }
];

const backend = ["C#", ".NET", "MySQL", "MongoDB", "PHP", "Python"];
const frontend = ["React", "Angular", "TypeScript", "JavaScript", "Ruby", "Tailwind CSS"];
const tools = ["Unity", "Unreal Engine 4", "Blender", "Git", "Jira", "Figma", "Photoshop", "Spark AR"];

export default function TechStack() {
    return (
        <section className="py-24 bg-background relative z-10">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
                    <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A comprehensive toolset for building immersive XR experiences and robust software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {/* Backend Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-center border-b border-border pb-4">Backend & Data</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {backend.map((tech) => (
                                <div key={tech} className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Frontend Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-center border-b border-border pb-4">Frontend & Web</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {frontend.map((tech) => (
                                <div key={tech} className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono hover:border-purple-500/50 hover:text-purple-400 transition-colors cursor-default">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-center border-b border-border pb-4">Engine & Tools</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {tools.map((tech) => (
                                <div key={tech} className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education Section */}
                <div className="mt-24 max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-8 text-zinc-300">Education & Certifications</h3>
                    <div className="grid gap-6">
                        {education.map((edu, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 inline-block">
                                <h4 className="text-xl font-bold text-white mb-2">{edu.name}</h4>
                                <p className="text-primary font-medium">{edu.degree}</p>
                                <p className="text-muted-foreground text-sm mt-2 font-mono">{edu.date}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-32 border-t border-zinc-900 pt-8 text-center text-zinc-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Axel Rivera Saldaña. Built with Next.js & Three.js.</p>
                </div>
            </div>
        </section>
    );
}
