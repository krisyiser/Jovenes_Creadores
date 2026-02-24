"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, Calendar, MapPin, Award, Rocket } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Murales de Memoria",
    category: "Arte y Derechos Humanos",
    description: "Intervención artística en espacios públicos para visibilizar historias de víctimas de violencia y promover la cultura de la memoria.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    location: "Ciudad de México, Guadalajara",
    duration: "6 meses",
    participants: "120 personas",
    results: [
      "5 murales comunitarios creados",
      "3 talleres de arte memoria",
      "Cobertura en 15 medios locales"
    ],
    status: "Completado",
    year: "2023"
  },
  {
    id: 2,
    title: "EcoArte Circular",
    category: "Medio Ambiente y Cultura",
    description: "Talleres de creación artística usando materiales reciclados y residuos urbanos para concientizar sobre el consumo responsable.",
    image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=800",
    location: "Puebla, Oaxaca",
    duration: "4 meses",
    participants: "85 jóvenes",
    results: [
      "200 piezas artísticas creadas",
      "2 toneladas de residuos reutilizados",
      "Exhibición en 3 galerías"
    ],
    status: "Completado",
    year: "2023"
  },
  {
    id: 3,
    title: "Voces Comunitarias",
    category: "Comunicación y Desarrollo",
    description: "Podcast comunitario donde jóvenes de colonias populares narran sus historias y propuestas de transformación social.",
    image: "https://images.unsplash.com/photo-1478737270239-2fccd2cdea04?auto=format&fit=crop&q=80&w=800",
    location: "Nacional",
    duration: "En curso",
    participants: "40 podcasters",
    results: [
      "25 episodios publicados",
      "10,000 reproducciones mensuales",
      "Red de 15 estaciones comunitarias"
    ],
    status: "Activo",
    year: "2024"
  },
  {
    id: 4,
    title: "Festival Juventudes",
    category: "Arte y Cultura",
    description: "Festival anual que celebra la diversidad de expresiones artísticas juveniles con enfoque en justicia social y derechos humanos.",
    image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800",
    location: "Monterrey",
    duration: "3 días",
    participants: "2,500 asistentes",
    results: [
      "40 artistas participantes",
      "15 talleres simultáneos",
      "Recaudación para 5 ONGs locales"
    ],
    status: "Anual",
    year: "2024"
  },
  {
    id: 5,
    title: "Huertos Urbanos Creativos",
    category: "Medio Ambiente",
    description: "Creación de espacios verdes comunitarios combinando agricultura urbana con instalaciones artísticas sustentables.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
    location: "Querétaro, León",
    duration: "8 meses",
    participants: "150 familias",
    results: [
      "12 huertos comunitarios",
      "500 kg de alimentos producidos",
      "15 esculturas verdes instaladas"
    ],
    status: "Completado",
    year: "2023"
  },
  {
    id: 6,
    title: "Narrativas Migrantes",
    category: "Derechos Humanos",
    description: "Proyecto transmedia que documenta y visibiliza las historias de jóvenes migrantes a través del arte digital y performances.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800",
    location: "Frontera Norte",
    duration: "En desarrollo",
    participants: "30 migrantes",
    results: [
      "Documentales en producción",
      "10 performances realizados",
      "Plataforma digital en desarrollo"
    ],
    status: "En desarrollo",
    year: "2024"
  }
]

const statusColors = {
  "Completado": "bg-green-500/20 text-green-400 border-green-500/30",
  "Activo": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "En desarrollo": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  "Anual": "bg-purple-500/20 text-purple-400 border-purple-500/30"
}

export default function ProyectosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100
      }
    }
  }

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-jcmx-electric/20 to-transparent -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-jcmx-electric font-black uppercase tracking-[0.4em] text-sm mb-4 block">Portafolio</span>
          <h2 className="section-title mb-6">Proyectos que <span className="text-glow text-jcmx-magenta">Inspiran</span></h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Cada intervención es un testimonio de nuestra pasión por el arte y el compromiso inquebrantable con la justicia social.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            { label: 'Proyectos Realizados', value: '100+', color: 'text-jcmx-electric' },
            { label: 'Estados Impactados', value: '15', color: 'text-jcmx-magenta' },
            { label: 'Beneficiarios Directos', value: '5,000+', color: 'text-jcmx-light' },
            { label: 'Alianzas Estratégicas', value: '50+', color: 'text-jcmx-electric' }
          ].map((stat, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="glass-card p-8 text-center group border-white/5 hover:border-white/20 transition-all duration-500">
                <div className={`text-4xl font-black ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="glass-card overflow-hidden h-full flex flex-col group border-white/5 hover:border-jcmx-electric/30 transition-all duration-700">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F2D] via-[#0B0F2D]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute bottom-4 left-6">
                    <span className="text-white/40 text-[10px] font-black tracking-[0.2em]">{project.year}</span>
                    <h3 className="text-2xl font-black text-white group-hover:text-jcmx-electric transition-colors">{project.title}</h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-[2px] bg-jcmx-magenta" />
                    <span className="text-xs font-black text-jcmx-magenta uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-white/60 text-base mb-8 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Meta */}
                  <div className="grid grid-cols-1 gap-3 mb-8 border-y border-white/5 py-6">
                    <div className="flex items-center text-xs text-white/50">
                      <MapPin className="w-4 h-4 mr-3 text-jcmx-electric" />
                      <span className="font-medium">{project.location}</span>
                    </div>
                    <div className="flex items-center text-xs text-white/50">
                      <Calendar className="w-4 h-4 mr-3 text-jcmx-magenta" />
                      <span className="font-medium">{project.duration}</span>
                    </div>
                    <div className="flex items-center text-xs text-white/50">
                      <Users className="w-4 h-4 mr-3 text-jcmx-light" />
                      <span className="font-medium">{project.participants}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-8">
                    <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] mb-4 flex items-center">
                      <Rocket className="w-3 h-3 mr-2 text-jcmx-electric" />
                      Logros Clave
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-sm text-white/70 flex items-start group/item">
                          <span className="w-1.5 h-1.5 bg-jcmx-magenta rounded-full mt-1.5 mr-3 group-hover/item:scale-150 transition-transform"></span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Button */}
                  <Button
                    className="w-full btn-outline-premium h-12 text-xs uppercase tracking-[0.2em] group/btn"
                  >
                    Detalles del Impacto
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:rotate-12 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="glass-card p-12 relative overflow-hidden text-center max-w-4xl mx-auto border-white/10">
            <div className="absolute top-0 left-0 w-2 h-full bg-jcmx-electric" />
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
              ¿Tienes una <span className="text-jcmx-electric text-glow">Visión</span>?
            </h3>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
              Buscamos mentes inquietas y corazones valientes para co-crear el próximo gran proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-premium h-14 px-10">
                PROPOOLER IDEA
              </Button>
              <Button className="btn-outline-premium h-14 px-10">
                SER PATROCINADOR
              </Button>
            </div>

            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-jcmx-magenta/10 blur-[60px] rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
