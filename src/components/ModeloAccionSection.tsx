"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Palette, Scale, Leaf, Megaphone, Home, ArrowRight, Sparkles, Zap, ShieldCheck, Waves } from 'lucide-react'

const areas = [
  {
    icon: Palette,
    title: "Arte & Cultura",
    description: "Transgresión estética como motor de cambio social.",
    color: "jcmx-electric",
    activities: ["Exposiciones colectivas", "Talleres artísticos", "Performances sociales"]
  },
  {
    icon: Scale,
    title: "Derechos Humanos",
    description: "Defensa jurídica y cultural de la dignidad humana.",
    color: "jcmx-magenta",
    activities: ["Campañas de concientización", "Arte de protesta", "Documentales"]
  },
  {
    icon: Leaf,
    title: "Ecosistemas",
    description: "Sustentabilidad radical y arte ecológico circular.",
    color: "jcmx-light",
    activities: ["Materiales reciclados", "Murales eco", "Talleres eco"]
  },
  {
    icon: Megaphone,
    title: "Comunicación",
    description: "Narrativas alternativas contra el discurso único.",
    color: "jcmx-electric",
    activities: ["Podcast", "Revista digital", "Redes sociales"]
  }
]

const methodologySteps = [
  {
    id: "01",
    title: "Inmersión Territorial",
    description: "Diagnóstico profundo conviviendo con la realidad local.",
    icon: Waves,
    color: "jcmx-electric"
  },
  {
    id: "02",
    title: "Co-creación Radical",
    description: "Diseño colectivo donde el artista es un facilitador.",
    icon: Zap,
    color: "jcmx-magenta"
  },
  {
    id: "03",
    title: "Legado & Autonomía",
    description: "Transferencia de capacidades para la autogestión.",
    icon: ShieldCheck,
    color: "jcmx-light"
  }
]

export default function ModeloAccionSection() {
  return (
    <section id="modelo-accion" className="py-32 relative overflow-hidden bg-[#050718]">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-jcmx-electric font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Metodología</span>
          <h2 className="section-title mb-8">Nuestras áreas de <span className="text-glow text-jcmx-magenta">Impacto</span></h2>
          <p className="text-white/40 text-xl max-w-2xl mx-auto leading-relaxed">
            Un sistema interconectado diseñado para la transformación social integral.
          </p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card p-10 h-full border-white/5 group hover:border-jcmx-electric/30 transition-all duration-500">
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500`}>
                  <area.icon className={`w-8 h-8 text-${area.color}`} />
                </div>
                <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{area.title}</h3>
                <p className="text-white/40 text-sm mb-8 leading-relaxed font-bold">{area.description}</p>
                <div className="space-y-3">
                  {area.activities.map((act, ai) => (
                    <div key={ai} className="flex items-center text-[10px] uppercase font-black tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-jcmx-electric mr-3 shadow-[0_0_8px_rgba(0,123,206,0.6)]" />
                      {act}
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Action Model Flow */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
              Arquitectura de la <span className="text-glow text-jcmx-electric">Acción</span>
            </h3>
            <p className="text-white/40 text-lg leading-relaxed max-w-lg mb-12">
              No intervenimos, colaboramos. Nuestra metodología asegura que cada proyecto tenga raíces profundas en el territorio.
            </p>

            <div className="space-y-6">
              {methodologySteps.map((step, i) => (
                <div key={i} className="flex items-center group cursor-pointer">
                  <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-jcmx-electric transition-colors duration-500">
                    <span className="text-2xl font-black text-white/10 group-hover:text-jcmx-electric transition-colors">{step.id}</span>
                  </div>
                  <div className="ml-8 border-b border-white/5 pb-6 flex-1 group-hover:border-white/20 transition-all">
                    <h4 className="text-lg font-black text-white uppercase tracking-widest mb-1 group-hover:text-jcmx-electric transition-colors">{step.title}</h4>
                    <p className="text-sm text-white/30 font-bold">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Visual Impact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-12 bg-jcmx-electric/5 border-white/10">
              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: 'Estados', val: '08', col: 'text-jcmx-electric' },
                  { label: 'Proyectos', val: '25+', col: 'text-jcmx-magenta' },
                  { label: 'Integrantes', val: '500+', col: 'text-jcmx-light' },
                  { label: 'Comunidades', val: '15', col: 'text-jcmx-electric' }
                ].map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 block mb-2">{stat.label}</span>
                    <span className={`text-4xl lg:text-6xl font-black italic tracking-tighter ${stat.col}`}>{stat.val}</span>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-white/40 text-sm font-bold leading-relaxed italic text-center">
                  "El arte no es un espejo para reflejar el mundo, sino un martillo con el que darle forma."
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
