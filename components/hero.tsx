import { ArrowRight, Download } from "lucide-react";
import Scene3D from "@/components/scene-3d";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background 3D Scene */}
            <Scene3D />

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-secondary font-mono mb-4 text-sm tracking-widest uppercase">
                        System Architect & Developer
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-white">
                        Axel Rivera Saldaña
                    </h1>
                    <p className="text-4xl md:text-6xl font-light text-muted-foreground mb-8">
                        Full Stack .NET Engineer
                    </p>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
                        Building scalable APIs, distributed systems, and interactive applications
                        focused on performance, clean architecture, and product-driven engineering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:bg-blue-600 hover:scale-105 flex items-center gap-2">
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-8 py-4 border border-border bg-black/30 backdrop-blur-sm text-gray-300 rounded-full font-medium transition-all hover:bg-white/5 hover:text-white flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
                <span className="text-sm font-mono tracking-widest">SCROLL</span>
            </div>
        </section>
    );
}
