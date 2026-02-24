import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHero from '@/components/SectionHero'
import NoticiasSection from '@/components/NoticiasSection'

export default function NoticiasPage() {
    return (
        <main className="min-h-screen bg-[#050718]">
            <Navbar />
            <SectionHero
                tag="Bitácora Crítica"
                title="Noticias"
                subtitle="El pulso de nuestra red creativa. Logros, desafíos y la crónica de nuestra transformación."
                gradient="from-jcmx-light to-jcmx-electric"
            />
            <div className="relative z-10">
                <NoticiasSection />
            </div>
            <Footer />
        </main>
    )
}
