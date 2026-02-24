import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHero from '@/components/SectionHero'
import QuienesSomosSection from '@/components/QuienesSomosSection'
import ModeloAccionSection from '@/components/ModeloAccionSection'

export default function QuienesSomosPage() {
    return (
        <main className="min-h-screen bg-[#050718]">
            <Navbar />
            <SectionHero
                tag="Nuestra Esencia"
                title="Quiénes Somos"
                subtitle="Un colectivo de mentes transgresoras unidas por el deseo de hackear la realidad a través del arte y la rebeldía cultural."
            />
            <QuienesSomosSection />
            <div className="relative z-10">
                <ModeloAccionSection />
            </div>
            <Footer />
        </main>
    )
}
