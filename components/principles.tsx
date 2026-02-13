import { Code2, ShieldCheck, Zap } from "lucide-react";

export default function Principles() {
    return (
        <section className="py-24 bg-background relative z-10 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Engineering Principles</h2>
                        <div className="space-y-12">
                            <div className="flex gap-6">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <Code2 className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Clean Architecture</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Software should be independent of frameworks, UI, and external agencies. I decouple business logic from technical details to ensure longevity.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Solid & Reliable</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Adhering to SOLID principles allows for code that is easy to maintain, extend, and test. Reliability is not an afterthought, it's a constraint.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">Performance First</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Optimization is part of the design process. From database query tuning to efficient memory management in C#, performance is a key metric.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Abstract Code/Visual Representation */}
                        <div className="aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 p-8 font-mono text-sm text-zinc-400 overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 text-xs text-zinc-600">IPolymerService.cs</div>
                            <pre className="opacity-70">
                                {`public async Task<Result<Process>> ExecuteAsync(
    Guid id, 
    CancellationToken ct)
{
    var entity = await _repo.GetByIdAsync(id, ct);
    
    if (entity is null)
        return Result.Failure<Process>(Errors.NotFound);

    var visualization = _factory.Create(entity);
    
    await _bus.Publish(
        new ProcessStarted(entity.Id), 
        ct);

    return Result.Success(visualization);
}`}
                            </pre>
                            <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
