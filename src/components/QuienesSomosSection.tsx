"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Heart, Target, Eye, Star, Users2 } from 'lucide-react'

const teamMembers = [
  {
    name: "Ana García",
    role: "Directora Artística",
    specialty: "Artes Visuales",
    image: "https://picsum.photos/300/300?random=1"
  },
  {
    name: "Carlos Mendoza",
    role: "Coordinador de Proyectos",
    specialty: "Desarrollo Comunitario",
    image: "https://picsum.photos/300/300?random=2"
  },
  {
    name: "Sofia López",
    role: "Responsable de Comunicación",
    specialty: "Periodismo Cultural",
    image: "https://picsum.photos/300/300?random=3"
  },
  {
    name: "Miguel Torres",
    role: "Coordinador Ambiental",
    specialty: "Sustentabilidad",
    image: "https://picsum.photos/300/300?random=4"
  }
]

const values = [
  {
    icon: Heart,
    title: "Creatividad",
    description: "Fomentamos la expresión artística como motor de transformación social"
  },
  {
    icon: Users2,
    title: "Colaboración",
    description: "Trabajamos en red, construyendo puentes entre artistas y comunidades"
  },
  {
    icon: Target,
    title: "Impacto Social",
    description: "Cada proyecto busca generar un cambio positivo en la sociedad"
  },
  {
    icon: Star,
    title: "Innovación",
    description: "Exploramos nuevas formas de hacer arte comprometido y relevante"
  }
]

export default function QuienesSomosSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="quienes-somos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-jcmx-electric/5 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-jcmx-magenta font-black uppercase tracking-[0.3em] text-sm mb-4 block">Identidad</span>
          <h2 className="section-title">
            ¿Quiénes <span className="text-jcmx-electric">Somos</span>?
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-jcmx-electric to-jcmx-magenta rounded-full"></div>
        </motion.div>

        {/* History / Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-black text-white mb-8 leading-tight">
              Construyendo un futuro a través de la <span className="text-glow text-jcmx-light">expresión colectiva</span>.
            </h3>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Fundada en 2019, <strong className="text-white">Jóvenes Creadores MX</strong> nació
                como un faro de esperanza y creatividad en un mundo en constante cambio.
              </p>
              <p>
                Lo que comenzó como un pequeño colectivo de artistas apasionados, hoy se ha convertido en una
                <span className="text-jcmx-electric font-bold"> red nacional</span> que empodera a las nuevas
                generaciones para que su voz sea escuchada a través del arte.
              </p>
              <p className="border-l-4 border-jcmx-magenta pl-6 italic bg-jcmx-magenta/5 py-4 rounded-r-xl">
                "Creemos que el arte no solo refleja la realidad, sino que tiene el poder de reescribirla."
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10 glass-card p-4 aspect-square flex items-center justify-center group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-jcmx-electric/20 to-jcmx-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <Users2 className="w-40 h-40 text-jcmx-light group-hover:scale-110 transition-transform duration-700" />

              {/* Floating elements inside the box */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 w-8 h-8 rounded-full bg-jcmx-magenta/30 blur-xl"
              />
            </motion.div>

            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-jcmx-electric/10 blur-[100px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-jcmx-magenta/10 blur-[100px] -z-10" />
          </div>
        </div>

        {/* Mission & Vision Bento Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card glass-card-hover p-10 h-full border-l-8 border-l-jcmx-electric">
              <div className="w-16 h-16 bg-jcmx-electric/20 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-jcmx-electric" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Misión</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Promover el arte y la cultura como herramientas de transformación social,
                conectando a jóvenes creadores con sus comunidades para generar impacto
                positivo en derechos humanos, medio ambiente y desarrollo sustentable.
              </p>
            </Card>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="glass-card glass-card-hover p-10 h-full border-l-8 border-l-jcmx-magenta">
              <div className="w-16 h-16 bg-jcmx-magenta/20 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-jcmx-magenta" />
              </div>
              <h3 className="text-3xl font-black text-white mb-6">Visión</h3>
              <p className="text-white/70 text-lg leading-relaxed">
                Ser la red de artistas jóvenes más influyente de México, reconocida por
                crear puentes entre el arte y la acción social, inspirando a nuevas
                generaciones de creadores comprometidos con su entorno.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-black text-white">Nuestros Valores</h3>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass-card glass-card-hover p-8 text-center h-full group hover:bg-white/10">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-jcmx-electric/20 transition-colors">
                    <value.icon className="w-10 h-10 text-jcmx-light group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest group-hover:text-jcmx-electric transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team Section */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-black text-white">Liderazgo Creativo</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="glass-card overflow-hidden border-0 h-full group-hover:ring-2 ring-jcmx-electric transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-jcmx-dark via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-jcmx-magenta text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-1 shadow-lg">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-black text-white mb-1 group-hover:text-jcmx-electric transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-jcmx-light text-sm font-bold uppercase tracking-widest">
                      {member.specialty}
                    </p>
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
