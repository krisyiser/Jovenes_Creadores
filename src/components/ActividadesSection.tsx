"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, Users, BookOpen, Mic, Video, ArrowRight, Sparkles } from 'lucide-react'

const activities = {
  próximas: [
    {
      id: 1,
      title: "Taller de Muralismo Social",
      type: "Taller",
      date: "2024-08-15",
      time: "10:00 - 16:00",
      location: "Centro Cultural Recoleta",
      participants: "25 personas",
      description: "Aprende técnicas de muralismo mientras exploramos narrativas de justicia social.",
      facilitator: "Ana García",
      price: "Gratuito",
      status: "Inscripciones abiertas"
    },
    {
      id: 2,
      title: "Foro: Arte y Derechos Humanos",
      type: "Foro",
      date: "2024-08-22",
      time: "18:00 - 21:00",
      location: "Auditorio Universidad Autónoma",
      participants: "150 personas",
      description: "Mesa redonda con artistas, activistas y defensores de derechos humanos.",
      facilitator: "Panel de expertos",
      price: "Donativo voluntario",
      status: "Inscripciones abiertas"
    },
    {
      id: 3,
      title: "Festival Microteatro Comunitario",
      type: "Evento",
      date: "2024-09-01",
      time: "17:00 - 22:00",
      location: "Plaza de las Artes",
      participants: "500 personas",
      description: "Obras cortas creadas por la comunidad sobre problemáticas locales.",
      facilitator: "Colectivo JCMX",
      price: "Entrada libre",
      status: "Próximamente"
    }
  ],
  pasadas: [
    {
      id: 4,
      title: "Laboratorio de Comunicación Popular",
      type: "Taller",
      date: "2024-07-10",
      time: "09:00 - 17:00",
      location: "Casa de la Cultura",
      participants: "30 personas",
      description: "Herramientas de comunicación alternativa para organizaciones sociales.",
      facilitator: "Sofia López",
      results: "15 proyectos comunicacionales iniciados"
    },
    {
      id: 5,
      title: "Conversatorio: Juventudes y Medio Ambiente",
      type: "Foro",
      date: "2024-06-28",
      time: "19:00 - 21:30",
      location: "Centro Ecológico",
      participants: "80 personas",
      description: "Diálogo intergeneracional sobre crisis climática y acción juvenil.",
      facilitator: "Miguel Torres",
      results: "Red de jóvenes ambientalistas creada"
    },
    {
      id: 6,
      title: "Expo: Jóvenes Creativos por el Cambio",
      type: "Evento",
      date: "2024-05-15",
      time: "11:00 - 20:00",
      location: "Galería Nacional",
      participants: "1200 personas",
      description: "Exposición colectiva de obras con temática de transformación social.",
      facilitator: "Equipo JCMX",
      results: "40 obras exhibidas, 5 becas otorgadas"
    }
  ]
}

const typeIcons = {
  "Taller": BookOpen,
  "Foro": Mic,
  "Evento": Video
}

const typeStyles = {
  "Taller": "text-jcmx-electric bg-jcmx-electric/10 border-jcmx-electric/20",
  "Foro": "text-jcmx-magenta bg-jcmx-magenta/10 border-jcmx-magenta/20",
  "Evento": "text-jcmx-light bg-jcmx-light/10 border-jcmx-light/20"
}

