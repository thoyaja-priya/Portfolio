import { Briefcase, Server, Zap, Sparkles } from 'lucide-react'

const keyHighlights = [
    {
        icon: <Briefcase size={24} />,
        title: "Enterprise Architecture",
        desc: "8+ years leading the design and development of large-scale, resilient enterprise web applications used globally."
    },
    {
        icon: <Server size={24} />,
        title: "Microservices & Cloud",
        desc: "Expertise in breaking down monoliths into high-throughput Spring Boot/Node.js microservices hosted on AWS infrastructure."
    },
    {
        icon: <Zap size={24} />,
        title: "Performance Optimization",
        desc: "Proven track record of drastically improving system throughput and database query efficiency via targeted profiling and tuning."
    },
]

const Summary = () => {
    return (
        <section id="summary" className="scroll-mt-24">
            <div className="mb-12 md:text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white inline-flex items-center gap-3">
                    <Sparkles className="text-blue-500" />
                    What I Do
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded mt-4 md:mx-auto"></div>
                <p className="mt-6 text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    I merge deep backend expertise with modern frontend implementation to deliver secure, high-performing software that directly impacts business outcomes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="bg-slate-800/30 border border-slate-700/50 p-8 rounded-3xl hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2 group">
                        <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 w-14 h-14 flex items-center justify-center rounded-2xl mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300 ring-1 ring-blue-500/30">
                            {highlight.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{highlight.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Summary
