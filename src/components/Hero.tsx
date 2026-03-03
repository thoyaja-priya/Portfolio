import { Database, Layout, Server, Sparkles } from 'lucide-react'
import profilePic from '../assets/profile.png'

const Hero = () => {
    return (
        <section className="py-20 md:py-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
                    <Sparkles size={16} />
                    <span>8+ Years of Engineering Excellence</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Thoyaja</span>.<br />
                    Full Stack <br className="hidden md:block" />
                    Engineer.
                </h1>

                <p className="mt-6 text-xl text-slate-400 max-w-2xl leading-relaxed">
                    I build scalable enterprise web applications, design robust microservices architectures, and optimize high-performance cloud infrastructure.
                </p>

                <div className="mt-10 flex gap-4">
                    <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-1">
                        Let's Talk
                    </a>
                    <a href="#experience" className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold py-3 px-8 rounded-xl transition-all hover:-translate-y-1">
                        View Experience
                    </a>
                </div>

                <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
                    <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-slate-300">
                        <Server size={18} className="text-indigo-400" /> Java / Spring Boot
                    </div>
                    <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-slate-300">
                        <Layout size={18} className="text-blue-400" /> React / TypeScript
                    </div>
                    <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700/50 text-slate-300">
                        <Database size={18} className="text-emerald-400" /> AWS / Cloud
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
                {/* Image Placeholder - To use your actual photo, place profile.png in src/assets/ and update the import */}
                <div className="relative w-72 h-72 md:w-[26rem] md:h-[26rem]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2rem] rotate-6 opacity-20 blur-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-[2rem] rotate-3 transition-transform hover:rotate-6"></div>
                    <div className="absolute inset-0 bg-slate-800 rounded-[2rem] border-2 border-slate-700/50 overflow-hidden flex items-center justify-center shadow-2xl">
                        <img
                            src={profilePic}
                            alt="Thoyaja Profile"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
