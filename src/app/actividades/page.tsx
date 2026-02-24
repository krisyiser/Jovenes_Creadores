import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHero from '@/components/SectionHero'
import ActividadesSection from '@/components/ActividadesSection'

export default function ActividadesPage() {
    return (
        <main className="min-h-screen bg-[#050718]">
            <Navbar />
            <SectionHero
                tag="Calendario de Acción"
                title="Actividades"
                subtitle="Talleres, intervenciones y eventos disruptivos diseñados para despertar la rebeldía creativa en cada rincón."
            />
            <div className="relative z-10">
                <ActividadesSection />
            </div>
            <Footer />
        </main>
    )
}
