import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHero from '@/components/SectionHero'
import GaleriaSection from '@/components/GaleriaSection'

export default function GaleriaPage() {
    return (
        <main className="min-h-screen bg-[#050718]">
            <Navbar />
            <SectionHero
                tag="Memoria Visual"
                title="Galería"
                subtitle="El registro estético de nuestra resistencia. Un vistazo visual a nuestras intervenciones y la fuerza de nuestra gente."
            />
            <div className="relative z-10">
                <GaleriaSection />
            </div>
            <Footer />
        </main>
    )
}
