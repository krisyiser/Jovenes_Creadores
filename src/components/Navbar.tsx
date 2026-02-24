"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: '¿Quiénes Somos?', href: '/quienes-somos' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Actividades', href: '/actividades' },
  { name: 'Galería', href: '/galeria' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Contacto', href: '/contacto' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-4 py-4 ${
        scrolled 
        ? "bg-jcmx-dark/80 backdrop-blur-xl border-b border-white/10 py-3" 
        : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto">
        <div className={`glass-card px-6 py-2 flex items-center justify-between transition-all duration-500 ${scrolled ? 'bg-white/5' : 'bg-transparent border-transparent'}`}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className="text-xl md:text-2xl font-title font-black text-white leading-none">
                <span className="text-jcmx-electric text-glow">Jóvenes</span>
                <span className="text-white"> Creadores</span>
              </h1>
              <div className="flex items-center space-x-2">
                <div className="h-[2px] w-8 bg-jcmx-magenta shadow-[0_0_10px_rgba(198,57,124,0.5)]"></div>
                <p className="text-[10px] uppercase tracking-widest text-jcmx-light font-bold">Red de Artistas</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group px-4 py-2"
                >
                  <span className={`text-sm font-bold uppercase tracking-tight transition-colors duration-300 ${
                    isActive ? 'text-jcmx-electric' : 'text-white/80 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-jcmx-electric shadow-[0_0_10px_rgba(0,123,206,0.5)]"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] w-0 bg-jcmx-light group-hover:w-full transition-all duration-300" />
                </Link>
              )
            })}
            
            <Link href="/contacto" className="ml-4">
              <Button className="btn-premium py-2 px-6 h-auto text-xs uppercase tracking-widest">
                Únete
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-jcmx-dark/95 backdrop-blur-2xl border-white/10 text-white p-0">
                <div className="flex flex-col h-full pt-20 px-8">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-2xl font-black mb-6 uppercase transition-colors ${
                          pathname === item.href ? 'text-jcmx-electric' : 'text-white/60 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <div className="mt-auto mb-10">
                    <Button className="w-full btn-premium py-4">
                      CONTACTO
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
