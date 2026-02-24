"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building,
  UserPlus,
  HandHeart,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  LinkedinIcon as LinkedIn,
  Sparkles,
  ChevronRight
} from 'lucide-react'

const contactTypes = [
  {
    id: 'general',
    title: 'Contacto General',
    icon: Mail,
    description: 'Consultas generales, prensa, medios de comunicación',
    color: 'jcmx-electric'
  },
  {
    id: 'instituciones',
    title: 'Instituciones y Alianzas',
    icon: Building,
    description: 'Colaboraciones estratégicas, convenios, patrocinios',
    color: 'jcmx-magenta'
  },
  {
    id: 'nuevos-miembros',
    title: 'Nuevos Integrantes',
    icon: UserPlus,
    description: 'Únete al colectivo como artista, creador o colaborador',
    color: 'jcmx-light'
  },
  {
    id: 'voluntarios',
    title: 'Voluntariado',
    icon: HandHeart,
    description: 'Programas de voluntariado y acción comunitaria',
    color: 'jcmx-electric'
  }
]

const teamContacts = [
  {
    name: 'Ana García',
    role: 'Directora Artística',
    email: 'ana@jovenescreadoresmc.org',
    areas: ['Proyectos artísticos', 'Mentorías']
  },
  {
    name: 'Carlos Mendoza',
    role: 'Coordinador de Proyectos',
    email: 'carlos@jovenescreadoresmc.org',
    areas: ['Gestión', 'Alianzas']
  },
  {
    name: 'Sofia López',
    role: 'Comunicación',
    email: 'sofia@jovenescreadoresmc.org',
    areas: ['Redes sociales', 'Prensa']
  }
]

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: '#', followers: '25K', color: 'hover:text-pink-500' },
  { name: 'Facebook', icon: Facebook, url: '#', followers: '18K', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: Twitter, url: '#', followers: '12K', color: 'hover:text-sky-500' },
  { name: 'YouTube', icon: Youtube, url: '#', followers: '8K', color: 'hover:text-red-500' }
]

export default function ContactoSection() {
  const [activeForm, setActiveForm] = useState('general')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    organization: '',
    phone: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
  }

  return (
    <section id="contacto" className="py-32 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-jcmx-electric/30 to-transparent" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-jcmx-magenta/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-jcmx-electric/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-jcmx-electric font-black uppercase tracking-[0.4em] text-sm mb-4 block">Conexión</span>
          <h2 className="section-title mb-8">Contacto & <span className="text-glow text-jcmx-magenta">Colaboración</span></h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed">
            Abramos canales de diálogo para co-crear un futuro donde el arte sea el motor del cambio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Side Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Quick Contact Tile */}
            <Card className="glass-card p-10 border-white/10 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-jcmx-electric/5 rounded-full group-hover:scale-150 transition-transform duration-1000" />
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest flex items-center">
                <Sparkles className="w-5 h-5 mr-3 text-jcmx-electric" />
                Información
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'hola@jovenescreadores.mx', color: 'text-jcmx-electric' },
                  { icon: Phone, label: 'Teléfono', value: '+52 55 1234 5678', color: 'text-jcmx-magenta' },
                  { icon: MapPin, label: 'Oficinas', value: 'Centro Recoleta, CDMX', color: 'text-jcmx-light' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 ${item.color}`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 mb-1">{item.label}</div>
                      <div className="text-sm font-bold text-white/80">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Matrix */}
            <Card className="glass-card p-10 border-white/10">
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest flex items-center">
                <Building className="w-5 h-5 mr-3 text-jcmx-magenta" />
                Ecosistema
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    className={`glass-card p-5 border-white/5 bg-white/2 hover:bg-white/10 transition-all duration-300 flex flex-col items-center group`}
                  >
                    <social.icon className={`w-8 h-8 mb-3 text-white/40 transition-colors ${social.color}`} />
                    <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">{social.name}</span>
                    <span className="text-xs font-black text-white mt-1">{social.followers}</span>
                  </a>
                ))}
              </div>
            </Card>

            {/* Direct Lines */}
            <Card className="glass-card p-10 border-white/10 bg-jcmx-magenta/5">
              <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest">Enlace Directo</h3>
              <div className="space-y-6">
                {teamContacts.map((contact, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-black text-white group-hover:text-jcmx-magenta transition-colors">{contact.name}</span>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-2">{contact.role}</div>
                    <div className="flex flex-wrap gap-2">
                      {contact.areas.map((area, ai) => (
                        <span key={ai} className="text-[9px] bg-white/5 text-white/20 px-2 py-0.5 rounded border border-white/5 uppercase font-black">{area}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Form Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <Card className="glass-card p-10 lg:p-16 border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-jcmx-electric" />

              <div className="max-w-3xl">
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Inicia la <span className="text-glow text-jcmx-electric">Conversación</span></h3>
                <p className="text-white/40 text-lg mb-12">Cuéntanos tu visión. Estamos listos para escuchar nuevas propuestas.</p>

                {/* Contact Type Selector */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                  {contactTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setActiveForm(type.id)}
                      className={`relative p-6 rounded-2xl border transition-all duration-500 text-left overflow-hidden group ${activeForm === type.id
                          ? `border-jcmx-electric bg-jcmx-electric/10 ring-4 ring-jcmx-electric/5`
                          : 'border-white/5 bg-white/2 hover:border-white/20'
                        }`}
                    >
                      <type.icon className={`w-6 h-6 mb-4 transition-colors ${activeForm === type.id ? `text-jcmx-electric` : 'text-white/20'
                        }`} />
                      <h4 className={`text-[10px] font-black uppercase tracking-widest ${activeForm === type.id ? `text-white` : 'text-white/40'
                        }`}>
                        {type.title}
                      </h4>
                      {activeForm === type.id && (
                        <motion.div
                          layoutId="typeRing"
                          className="absolute bottom-0 left-0 h-1 bg-jcmx-electric w-full"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-sm font-bold text-white focus:outline-none focus:border-jcmx-electric focus:ring-4 focus:ring-jcmx-electric/5 transition-all"
                        placeholder="ALEX CREATIVO"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Email Corporativo / Personal</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-sm font-bold text-white focus:outline-none focus:border-jcmx-electric focus:ring-4 focus:ring-jcmx-electric/5 transition-all"
                        placeholder="ALEX@VISION.MX"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Asunto de la Consulta</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full h-16 bg-white/5 border border-white/5 rounded-2xl px-6 text-sm font-bold text-white focus:outline-none focus:border-jcmx-electric focus:ring-4 focus:ring-jcmx-electric/5 transition-all"
                      placeholder="PROPUESTA PARA PROYECTO CULTURAL..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-4">Tu Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border border-white/5 rounded-2xl p-6 text-sm font-bold text-white focus:outline-none focus:border-jcmx-electric focus:ring-4 focus:ring-jcmx-electric/5 transition-all resize-none min-h-[200px]"
                      placeholder="DESCRIBE TU VISIÓN EN DETALLE..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] max-w-xs leading-relaxed">
                      * Al enviar confirmas que estás listo para cambiar las reglas del juego. Respuesta en 48hs.
                    </p>
                    <Button type="submit" className="w-full sm:w-auto btn-premium h-16 px-12 group/btn">
                      <Send className="w-5 h-5 mr-3 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      ENVIAR VISIÓN
                    </Button>
                  </div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