export default function ActividadesSection() {
  const [activeTab, setActiveTab] = useState<'próximas' | 'pasadas'>('próximas')

  return (
    <section id="actividades" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-jcmx-magenta font-black uppercase tracking-[0.4em] text-sm mb-4 block">Agenda</span>
          <h2 className="section-title mb-6">Nuestras <span className="text-glow text-jcmx-electric">Actividades</span></h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Espacios de encuentro, aprendizaje y construcción colectiva donde fortalecemos nuestras capacidades y tejemos redes de solidaridad.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: BookOpen, label: 'Talleres', value: '50+', color: 'text-jcmx-electric' },
            { icon: Mic, label: 'Foros', value: '20+', color: 'text-jcmx-magenta' },
            { icon: Video, label: 'Eventos', value: '15+', color: 'text-jcmx-light' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card p-10 text-center glass-card-hover group border-white/5">
                <stat.icon className={`w-16 h-16 ${stat.color} mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform`} />
                <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label} Realizados</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Premium Tabs */}
        <div className="flex justify-center mb-16">
          <div className="relative glass-card p-1.5 flex space-x-2 border-white/10 bg-white/5">
            {['próximas', 'pasadas'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as 'próximas' | 'pasadas')}
                className={`relative px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-500 z-10 ${activeTab === tab ? 'text-white' : 'text-white/40 hover:text-white/60'
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-jcmx-electric rounded-xl -z-10 shadow-[0_0_20px_rgba(0,123,206,0.3)]"
                    transition={{ type: "spring" as const, bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab === 'próximas' ? 'Próximas Actividades' : 'Actividades Pasadas'}
              </button>
            ))}
          </div>
        </div>

        {/* Activities List with AnimatePresence */}
        <div className="grid lg:grid-cols-2 gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === 'próximas' ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === 'próximas' ? 20 : -20 }}
              transition={{ duration: 0.5 }}
              className="contents"
            >
              {activities[activeTab].map((activity, i) => {
                const IconComponent = typeIcons[activity.type as keyof typeof typeIcons]
                const styles = typeStyles[activity.type as keyof typeof typeStyles]

                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card className="glass-card glass-card-hover group border-white/5 overflow-hidden flex flex-col md:flex-row p-0 h-full">
                      {/* Left: Icon/Type Area */}
                      <div className={`p-8 md:w-32 flex md:flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/5 ${styles.split(' ')[2]}`}>
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-0 md:mb-4 bg-white/5 ${styles.split(' ')[0]}`}>
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-widest md:rotate-180 md:[writing-mode:vertical-lr] ${styles.split(' ')[0]}`}>
                          {activity.type}
                        </span>
                      </div>

                      {/* Right: Content Area */}
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          {activeTab === 'próximas' && 'status' in activity && (
                            <span className="bg-green-500/10 text-green-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-green-500/20">
                              {activity.status}
                            </span>
                          )}
                          <div className="flex items-center space-x-1">
                            <Sparkles className="w-3 h-3 text-jcmx-light" />
                            <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Premium</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-black text-white mb-4 group-hover:text-jcmx-electric transition-colors leading-tight">
                          {activity.title}
                        </h3>

                        <p className="text-white/60 text-base mb-8 line-clamp-2">
                          {activity.description}
                        </p>

                        {/* Grid Details */}
                        <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8 mt-auto">
                          <div className="flex items-center text-xs text-white/40">
                            <Calendar className="w-4 h-4 mr-3 text-jcmx-electric" />
                            <span className="font-bold">{activity.date}</span>
                          </div>
                          <div className="flex items-center text-xs text-white/40">
                            <Clock className="w-4 h-4 mr-3 text-jcmx-magenta" />
                            <span className="font-bold">{activity.time}</span>
                          </div>
                          <div className="flex items-center text-xs text-white/40">
                            <MapPin className="w-4 h-4 mr-3 text-jcmx-light" />
                            <span className="font-bold truncate">{activity.location}</span>
                          </div>
                          <div className="flex items-center text-xs text-white/40">
                            <Users className="w-4 h-4 mr-3 text-jcmx-electric" />
                            <span className="font-bold">{activity.participants}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-white/5">
                          <span className="text-xs font-black text-jcmx-magenta uppercase tracking-[0.2em]">
                            Líder: {activity.facilitator}
                          </span>
                          {'price' in activity ? (
                            <span className="text-jcmx-electric font-black uppercase text-xs tracking-widest">{activity.price}</span>
                          ) : (
                            <span className="text-white/20 text-[10px] font-black uppercase tracking-widest">Finalizado</span>
                          )}
                        </div>

                        <div className="mt-8">
                          {activeTab === 'próximas' ? (
                            <Button className="w-full btn-premium h-14 group/btn">
                              INSCRIBIRSE AHORA
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          ) : (
                            <Button variant="outline" className="w-full btn-outline-premium h-14">
                              VER DOCUMENTACIÓN
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="glass-card p-16 border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-jcmx-electric/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8">¿Tienes una <span className="text-glow text-jcmx-magenta">Propuesta</span>?</h3>
            <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
              Buscamos nuevos líderes para facilitar talleres, foros y eventos que impulsen la transformación.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-premium h-16 px-12 text-sm uppercase tracking-widest">
                PROPOOLER ACTIVIDAD
              </Button>
              <Button variant="outline" className="btn-outline-premium h-16 px-12 text-sm uppercase tracking-widest">
                VER CALENDARIO ANUAL
              </Button>
            </div>
            {/* Decoration */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-jcmx-electric/5 blur-[100px] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
