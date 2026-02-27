"use client"

import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { ImageIcon } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import Masonry, { Item } from "@/components/ui/masonry"

interface GalleryImage {
  id: string
  title: string
  image_url: string
  created_at: string
}

export function GallerySection() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile to apply limits mainly for mobile or small screens
  // Though limiting on all screens if there's too many is fine too
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  useEffect(() => {
    async function fetchImages() {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("gallery_images")
        .select("*")
        .order("created_at", { ascending: false })

      if (!error && data) {
        // Map database images to Masonry Items format
        // In a real scenario heights would hopefully be standardized or saved in DB
        // For visual variety of Masonry, generating randomish heights based on index
        const heightOptions = [400, 250, 600, 350, 500, 300, 450]
        const formattedItems = data.map((img: GalleryImage, idx: number) => ({
          id: img.id,
          // Ensuring clean url from db, no grayscale appends
          img: img.image_url,
          url: img.image_url,
          height: heightOptions[idx % heightOptions.length]
        }))
        setItems(formattedItems)
      }
      setLoading(false)
    }
    fetchImages()
  }, [])

  return (
    <section id="galeria" className="bg-gradient-to-t from-background to-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Galeria
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] md:text-4xl">
            <TextAnimate animation="blurInUp" by="word" once>
              Conoce nuestros espacios
            </TextAnimate>
          </h2>
          <div className="mt-4 text-pretty text-muted-foreground">
            <TextAnimate animation="fadeIn" by="line" delay={0.2} once>
              Descubre nuestras instalaciones, sesiones de terapia y actividades
              diseñadas para el bienestar de nuestros pacientes.
            </TextAnimate>
          </div>
        </div>

        <div className={`mt-12 w-full flex justify-center flex-col relative transition-all duration-500`}>
          {loading ? (
             <div className="flex gap-4 w-full overflow-hidden justify-center items-center min-h-[500px]">
               <div className="h-[200px] w-[250px] animate-pulse rounded-xl bg-muted" />
               <div className="h-[250px] w-[250px] animate-pulse rounded-xl bg-muted hidden sm:block" />
               <div className="h-[300px] w-[250px] animate-pulse rounded-xl bg-muted hidden md:block" />
             </div>
          ) : items.length > 0 ? (
            <>
              <div 
                className={`relative w-full transition-all duration-700 overflow-hidden ${!expanded ? 'max-h-[800px]' : 'max-h-[5000px]'}`}
              >
                <Masonry
                  items={items}
                  ease="power3.out"
                  duration={0.6}
                  stagger={0.05}
                  animateFrom="bottom"
                  scaleOnHover
                  hoverScale={0.95}
                  blurToFocus
                  colorShiftOnHover={false}
                />
                
                {/* Gradient fade when collapsed */}
                {!expanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
                )}
              </div>

              {/* Toggle Button */}
              {items.length > (isMobile ? 3 : 6) && (
                <div className="mt-8 flex justify-center relative z-20">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    {expanded ? "Ver Menos" : "Ver Más"}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-16 text-center min-h-[500px] justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Pronto compartiremos imágenes de nuestros espacios y actividades.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
