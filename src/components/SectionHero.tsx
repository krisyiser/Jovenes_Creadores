"use client"

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface SectionHeroProps {
    title: string
    subtitle?: string
    gradient?: string
    tag?: string
}

export default function SectionHero({
    title,
    subtitle,
    gradient = "from-jcmx-electric to-jcmx-magenta",
    tag
}: SectionHeroProps) {
    return (
        <section className="relative pt-48 pb-32 overflow-hidden">
            {/* Background Ornaments */}
            <div className="absolute inset-0 -z-10 bg-[#050718]" />
            <div className={`absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br ${gradient} opacity-[0.08] blur-[140px] rounded-full -translate-y-1/2 translate-x-1/4 animate-pulse`} />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl"
                >
                    {tag && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center space-x-3 mb-8"
                        >
                            <div className="h-px w-8 bg-jcmx-electric" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-jcmx-electric">
                                {tag}
                            </span>
                        </motion.div>
                    )}

                    <h1 className="text-6xl md:text-[9rem] font-black mb-10 leading-[0.85] tracking-tighter text-white uppercase italic">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className="block relative group">
                                {i % 2 !== 0 ? (
                                    <span className="text-transparent stroke-text-white opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                        {word}
                                    </span>
                                ) : (
                                    <span className="relative z-10">
                                        {word}
                                        <Sparkles className="absolute -top-4 -right-12 w-12 h-12 text-jcmx-electric opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700" />
                                    </span>
                                )}
                            </span>
                        ))}
                    </h1>

                    {subtitle && (
                        <div className="flex items-start max-w-2xl mt-12">
                            <div className="w-1 bg-gradient-to-b from-jcmx-electric to-transparent h-20 mr-8 rounded-full" />
                            <p className="text-xl md:text-2xl text-white/40 font-bold leading-relaxed tracking-tight group">
                                <span className="group-hover:text-white transition-colors duration-500">{subtitle}</span>
                            </p>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Matrix Decorative Grid */}
            <div className="absolute bottom-10 right-10 flex space-x-2 opacity-10">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-px h-16 bg-white" style={{ opacity: 1 - i * 0.2 }} />
                ))}
            </div>
        </section>
    )
}
