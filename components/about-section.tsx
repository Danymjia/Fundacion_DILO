"use client"

import Image from "next/image"
import { Target, Eye, Users } from "lucide-react"
import { motion } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"

const highlights = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar servicios terapéuticos de calidad en habla, lenguaje y comunicación, favoreciendo el desarrollo integral de nuestros pacientes con un enfoque humano y basado en evidencia.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser una fundación referente en la atención terapéutica del habla y el lenguaje, reconocida por su compromiso con la inclusión, la excelencia y el bienestar comunicativo.",
  },
  {
    icon: Users,
    title: "A quién atendemos",
    description:
      "Trabajamos con niños, adolescentes y adultos que presentan necesidades en el área del habla, lenguaje, comunicación y aprendizaje.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-primary/5 py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Image - sliding from left */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex-1"
          >
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/assets/about-team.png"
                alt="Equipo de terapeutas de Fundación DILO"
                width={560}
                height={420}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text content - sliding from right */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-1 flex-col gap-8"
          >
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                Sobre Nosotros
              </p>
              <h2 className="text-balance text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] md:text-4xl">
                <TextAnimate animation="blurInUp" by="word" once>
                  Dedicados al desarrollo comunicativo
                </TextAnimate>
              </h2>
              <div className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                <TextAnimate animation="fadeIn" by="line" delay={0.2} once>
                  Nuestro enfoque terapéutico y educativo se centra en las
                  necesidades individuales de cada paciente, creando planes de
                  intervención personalizados que promueven avances significativos
                  en la comunicación.
                </TextAnimate>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground font-[family-name:var(--font-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
