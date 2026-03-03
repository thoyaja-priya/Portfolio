import { useState } from 'react'
import { Mail, Linkedin, ExternalLink, Send } from 'lucide-react'

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)

    return (
        <section id="contact" className="scroll-mt-24 mb-20">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white inline-flex items-center justify-center gap-3">
                    <Mail className="text-blue-500" />
                    Get In Touch
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded mx-auto mt-4"></div>
                <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
                    Currently open to new opportunities. Fill out the form below to send me a direct email!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12 bg-slate-800/20 p-6 md:p-10 rounded-3xl border border-slate-700/50 shadow-xl">

                {/* Contact Info Side */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">Let's Connect</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Whether you are a recruiter looking for an experienced software engineer, or just want to say hi, my inbox is always open.
                    </p>

                    <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-blue-500/30 transition-colors group">
                        <div className="bg-blue-500/10 w-12 h-12 rounded-full flex justify-center items-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-1">Email directly</h4>
                            <a href="mailto:thoyajapriyam4@gmail.com" className="text-white hover:text-blue-400 font-medium transition-colors flex items-center gap-1 justify-center md:justify-start">
                                thoyajapriyam4@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/50 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 hover:border-indigo-500/30 transition-colors group">
                        <div className="bg-indigo-500/10 w-12 h-12 rounded-full flex justify-center items-center text-indigo-400 shrink-0 group-hover:scale-110 transition-transform">
                            <Linkedin size={20} />
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-slate-300 mb-1">LinkedIn</h4>
                            <a href="https://www.linkedin.com/in/thoyajamotamarri/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 font-medium transition-colors flex items-center gap-1 justify-center md:justify-start">
                                View Profile <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Form Side */}
                <div className="bg-slate-900/50 p-6 md:p-8 rounded-2xl border border-slate-700/50">
                    <form
                        action="https://formsubmit.co/thoyajapriyam4@gmail.com"
                        method="POST"
                        className="flex flex-col gap-5"
                        onSubmit={() => setIsSubmitting(true)}
                    >
                        {/* Disable Captcha for smoother UX after activation */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_subject" value="New Message from Portfolio Website" />

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="user_name" className="text-sm font-medium text-slate-300 ml-1">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                required
                                placeholder="Jane Doe"
                                className="bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 transition-colors placeholder:text-slate-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="user_email" className="text-sm font-medium text-slate-300 ml-1">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                required
                                placeholder="jane@example.com"
                                className="bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 transition-colors placeholder:text-slate-500"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                required
                                placeholder="Hi Thoyaja, I'd like to discuss a job opportunity..."
                                className="bg-slate-800/80 border border-slate-700 text-white text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 transition-colors placeholder:text-slate-500 resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`mt-2 flex items-center justify-center gap-2 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg bg-blue-600 hover:bg-blue-500 hover:-translate-y-0.5 shadow-blue-500/20 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed`}
                        >
                            {isSubmitting ? (
                                <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            ) : (
                                <>
                                    <Send size={18} /> Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
