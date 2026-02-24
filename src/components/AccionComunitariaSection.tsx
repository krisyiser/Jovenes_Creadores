"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart, Users, Target, MapPin, Calendar, Quote, Star, HandHeart, Clock, Sparkles, ArrowUpRight } from 'lucide-react'

const volunteerPrograms = [
  {
    id: 1,
    title: "Mentores Creativos",
    description: "Acompaña a jóvenes en el desarrollo de sus proyectos artísticos y creativos.",
    commitment: "4h/semana",
    duration: "6 meses",
    impact: "15 jóvenes mentoreados",
    requirements: ["Experiencia artística", "Compromiso social"],
    volunteers: 12,
    available: 8
  },
  {
    id: 2,
    title: "Eco-Facilitadores",
    description: "Lidera talleres de sustentabilidad en comunidades rurales marginadas.",
    commitment: "8h/mes",
    duration: "1 año",
    impact: "5 comunidades",
    requirements: ["Sensibilidad eco-social", "Habilidades pedagógicas"],
    volunteers: 8,
    available: 4
  },
  {
    id: 3,
    title: "Narradores Visuales",
    description: "Documenta el impacto a través de fotografía y video experimental.",
    commitment: "6h/semana",
    duration: "Flexible",
    impact: "50K personas",
    requirements: ["Manejo audiovisual", "Mirada crítica"],
    volunteers: 6,
    available: 6
  }
]

const testimonials = [
  {
    id: 1,
    name: "Elena Jiménez",
    role: "Coordinadora Territorial",
    community: "Colonia Esperanza, QRO",
    quote: "Nuestro barrio se transformó. Ya no solo tenemos un huerto, tenemos un espacio donde la comunidad se encuentra y ha recuperado la dignidad.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Roberto Castillo",
    role: "Mentor Artístico",
    community: "Guadalajara, JAL",
    quote: "Ver cómo los jóvenes desarrollan sus talentos y se convierten en agentes de cambio radical es la mayor recompensa posible.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
]

const impactStats = [
  { icon: Users, val: "2.5K", label: "FAMILIAS", col: "text-jcmx-electric" },
  { icon: MapPin, val: "25", label: "TERRITORIOS", col: "text-jcmx-magenta" },
  { icon: HandHeart, val: "150", label: "AGENTES", col: "text-jcmx-light" },
  { icon: Target, val: "85%", label: "VIDA ÚTIL", col: "text-jcmx-electric" }
]

export default function AccionComunitariaSection() {
  return (
    <section id="accion-comunitaria" className="py-32 relative overflow-hidden bg-[#050718]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-jcmx-electric font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Territorio & Impacto</span>
          <h2 className="section-title mb-8">Acción <span className="text-glow text-jcmx-electric">Comunitaria</span></h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed">
            Nuestro compromiso trasciende el lienzo: habitamos la realidad para transformarla desde adentro.
          </p>
        </motion.div>

        {/* Stats Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 inline-block p-4 rounded-2xl bg-white/5 group-hover:bg-jcmx-electric/20 transition-colors border border-white/5">
                <stat.icon className={`w-8 h-8 ${stat.col}`} />
              </div>
              <div className={`text-5xl font-black ${stat.col} italic tracking-tighter mb-2`}>{stat.val}</div>
              <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer Grid */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Únete al <span className="text-glow text-jcmx-magenta">Movimiento</span>
              </h3>
              <p className="text-white/40 font-bold">Buscamos mentes inquietas para co-crear un futuro radicalmente humano.</p>
            </div>
            <Button className="btn-premium px-10 h-16 uppercase tracking-widest text-[10px] font-black">
              Ver todas las plazas
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {volunteerPrograms.map((prog, i) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="glass-card p-10 h-full border-white/5 relative group overflow-hidden">
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    <Sparkles className="w-12 h-12 text-jcmx-electric" />
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-xl font-black text-white uppercase tracking-tight">{prog.title}</h4>
                    <span className="text-[9px] font-black px-3 py-1 bg-jcmx-magenta/20 text-jcmx-magenta rounded-full">{prog.available} LUGAR</span>
                  </div>

                  <p className="text-white/40 text-sm mb-10 leading-relaxed font-bold">{prog.description}</p>

                  <div className="space-y-4 mb-10 border-t border-white/5 pt-8">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/20 font-black uppercase tracking-widest">Compromiso</span>
                      <span className="text-white font-bold">{prog.commitment}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/20 font-black uppercase tracking-widest">Impacto</span>
                      <span className="text-jcmx-electric font-bold">{prog.impact}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-white/5 hover:bg-white hover:text-black border border-white/10 h-14 uppercase tracking-[0.2em] text-[10px] font-black transition-all duration-500">
                    Postular ahora
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Voices */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-8 italic">
              Voces del <span className="text-glow text-jcmx-electric">Cambio</span>
            </h3>
            <p className="text-white/40 text-xl leading-relaxed mb-12">
              La verdadera transformación se mide en historias, no solo en números. Escucha a quienes habitan nuestro ecosistema.
            </p>

            <div className="flex space-x-4">
              <Button variant="outline" className="btn-outline-premium h-14 px-8 text-[10px] font-black uppercase tracking-widest">LEER TODAS LAS CRÓNICAS</Button>
            </div>
          </motion.div>

          <div className="space-y-8">
            {testimonials.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <Card className="glass-card p-8 border-white/5 relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-jcmx-electric/20" />
                  <p className="text-lg text-white font-bold italic mb-8 relative z-10">"{test.quote}"</p>

                  <div className="flex items-center">
                    <img src={test.image} alt={test.name} className="w-14 h-14 rounded-2xl object-cover mr-6 border-2 border-white/5" />
                    <div>
                      <h4 className="text-sm font-black text-white uppercase tracking-widest mb-1">{test.name}</h4>
                      <p className="text-[10px] font-bold text-jcmx-magenta uppercase tracking-widest">{test.role}</p>
                      <span className="text-[9px] text-white/20 font-black">{test.community}</span>
                    </div>
                    <ArrowUpRight className="ml-auto w-6 h-6 text-white/10" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
