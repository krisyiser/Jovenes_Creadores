import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHero from '@/components/SectionHero'
import ProyectosSection from '@/components/ProyectosSection'
import AccionComunitariaSection from '@/components/AccionComunitariaSection'

export default function ProyectosPage() {
    return (
        <main className="min-h-screen bg-[#050718]">
            <Navbar />
            <SectionHero
                tag="Nuestras Creaciones"
                title="Proyectos Destacados"
                subtitle="Iniciativas que dejan huella, transformando comunidades y construyendo un futuro más brillante."
                gradient="from-jcmx-magenta to-jcmx-electric"
            />
            <div className="relative z-10">
                <ProyectosSection />
            </div>
            <AccionComunitariaSection />
            <Footer />
        </main>
    )
}
