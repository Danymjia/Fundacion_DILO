import { MapPin, ExternalLink } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="ubicacion" className="bg-primary/5 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Ubicacion
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] md:text-4xl">
            <TextAnimate animation="blurInUp" by="word" once>
              Visitanos
            </TextAnimate>
          </h2>
          <div className="mt-4 text-pretty text-muted-foreground">
            <TextAnimate animation="fadeIn" by="line" delay={0.2} once>
              Estamos ubicados en un espacio comodo y accesible para toda la familia.
            </TextAnimate>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border/50 shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=-0.2935668,-78.4018064&z=17&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicacion de Fundacion DILO en Google Maps"
            className="w-full"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline" className="gap-2 rounded-full">
            <a
              href="https://maps.app.goo.gl/TtcDC8xpVCYzzT338"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="h-4 w-4" />
              Abrir en Google Maps
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
