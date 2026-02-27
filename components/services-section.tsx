"use client"

import { motion } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import ScrollFloat from "@/components/ui/scroll-float"
import Image from "next/image"

const services = [
  {
    title: "Estimulación Temprana",
    description: "Estimulación Temprana es acompañamiento constante en el desarrollo de niños y adolescentes con necesidades o avanzadas para el desarrollo.",
    image: "/assets/estimulacion-temprana.png",
    reverse: false,
  },
  {
    title: "Terapia de Lenguaje",
    description: "Acompañamos terapias con un enfoque de orientación de lenguaje, estimulación completa en todas las áreas comunicativas del paciente.",
    image: "/assets/estimulacion-temprana.png",
    reverse: true,
  },
  {
    title: "Psicología Infantil",
    description: "Consejería en psicologíca infantil con evaluación de temas de desarrollo de conducta infantil.",
    image: "/assets/estimulacion-temprana.png",
    reverse: false,
  },
  {
    title: "Terapia Infantil",
    description: "Acompañamiento integrado en avances psicológicos y cognitivos con niños para un mejor crecimiento.",
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?q=80&w=800&auto=format&fit=crop",
    reverse: true,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-muted/30 py-16 lg:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-bold text-[#0B1B3D] font-[family-name:var(--font-heading)] md:text-5xl">
            <TextAnimate animation="blurInUp" by="word" once>
              Nuestros Servicios
            </TextAnimate>
          </h2>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-stretch bg-white rounded-[2rem] shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-border/50 ${
                service.reverse ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1B3D] mb-4 font-[family-name:var(--font-heading)]">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex-1 relative min-h-[300px] md:min-h-full">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Abstract Background Shapes - Spread Out */}
      
      {/* 1. Top Right */}
      <div className="absolute top-[5%] -right-10 opacity-10 pointer-events-none hidden lg:block">
        <svg width="250" height="250" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="var(--primary)" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,90.4,4.5C88.3,19.1,77.6,32.7,66.8,44.5C56,56.3,45.2,66.3,31.8,73.1C18.4,79.9,2.5,83.5,-12.3,81.1C-27.1,78.7,-40.8,70.3,-53.4,60C-66,49.7,-77.5,37.5,-83.1,22.6C-88.7,7.7,-88.4,-9.9,-81.2,-24.3C-74,-38.7,-59.9,-49.9,-46,-56.9C-32.1,-63.9,-18.4,-66.7,-2.1,-63.3C14.2,-59.9,28.4,-50.3,43,-43.3C57.6,-36.3,72.6,-31.9,81.3,-21.8Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>

      {/* 2. Top Left (Lower) */}
      <div className="absolute top-[25%] -left-20 opacity-10 pointer-events-none hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="-rotate-45">
          <path fill="var(--primary)" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,90.4,4.5C88.3,19.1,77.6,32.7,66.8,44.5C56,56.3,45.2,66.3,31.8,73.1C18.4,79.9,2.5,83.5,-12.3,81.1C-27.1,78.7,-40.8,70.3,-53.4,60C-66,49.7,-77.5,37.5,-83.1,22.6C-88.7,7.7,-88.4,-9.9,-81.2,-24.3C-74,-38.7,-59.9,-49.9,-46,-56.9C-32.1,-63.9,-18.4,-66.7,-2.1,-63.3C14.2,-59.9,28.4,-50.3,43,-43.3C57.6,-36.3,72.6,-31.9,81.3,-21.8Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>

      {/* 3. Middle Right */}
      <div className="absolute top-[45%] -right-16 opacity-[0.08] pointer-events-none hidden lg:block">
        <svg width="280" height="280" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
          <path fill="var(--primary)" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,90.4,4.5C88.3,19.1,77.6,32.7,66.8,44.5C56,56.3,45.2,66.3,31.8,73.1C18.4,79.9,2.5,83.5,-12.3,81.1C-27.1,78.7,-40.8,70.3,-53.4,60C-66,49.7,-77.5,37.5,-83.1,22.6C-88.7,7.7,-88.4,-9.9,-81.2,-24.3C-74,-38.7,-59.9,-49.9,-46,-56.9C-32.1,-63.9,-18.4,-66.7,-2.1,-63.3C14.2,-59.9,28.4,-50.3,43,-43.3C57.6,-36.3,72.6,-31.9,81.3,-21.8Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>

      {/* 4. Bottom Left */}
      <div className="absolute top-[70%] -left-12 opacity-[0.08] pointer-events-none hidden lg:block">
        <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
          <path fill="var(--primary)" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,90.4,4.5C88.3,19.1,77.6,32.7,66.8,44.5C56,56.3,45.2,66.3,31.8,73.1C18.4,79.9,2.5,83.5,-12.3,81.1C-27.1,78.7,-40.8,70.3,-53.4,60C-66,49.7,-77.5,37.5,-83.1,22.6C-88.7,7.7,-88.4,-9.9,-81.2,-24.3C-74,-38.7,-59.9,-49.9,-46,-56.9C-32.1,-63.9,-18.4,-66.7,-2.1,-63.3C14.2,-59.9,28.4,-50.3,43,-43.3C57.6,-36.3,72.6,-31.9,81.3,-21.8Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>

      {/* 5. Bottom Right */}
      <div className="absolute bottom-10 -right-[5%] opacity-[0.07] pointer-events-none hidden lg:block">
        <svg width="220" height="220" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="-rotate-90">
          <path fill="var(--primary)" d="M45.7,-76.1C58.9,-69.3,69.1,-55.3,77.5,-40.5C85.9,-25.7,92.5,-10.1,90.4,4.5C88.3,19.1,77.6,32.7,66.8,44.5C56,56.3,45.2,66.3,31.8,73.1C18.4,79.9,2.5,83.5,-12.3,81.1C-27.1,78.7,-40.8,70.3,-53.4,60C-66,49.7,-77.5,37.5,-83.1,22.6C-88.7,7.7,-88.4,-9.9,-81.2,-24.3C-74,-38.7,-59.9,-49.9,-46,-56.9C-32.1,-63.9,-18.4,-66.7,-2.1,-63.3C14.2,-59.9,28.4,-50.3,43,-43.3C57.6,-36.3,72.6,-31.9,81.3,-21.8Z" transform="translate(100 100) scale(1.2)" />
        </svg>
      </div>
    </section>
  )
}
