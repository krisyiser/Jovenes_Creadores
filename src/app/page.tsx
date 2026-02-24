import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import QuienesSomosSection from '@/components/QuienesSomosSection'
import ProyectosSection from '@/components/ProyectosSection'
import ActividadesSection from '@/components/ActividadesSection'
import NoticiasSection from '@/components/NoticiasSection'
import ContactoSection from '@/components/ContactoSection'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050718] overflow-x-hidden selection:bg-jcmx-electric/30">
      <Navbar />

      {/* Hero: The Portal */}
      <HeroSection />

      {/* Narrative Flow */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0B0F2D] to-transparent z-10" />

        {/* Origin */}
        <div className="relative pt-20">
          <QuienesSomosSection />
          <div className="container mx-auto px-4 pb-32 -mt-20 relative z-10 flex justify-center">
            <Link href="/quienes-somos">
              <Button size="lg" className="btn-premium px-12 h-16 uppercase tracking-widest text-[10px] group">
                Nuestra Manifiesto
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Impact Divider */}
        <div className="h-64 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-jcmx-electric/30 to-transparent" />
          <div className="absolute w-2 h-2 rounded-full bg-jcmx-electric blur-[4px] animate-pulse" />
        </div>

        {/* Creations */}
        <div className="relative">
          <ProyectosSection />
          <div className="container mx-auto px-4 pb-32 relative z-20 flex justify-center">
            <Link href="/proyectos">
              <Button size="lg" className="btn-outline-premium group h-16 px-12 text-[10px] uppercase tracking-widest">
                VER CATÁLOGO COMPLETO
                <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Movement */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-jcmx-electric/5 skew-y-3 -z-10" />
          <ActividadesSection />
          <div className="container mx-auto px-4 flex justify-center mt-10 pb-20">
            <Link href="/actividades">
              <Button size="lg" className="btn-premium h-16 px-12 text-[10px] uppercase tracking-widest">
                CALENDARIO DE ACCIÓN
              </Button>
            </Link>
          </div>
        </div>

        {/* Pulse */}
        <div className="bg-gradient-to-b from-transparent via-jcmx-magenta/5 to-transparent">
          <NoticiasSection />
        </div>

        {/* Confluence */}
        <div className="relative py-20">
          <ContactoSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
