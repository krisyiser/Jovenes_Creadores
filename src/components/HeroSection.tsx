"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Sparkles, Zap } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0B0F2D]"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-jcmx-electric/20 blur-[120px] rounded-full"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-jcmx-magenta/10 blur-[100px] rounded-full"
        />
      </div>

      {/* Floating Decorative Objects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0
            }}
            animate={{
              y: [null, "-20px", "20px", "-20px"],
              opacity: [0, 0.5, 0.5, 0],
              rotate: [0, 45, 90, 180]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute w-4 h-4 border border-white/20 rotate-45"
          />
        ))}
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-jcmx-light animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/80">Creatividad sin límites</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black mb-6 tracking-tighter"
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
            className="text-xl md:text-3xl text-jcmx-light/90 font-medium mb-12 leading-tight max-w-3xl mx-auto"
          >
            Transformamos realidades a través del <span className="text-white underline decoration-jcmx-magenta decoration-4 underline-offset-4">arte</span> y la <span className="text-white underline decoration-jcmx-electric decoration-4 underline-offset-4">acción comunitaria</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/proyectos">
              <Button size="lg" className="btn-premium h-16 px-10 text-lg group">
                Explorar Proyectos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/quienes-somos">
              <Button size="lg" className="btn-outline-premium h-16 px-10 text-lg group">
                <Users className="mr-2 h-5 w-5" />
                Conócenos
              </Button>
            </Link>
          </motion.div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto"
          >
            {[
              { label: 'Artistas', value: '50+' },
              { label: 'Proyectos', value: '100+' },
              { label: 'Impacto', value: '5 Años' },
              { label: 'Comunidades', value: '20+' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-6 glass-card-hover group">
                <div className="text-3xl font-black text-white mb-1 group-hover:text-jcmx-electric transition-colors">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-jcmx-light font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Parallax Layers (Invisible but for layout depth) */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0B0F2D] to-transparent z-20" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-jcmx-electric to-transparent" />
      </motion.div>
    </section>
  )
}
