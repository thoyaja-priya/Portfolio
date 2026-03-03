import { Mail, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="py-8 mt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Thoyaja Priya Motamarri</p>
            <div className="flex items-center gap-4">
                <a href="mailto:thoyajapriyam4@gmail.com" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Mail size={16} /> thoyajapriyam4@gmail.com
                </a>
                <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                    <Linkedin size={16} /> LinkedIn
                </a>
            </div>
        </footer>
    )
}

export default Footer
