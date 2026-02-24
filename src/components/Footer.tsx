import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, LinkedinIcon as LinkedIn, Sparkles, Send } from 'lucide-react'
import Link from 'next/link'

const footerSections = [
  {
    title: "Navegación",
    links: [
      { name: "Inicio", href: "/" },
      { name: "¿Quiénes Somos?", href: "/quienes-somos" },
      { name: "Proyectos", href: "/proyectos" },
      { name: "Actividades", href: "/actividades" },
      { name: "Noticias", href: "/noticias" }
    ]
  },
  {
    title: "Ecosistema",
    links: [
      { name: "Galería", href: "/galeria" },
      { name: "Acción Comunitaria", href: "/proyectos#accion" },
      { name: "Contacto", href: "/contacto" },
      { name: "Impacto", href: "/proyectos#impacto" }
    ]
  },
  {
    title: "Colabora",
    links: [
      { name: "Ser Voluntario", href: "/contacto" },
      { name: "Proponer Proyecto", href: "/contacto" },
      { name: "Alianzas", href: "/contacto" },
      { name: "Donaciones", href: "/contacto" }
    ]
  }
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: '#', color: 'hover:text-pink-400' },
  { name: 'Facebook', icon: Facebook, url: '#', color: 'hover:text-blue-400' },
  { name: 'Twitter', icon: Twitter, url: '#', color: 'hover:text-sky-400' },
  { name: 'YouTube', icon: Youtube, url: '#', color: 'hover:text-red-400' },
  { name: 'LinkedIn', icon: LinkedIn, url: '#', color: 'hover:text-blue-500' }
]

export default function Footer() {
  return (
    <footer className="bg-[#050718] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-jcmx-electric/5 blur-[120px] rounded-full -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="inline-block mb-8 group">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                Jóvenes <span className="text-glow text-jcmx-electric">Creadores</span>
                <span className="block text-sm text-white/40 font-bold tracking-[0.4em] mt-2 group-hover:text-jcmx-magenta transition-colors">RED DE ARTISTAS</span>
              </h3>
            </Link>
            <p className="text-white/40 text-base leading-relaxed mb-10 max-w-sm">
              Co-creando futuros a través del arte transgresor y la acción territorial. Una red de impacto que no conoce fronteras.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-sm font-bold text-white/60 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-jcmx-electric/20 transition-colors">
                  <Mail className="w-4 h-4 text-jcmx-electric" />
                </div>
                hola@jovenescreadores.mx
              </div>
              <div className="flex items-center text-sm font-bold text-white/60 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-jcmx-magenta/20 transition-colors">
                  <Phone className="w-4 h-4 text-jcmx-magenta" />
                </div>
                +52 55 1234 5678
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section, i) => (
            <div key={i} className="col-span-1 lg:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 mb-10">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link, li) => (
                  <li key={li}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-jcmx-electric font-bold text-sm transition-all duration-300 flex items-center group"
                    >
                      <span className="w-0 group-hover:w-4 h-px bg-jcmx-electric mr-0 group-hover:mr-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Bar */}
        <div className="mt-12 py-12 border-t border-white/5">
          <div className="glass-card p-6 sm:p-10 lg:p-14 border-white/5 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
            <div className="text-center lg:text-left">
              <h4 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter flex items-center justify-center lg:justify-start">
                <Sparkles className="w-6 h-6 mr-3 text-jcmx-electric" />
                Bitácora <span className="text-glow text-jcmx-electric ml-2">Crítica</span>
              </h4>
              <p className="text-white/40 text-sm font-bold opacity-80 uppercase tracking-widest">Suscríbete para recibir reflexiones sobre arte y territorio.</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full lg:w-auto max-w-md gap-3">
              <input
                type="email"
                placeholder="TU@EMAIL.COM"
                className="flex-1 px-6 h-14 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white placeholder-white/10 focus:outline-none focus:border-jcmx-electric transition-all"
              />
              <button className="h-12 sm:h-14 px-6 sm:px-8 bg-jcmx-electric hover:bg-white text-white hover:text-black rounded-xl font-black text-[10px] uppercase tracking-widest transition-all duration-500 flex items-center justify-center flex-shrink-0">
                <Send className="w-4 h-4 mr-2" />
                UNIRSE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center space-x-3 text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">
              <span>© 2024 JCMX</span>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="flex items-center">
                HECHO CON <Heart className="w-3 h-3 text-jcmx-magenta mx-2 shadow-[0_0_10px_rgba(198,57,124,0.5)]" /> PARA EL CAMBIO
              </div>
            </div>

            <div className="flex items-center space-x-8">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className={`text-white/20 ${social.color} transition-all duration-300 hover:scale-125`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex space-x-8 text-[10px] font-black text-white/20 uppercase tracking-widest">
              <Link href="#" className="hover:text-jcmx-electric transition-colors">Privacidad</Link>
              <Link href="#" className="hover:text-jcmx-electric transition-colors">Términos</Link>
              <Link href="#" className="hover:text-jcmx-electric transition-colors">Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
