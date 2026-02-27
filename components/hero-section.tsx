import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TextAnimate } from "@/components/ui/text-animate"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full">
      <div className="flex flex-col lg:flex-row w-full min-h-[600px] xl:min-h-[700px]">
        {/* Left Side: Dark Blue Background with Content & Form */}
        <div className="flex-1 bg-[#0f172a] px-6 py-16 flex items-center justify-center lg:px-12 xl:px-24">
          <ScrollReveal className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col items-start gap-8">
            <div className="flex flex-col gap-4 text-left">
              <h1 className="text-balance text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-heading)] md:text-5xl lg:text-6xl leading-[1.1]">
                <TextAnimate animation="blurInUp" by="word" once>
                  Fundación DILO: Terapias Avanzadas para el Desarrollo
                </TextAnimate>
              </h1>
              <div className="max-w-lg text-pretty text-lg md:text-xl text-slate-300">
                <TextAnimate animation="fadeIn" by="line" delay={0.2} once>
                  Acompañamos el crecimiento de niños y adolescentes con un enfoque clínico y humano.
                </TextAnimate>
              </div>
            </div>
            <Button asChild size="lg" className="h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold transition-colors mt-2">
              <a href="#contacto">
                Agenda tu Primera Cita
              </a>
            </Button>
          </ScrollReveal>
        </div>

        {/* Right Side: Image with primary accent */}
        <div className="flex-1 relative bg-white flex items-center justify-center p-6 lg:p-12 hidden md:flex">
          {/* Accent block background */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-primary" />
          
          <ScrollReveal className="relative w-full max-w-lg aspect-[4/5] lg:aspect-square xl:aspect-[4/5] z-10">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/hero-therapy.png"
                alt="Terapia avanzada para el desarrollo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
