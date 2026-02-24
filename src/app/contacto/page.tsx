import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHero from '@/components/SectionHero'
import ContactoSection from '@/components/ContactoSection'

export default function ContactoPage() {
    return (
        <main className="min-h-screen bg-[#050718]">
            <Navbar />
            <SectionHero
                tag="Canales Abiertos"
                title="Contacto"
                subtitle="¿Tienes una idea? ¿Quieres colaborar? Estamos a un mensaje de distancia. Hagamos que suceda."
                gradient="from-jcmx-magenta to-jcmx-light"
            />
            <div className="relative z-10">
                <ContactoSection />
            </div>
            <Footer />
        </main>
    )
}
