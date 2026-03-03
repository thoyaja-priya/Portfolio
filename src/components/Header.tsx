const Header = () => {
    return (
        <header className="py-6 flex justify-between items-center sticky top-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Thoyaja Priya Motamarri
            </div>
            <nav className="flex gap-6 text-sm font-medium text-slate-300">
                <a href="#summary" className="hover:text-blue-400 transition-colors">Summary</a>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </nav>
        </header>
    )
}

export default Header
