"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Sparkles } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0F2D]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-jcmx-electric/20 blur-[80px] md:blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-20 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-jcmx-magenta/10 blur-[70px] md:blur-[100px] rounded-full"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 sm:px-6 text-center relative z-10 py-32 md:py-0"
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-jcmx-light animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/80">Creatividad sin límites</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-9xl font-black mb-4 md:mb-6 tracking-tighter leading-[0.9]"
          >
            <span className="text-white">Jóvenes</span>
            <br />
            <span className="text-jcmx-electric text-glow">Creadores</span>
            <span className="text-white"> MX</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-xl md:text-2xl text-jcmx-light/90 font-medium mb-8 md:mb-12 leading-tight max-w-3xl mx-auto px-2"
          >
            Transformamos realidades a través del{' '}
            <span className="text-white underline decoration-jcmx-magenta decoration-2 md:decoration-4 underline-offset-4">arte</span>{' '}
            y la{' '}
            <span className="text-white underline decoration-jcmx-electric decoration-2 md:decoration-4 underline-offset-4">acción comunitaria</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Link href="/proyectos" className="w-full sm:w-auto">
              <Button size="lg" className="btn-premium h-14 md:h-16 px-8 md:px-10 text-base md:text-lg group w-full sm:w-auto">
                Explorar Proyectos
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/quienes-somos" className="w-full sm:w-auto">
              <Button size="lg" className="btn-outline-premium h-14 md:h-16 px-8 md:px-10 text-base md:text-lg group w-full sm:w-auto">
                <Users className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Conócenos
              </Button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 md:mt-20 max-w-4xl mx-auto"
          >
            {[
              { label: 'Artistas', value: '50+' },
              { label: 'Proyectos', value: '100+' },
              { label: 'Impacto', value: '5 Años' },
              { label: 'Comunidades', value: '20+' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 md:p-6 glass-card-hover group">
                <div className="text-2xl md:text-3xl font-black text-white mb-1 group-hover:text-jcmx-electric transition-colors">{stat.value}</div>
                <div className="text-[9px] md:text-[10px] uppercase tracking-widest text-jcmx-light font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Fade bottom */}
      <div className="absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-[#0B0F2D] to-transparent z-20" />

      {/* Scroll Indicator — hidden on very small landscape */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll Down</span>
        <div className="w-[1px] h-10 md:h-12 bg-gradient-to-b from-jcmx-electric to-transparent" />
      </motion.div>
    </section>
  )
}
