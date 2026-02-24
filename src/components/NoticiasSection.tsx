"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, Tag, ArrowRight, MessageCircle, Heart, Share2, Sparkles, Mail } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: "El Arte Como Resistencia: Reflexiones Desde la Trinchera Cultural",
    category: "Reflexión",
    author: "Ana García",
    authorRole: "Directora Artística",
    date: "2024-07-20",
    readTime: "8 min",
    excerpt: "En un mundo donde las injusticias sociales parecen multiplicarse, el arte emerge como una forma de resistencia pacífica pero poderosa. Desde nuestra experiencia en JCMX, hemos sido testigos de cómo la creatividad puede transformar no solo espacios, sino también corazones y mentes.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    likes: 45,
    comments: 12,
    featured: true
  },
  {
    id: 2,
    title: "Juventudes Climáticas: Cuando el Arte Abraza la Sustentabilidad",
    category: "Medio Ambiente",
    author: "Miguel Torres",
    authorRole: "Coordinador Ambiental",
    date: "2024-07-15",
    readTime: "6 min",
    excerpt: "La crisis climática exige respuestas creativas. Nuestros proyectos de EcoArte demuestran que es posible combinar la expresión artística con la conciencia ambiental, creando obras que no solo son hermosas, sino también responsables con el planeta.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
    likes: 38,
    comments: 8,
    featured: false
  },
  {
    id: 3,
    title: "Comunicación Popular en la Era Digital: Nuevas Narrativas",
    category: "Comunicación",
    author: "Sofia López",
    authorRole: "Responsable de Comunicación",
    date: "2024-07-10",
    readTime: "5 min",
    excerpt: "Las redes sociales han democratizado la comunicación, pero también han creado nuevos desafíos. Como comunicadores populares, debemos aprender a navegar estos espacios sin perder la esencia de nuestro mensaje transformador.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    likes: 29,
    comments: 15,
    featured: false
  },
  {
    id: 4,
    title: "Murales de Memoria: Cuando las Paredes Hablan de Justicia",
    category: "Derechos Humanos",
    author: "Carlos Mendoza",
    authorRole: "Coordinador de Proyectos",
    date: "2024-07-05",
    readTime: "7 min",
    excerpt: "Cada mural que creamos es un acto de memoria y resistencia. A través del proyecto 'Murales de Memoria', hemos aprendido que el arte público tiene el poder de mantener vivas las historias que algunos prefieren olvidar.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
    likes: 52,
    comments: 20,
    featured: false
  },
  {
    id: 5,
    title: "La Red que Nos Une: Colaboración Entre Colectivos Artísticos",
    category: "Colaboración",
    author: "Equipo JCMX",
    authorRole: "Redacción Colectiva",
    date: "2024-06-28",
    readTime: "10 min",
    excerpt: "El trabajo en red ha sido fundamental para el crecimiento de JCMX. Compartimos nuestra experiencia construyendo alianzas con otros colectivos y las lecciones aprendidas en el camino hacia una cultura más colaborativa.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
    likes: 41,
    comments: 18,
    featured: false
  },
  {
    id: 6,
    title: "Arte Comunitario: Metodologías para la Transformación Social",
    category: "Desarrollo",
    author: "Ana García",
    authorRole: "Directora Artística",
    date: "2024-06-20",
    readTime: "12 min",
    excerpt: "Después de cinco años trabajando con comunidades, hemos desarrollado metodologías propias para que el arte sea verdaderamente participativo. Compartimos nuestros aprendizajes y herramientas prácticas para replicar estos procesos.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    likes: 67,
    comments: 25,
    featured: false
  }
]

const categories = [
  "Todos",
  "Reflexión",
  "Medio Ambiente",
  "Comunicación",
  "Derechos Humanos",
  "Colaboración",
  "Desarrollo"
]

const categoryColors = {
  "Reflexión": "text-jcmx-electric bg-jcmx-electric/10 border-jcmx-electric/20",
  "Medio Ambiente": "text-green-400 bg-green-500/10 border-green-500/20",
  "Comunicación": "text-jcmx-magenta bg-jcmx-magenta/10 border-jcmx-magenta/20",
  "Derechos Humanos": "text-jcmx-light bg-jcmx-light/10 border-jcmx-light/20",
  "Colaboración": "text-purple-400 bg-purple-500/10 border-purple-500/20",
  "Desarrollo": "text-jcmx-electric bg-jcmx-electric/10 border-jcmx-electric/20"
}

export default function NoticiasSection() {
  const featuredArticle = articles.find(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="noticias" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-jcmx-light font-black uppercase tracking-[0.4em] text-sm mb-4 block">Bitácora</span>
          <h2 className="section-title mb-6"><span className="text-glow text-jcmx-magenta">Noticias</span> & Reflexiones</h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Voces, ideas y reflexiones de nuestro colectivo sobre la intersección entre el arte, la cultura y la transformación social.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { label: 'Artículos Publicados', value: '150+', color: 'text-jcmx-electric' },
            { label: 'Lectores Mensuales', value: '25K+', color: 'text-jcmx-magenta' },
            { label: 'Comentarios', value: '500+', color: 'text-jcmx-light' },
            { label: 'Autores Activos', value: '12', color: 'text-jcmx-electric' }
          ].map((stat, i) => (
            <Card key={i} className="glass-card p-8 border-white/5 text-center">
              <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className={`h-11 px-6 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all duration-500 border-white/10 ${category === "Todos"
                  ? "bg-jcmx-electric text-white border-jcmx-electric shadow-[0_0_15px_rgba(0,123,206,0.3)]"
                  : "text-white/40 hover:text-white hover:border-white/20"
                }`}
            >
              <Tag className="w-3 h-3 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <Card className="glass-card overflow-hidden border-white/10 group hover:border-jcmx-electric/30 transition-all duration-700">
              <div className="grid lg:grid-cols-2 gap-0 overflow-hidden">
                <div className="relative h-[400px] lg:h-auto overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F2D] via-[#0B0F2D]/20 to-transparent opacity-60" />
                  <div className="absolute top-6 left-6 flex items-center bg-jcmx-electric text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 mr-2" />
                    Destacado
                  </div>
                </div>

                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center space-x-6 mb-8 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span className={`px-3 py-1 rounded-full border ${categoryColors[featuredArticle.category as keyof typeof categoryColors]}`}>
                      {featuredArticle.category}
                    </span>
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-2 text-jcmx-magenta" /> {featuredArticle.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-2 text-jcmx-light" /> {featuredArticle.readTime}</span>
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 group-hover:text-jcmx-electric transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-12 h-12 rounded-full bg-jcmx-magenta/20 flex items-center justify-center border border-jcmx-magenta/30">
                      <User className="text-jcmx-magenta w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-white uppercase tracking-widest">{featuredArticle.author}</div>
                      <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{featuredArticle.authorRole}</div>
                    </div>
                  </div>

                  <p className="text-white/60 text-lg mb-10 leading-relaxed italic border-l-4 border-jcmx-electric pl-6">
                    "{featuredArticle.excerpt}"
                  </p>

                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <div className="flex items-center space-x-6 text-xs font-black text-white/40">
                      <span className="flex items-center hover:text-jcmx-magenta transition-colors cursor-pointer"><Heart className="w-4 h-4 mr-2" /> {featuredArticle.likes}</span>
                      <span className="flex items-center hover:text-jcmx-electric transition-colors cursor-pointer"><MessageCircle className="w-4 h-4 mr-2" /> {featuredArticle.comments}</span>
                    </div>
                    <Button className="btn-premium px-10 h-14 uppercase tracking-widest text-xs">
                      LEER ARTÍCULO
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Regular Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {regularArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <Card className="glass-card overflow-hidden h-full flex flex-col group border-white/5 hover:border-white/20 transition-all duration-500">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0F2D] to-transparent opacity-80" />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${categoryColors[article.category as keyof typeof categoryColors]} backdrop-blur-md`}>
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center space-x-4 mb-6 text-[10px] font-black uppercase tracking-widest text-white/40">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-2" /> {article.date}</span>
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-2" /> {article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-6 group-hover:text-jcmx-electric transition-colors line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  <div className="flex items-center space-x-3 mb-6">
                    <User className="w-4 h-4 text-jcmx-magenta" />
                    <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{article.author}</span>
                  </div>

                  <p className="text-white/60 text-sm mb-8 flex-1 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center space-x-4 text-[10px] font-black text-white/30">
                      <div className="flex items-center hover:text-white transition-colors cursor-pointer"><Heart className="w-3 h-3 mr-1" /> {article.likes}</div>
                      <div className="flex items-center hover:text-white transition-colors cursor-pointer"><MessageCircle className="w-3 h-3 mr-1" /> {article.comments}</div>
                      <Share2 className="w-3 h-3 hover:text-jcmx-electric transition-colors cursor-pointer" />
                    </div>
                    <Button
                      variant="outline"
                      className="btn-outline-premium h-10 px-6 text-[10px] uppercase tracking-widest"
                    >
                      LEER
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Blocks */}
        <div className="mt-32 grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-12 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-8">
                <Mail className="w-12 h-12 text-jcmx-electric/20 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                Suscríbete al <span className="text-jcmx-electric text-glow">Newsletter</span>
              </h3>
              <p className="text-white/50 text-base mb-10 max-w-md">
                Recibe nuestras reflexiones más profundas y actualizaciones críticas directamente en tu bandeja de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="TU@EMAIL.COM"
                  className="flex-1 px-6 h-14 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white placeholder-white/20 focus:outline-none focus:border-jcmx-electric transition-all"
                />
                <Button className="btn-premium h-14 px-8 uppercase tracking-widest text-xs">
                  UNIRSE
                </Button>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-12 relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 p-8">
                <Sparkles className="w-12 h-12 text-jcmx-magenta/20 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">
                Escribe con <span className="text-jcmx-magenta text-glow">Nosotros</span>
              </h3>
              <p className="text-white/50 text-base mb-10 max-w-md">
                ¿Tienes una voz que necesita ser escuchada? Invitamos a pensadores y creativos a colaborar en nuestra bitácora.
              </p>
              <Button
                className="w-full btn-outline-premium h-14 uppercase tracking-widest text-xs"
              >
                PROPOOLER ARTÍCULO
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
