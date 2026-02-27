"use client"

import { motion } from "framer-motion"
import { TextAnimate } from "@/components/ui/text-animate"
import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Send, Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  // ... rest of the state functions ...
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = createClient()
      const { error } = await supabase.from("contact_messages").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        message: formData.message,
      })

      if (error) throw error

      toast.success("Mensaje enviado exitosamente. Nos pondremos en contacto contigo pronto.")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch {
      toast.error("Error al enviar el mensaje. Por favor, intentálo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="bg-muted/30 py-16 lg:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            Contacto
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground font-[family-name:var(--font-heading)] md:text-4xl">
            <TextAnimate animation="blurInUp" by="word" once>
              Estamos aquí para ayudarte
            </TextAnimate>
          </h2>
          <div className="mt-4 text-pretty text-muted-foreground">
            <TextAnimate animation="fadeIn" by="line" delay={0.2} once>
              Completa el formulario y nos pondremos en contacto contigo lo antes
              posible.
            </TextAnimate>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5 overflow-hidden">
          {/* Left space intentionally left clear or form centered */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Contact form - sliding from right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50 h-full">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name">Nombre completo *</Label>
                    <Input
                      id="name"
                      required
                      placeholder="Tu nombre completo"
                      className="rounded-xl"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Correo electrónico *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="tu@email.com"
                        className="rounded-xl"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+506 0000 0000"
                        className="rounded-xl"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      className="resize-none rounded-xl"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="gap-2 rounded-full"
                    size="lg"
                  >
                    <Send className="h-4 w-4" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
