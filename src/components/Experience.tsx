import { Building2, Calendar, User } from 'lucide-react'

const experiences = [
    {
        role: "Software Engineer II",
        company: "Nike",
        client: "Nike, Portland",
        duration: "Mar 2025 - Present",
        description: "Architected microservices using Java (Spring Boot) and Node.js on AWS to process and distribute shoe pattern data, improving throughput by 35%. Designed GraphQL APIs to serve complex metadata, cutting query times by 40%. Built interactive React/TypeScript UI components for real-time visualization and implemented CI/CD pipelines via GitHub Actions.",
        tags: ["Java", "Spring Boot", "React", "Node.js", "GraphQL", "AWS", "Terraform"]
    },
    {
        role: "Software Developer",
        company: "United Airlines",
        client: "United Airlines, Houston",
        duration: "Sep 2023 - Feb 2025",
        description: "Built a Java and Spring Boot-based orchestration application for booking agents to efficiently modify PNRs. Developed and consumed 30+ REST APIs orchestrating data across microservices. Deployed highly available services to AWS (EC2, DynamoDB, Lambda) and automated CI/CD using Jenkins, Docker, and Kubernetes.",
        tags: ["Java", "Spring Boot", "Docker", "Kubernetes", "AWS", "REST"]
    },
    {
        role: "Software Engineer",
        company: "DXC Technology",
        client: "DXC Technology, Dallas",
        duration: "Oct 2021 - Jul 2023",
        description: "Designed secure RESTful APIs for license management using Spring Boot, reducing errors by 25%. Architected hybrid data persistence with MySQL and MongoDB. Implemented Spring Security RBAC and engineered comprehensive event logging. Automated backend maintenance with Shell scripting to cut manual effort by 50%.",
        tags: ["Java", "Spring Boot", "MySQL", "MongoDB", "Shell Scripting", "Linux"]
    },
    {
        role: "Frontend Software Engineer",
        company: "HCLTech",
        client: "HCLTech, India",
        duration: "Dec 2019 - Sep 2021",
        description: "Designed modular UI architecture with centralized Redux state management. Developed 40+ reusable React components and integrated 10+ RESTful APIs. Optimized performance via Webpack tuning and lazy loading, improving initial load times by 1.2s. Enforced quality through Jest and React Testing Library.",
        tags: ["React", "Redux", "Webpack", "Jest", "JavaScript", "HTML/CSS"]
    },
    {
        role: "Associate Software Engineer",
        company: "GrowthPal Technologies",
        client: "GrowthPal Technologies, India",
        duration: "Jan 2018 - Nov 2019",
        description: "Optimized Java-based services and RESTful APIs, resolving bottlenecks and reducing response times by 28%. Accelerated data retrieval by 40% through advanced SQL queries and indexing strategies. Automated deployments and maintenance using shell scripting, maintaining 99.9% system uptime.",
        tags: ["Java", "SQL", "REST API", "Shell Scripting", "CI/CD"]
    }
]

const Experience = () => {
    return (
        <section id="experience" className="scroll-mt-24">
            <div className="mb-14">
                <h2 className="text-3xl font-bold tracking-tight text-white inline-flex items-center gap-3">
                    <Building2 className="text-indigo-500" />
                    Professional Experience
                </h2>
                <div className="h-1 w-20 bg-indigo-500 rounded mt-4"></div>
            </div>

            <div className="space-y-12">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="relative pl-8 md:pl-0">
                        {/* Timeline Line (Desktop) */}
                        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700/50 -translate-x-1/2"></div>
                        {/* Timeline Line (Mobile) */}
                        <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-700/50"></div>

                        <div className={`md:flex items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Empty space for alternating layout */}
                            <div className="hidden md:block w-5/12"></div>

                            {/* Timeline Node */}
                            <div className="absolute left-[-4px] md:left-1/2 md:translate-x-[-50%] w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-slate-900 mt-1.5 md:mt-0 z-10"></div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12 bg-slate-800/30 border border-slate-700/50 p-6 sm:p-8 rounded-3xl hover:bg-slate-800/60 transition-colors shadow-lg group">
                                <div className="flex flex-wrap items-center justify-between gap-y-2 mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                                    <div className="flex items-center gap-1.5 text-sm font-medium text-slate-400 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-700/50">
                                        <Calendar size={14} />
                                        {exp.duration}
                                    </div>
                                </div>
                                <h4 className="text-lg font-medium text-slate-300 mb-2 flex items-center gap-2">
                                    <Building2 size={16} className="text-slate-500" /> {exp.company}
                                </h4>
                                <div className="text-indigo-400 text-sm font-medium mb-4 flex items-center gap-2">
                                    <User size={14} /> Client: {exp.client}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience
