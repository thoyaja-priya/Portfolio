import Header from './components/Header'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Experience from './components/Experience'
import TechnicalSkills from './components/TechnicalSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-blue-500/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-12 flex flex-col gap-24">
          <Hero />
          <Summary />
          <Experience />
          <TechnicalSkills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
