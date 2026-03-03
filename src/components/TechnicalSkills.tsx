import { Code2 } from 'lucide-react'

const skillCategories = [
    { name: "Methodologies", tools: ["SDLC", "Agile", "Scrum", "TDD"] },
    { name: "Programming Languages", tools: ["Java", "JavaScript", "TypeScript", "Node.js", "Python", "SQL", "Shell Scripting"] },
    { name: "Frontend", tools: ["HTML5", "CSS3", "SCSS", "React", "Redux", "TypeScript", "Bootstrap", "Webpack"] },
    { name: "Backend", tools: ["Spring Boot", "Spring MVC", "Spring Security", "J2EE", "Hibernate", "Node.js", "Microservices"] },
    { name: "Cloud & DevOps", tools: ["AWS (EC2, S3, Lambda, DynamoDB)", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"] },
    { name: "APIs & Web Services", tools: ["RESTful APIs", "GraphQL", "SOAP", "Swagger", "Apache CXF"] },
    { name: "Database", tools: ["MongoDB", "MySQL", "PostgreSQL", "Oracle", "DB2"] },
    { name: "Testing & Code Quality", tools: ["JUnit", "Mockito", "Jest", "React Testing Library", "Postman", "SonarQube"] },
    { name: "Monitoring & Tools", tools: ["ELK Stack", "Splunk", "Dynatrace", "Databricks", "Git", "Maven", "Linux"] }
]

const TechnicalSkills = () => {
    return (
        <section id="skills" className="scroll-mt-24">
            <div className="mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-white inline-flex items-center gap-3">
                    <Code2 className="text-emerald-500" />
                    Technical Skills
                </h2>
                <div className="h-1 w-20 bg-emerald-500 rounded mt-4"></div>
            </div>

            <div className="space-y-8">
                {skillCategories.map((category, idx) => (
                    <div key={idx} className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-2xl">
                        <h3 className="text-white font-medium text-lg mb-4">{category.name}</h3>
                        <div className="flex flex-wrap gap-3">
                            {category.tools.map((tool, i) => (
                                <span key={i} className="bg-slate-900 px-4 py-2 rounded-lg text-sm font-medium text-slate-300 border border-slate-700/50 shadow-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnicalSkills
