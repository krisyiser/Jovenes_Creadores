"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, Image as ImageIcon, Calendar, Eye, Download, ExternalLink, Sparkles, Navigation } from 'lucide-react'

const galleries = {
  fotos: [
    {
      id: 1,
      title: "Festival Juventudes 2024",
      date: "2024-07-15",
      location: "Monterrey, NL",
      images: 45,
      views: 1200,
      cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
      description: "Registro fotográfico del festival anual con participación de artistas."
    },
    {
      id: 2,
      title: "Murales de Memoria",
      date: "2024-06-20",
      location: "CDMX, Guadalajara",
      images: 78,
      views: 850,
      cover: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800",
      description: "Documentación del proceso de creación de murales comunitarios."
    },
    {
      id: 3,
      title: "Taller EcoArte Circular",
      date: "2024-05-10",
      location: "Puebla, Oaxaca",
      images: 32,
      views: 640,
      cover: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=800",
      description: "Imágenes del taller de arte sustentable con materiales reciclados."
    }
  ],
  videos: [
    {
      id: 1,
      title: "Documental: Voces del Cambio",
      date: "2024-07-01",
      duration: "25:30",
      views: 3500,
      cover: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800",
      description: "Testimonios de jóvenes que transforman sus comunidades.",
      type: "Documental"
    },
    {
      id: 2,
      title: "Performance: Narrativas",
      date: "2024-06-15",
      duration: "12:45",
      views: 2100,
      cover: "https://images.unsplash.com/photo-1514525253361-b83f8a9e27ce?auto=format&fit=crop&q=80&w=800",
      description: "Performance multidisciplinario sobre historias migrantes.",
      type: "Performance"
    }
  ]
}

const videoTypeStyles = {
  "Documental": "text-jcmx-electric border-jcmx-electric/30",
  "Performance": "text-jcmx-magenta border-jcmx-magenta/30",
  "Timelapse": "text-jcmx-light border-jcmx-light/30",
  "Entrevistas": "text-jcmx-electric border-jcmx-electric/30"
}

export default function GaleriaSection() {
  const [activeTab, setActiveTab] = useState<'fotos' | 'videos'>('fotos')

  return (
    <section id="galeria" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-jcmx-light font-black uppercase tracking-[0.4em] text-sm mb-4 block">Multimedia</span>
          <h2 className="section-title mb-8">Galería <span className="text-glow text-jcmx-electric">Visual</span></h2>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Documentamos cada fragmento de nuestra historia: del primer trazo al impacto final en el territorio.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            { label: 'Fotografías', value: '500+', color: 'text-jcmx-electric' },
            { label: 'Videos', value: '25+', color: 'text-jcmx-magenta' },
            { label: 'Impacto Visual', value: '50K+', color: 'text-jcmx-light' },
            { label: 'Álbumes', value: '12', color: 'text-jcmx-electric' }
          ].map((stat, i) => (
            <Card key={i} className="glass-card p-8 border-white/5 text-center">
              <div className={`text-3xl font-black ${stat.color} mb-1 uppercase tracking-tighter`}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Custom Tabs */}
        <div className="flex justify-center mb-20">
          <div className="glass-card p-2 border-white/10 flex space-x-2">
            {[
              { id: 'fotos', label: 'Fotografías', icon: ImageIcon, color: 'bg-jcmx-electric' },
              { id: 'videos', label: 'Videos', icon: Play, color: 'bg-jcmx-magenta' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 relative overflow-hidden ${activeTab === tab.id ? 'text-white' : 'text-white/40 hover:text-white/60'
                  }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeGalTab"
                    className={`absolute inset-0 ${tab.color} -z-10 shadow-[0_0_20px_rgba(0,0,0,0.3)]`}
                    transition={{ type: "spring" as const, bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <tab.icon className="w-3 h-3" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {activeTab === 'fotos' ? (
              galleries.fotos.map((album) => (
                <Card key={album.id} className="glass-card overflow-hidden group border-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0F2D] to-transparent opacity-80" />

                    <div className="absolute top-4 right-4 bg-jcmx-dark/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                      {album.images} ITEMS
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Button className="btn-premium px-8 h-12 uppercase tracking-widest text-[10px]">
                        VER ÁLBUM
                      </Button>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-6 mb-4 text-[10px] font-black uppercase tracking-widest text-white/30">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-2" /> {album.date}</span>
                      <span className="flex items-center"><Eye className="w-3 h-3 mr-2" /> {album.views}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-jcmx-electric transition-colors tracking-tight uppercase">
                      {album.title}
                    </h3>
                    <p className="text-white/50 text-xs mb-8 leading-relaxed line-clamp-2">
                      {album.description}
                    </p>
                    <div className="flex items-center text-jcmx-magenta text-[10px] font-black uppercase tracking-[0.1em] border-t border-white/5 pt-6">
                      <Navigation className="w-3 h-3 mr-2" />
                      {album.location}
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              galleries.videos.map((video) => (
                <Card key={video.id} className="glass-card overflow-hidden group border-white/5 hover:border-white/20 transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={video.cover}
                      alt={video.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-jcmx-dark/40 group-hover:bg-transparent transition-colors duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-jcmx-magenta/20 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 group-hover:bg-jcmx-magenta/90 group-hover:scale-110 transition-all duration-500 shadow-[0_0_50px_rgba(198,57,124,0.3)]">
                        <Play className="w-8 h-8 text-white ml-2" />
                      </div>
                    </div>

                    <div className="absolute top-4 left-4">
                      <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border bg-jcmx-dark/80 backdrop-blur-md ${videoTypeStyles[video.type as keyof typeof videoTypeStyles]}`}>
                        {video.type}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 bg-jcmx-dark/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full border border-white/10">
                      {video.duration}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-6 mb-4 text-[10px] font-black uppercase tracking-widest text-white/30">
                      <span className="flex items-center"><Calendar className="w-3 h-3 mr-2" /> {video.date}</span>
                      <span className="flex items-center"><Eye className="w-3 h-3 mr-2" /> {video.views}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-jcmx-magenta transition-colors tracking-tight uppercase">
                      {video.title}
                    </h3>
                    <p className="text-white/50 text-xs mb-8 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                    <div className="border-t border-white/5 pt-6">
                      <Button className="w-full btn-outline-premium h-12 text-[10px] uppercase tracking-widest">
                        REPRODUCIR AHORA
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <Card className="glass-card p-12 lg:p-20 text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 group-hover:opacity-20 transition-all duration-1000">
              <Sparkles className="w-40 h-40 text-jcmx-electric" />
            </div>
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-8 uppercase tracking-tighter">
              ¿Tienes registro <span className="text-glow text-jcmx-electric">Multimedia</span>?
            </h3>
            <p className="text-white/50 text-xl max-w-2xl mx-auto mb-12">
              Ayúdanos a expandir nuestra narrativa. Si documentaste alguna de nuestras actividades, el colectivo te abre sus puertas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-premium h-16 px-12 text-[10px] uppercase tracking-[0.2em]">
                SUBIR CONTENIDO
              </Button>
              <Button variant="outline" className="btn-outline-premium h-16 px-12 text-[10px] uppercase tracking-[0.2em]">
                SOLICITAR ARCHIVO
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
