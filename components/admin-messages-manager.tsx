"use client"

import { useEffect, useState, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Trash2, Mail, Phone, User, MessageSquare } from "lucide-react"

interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string | null
  message: string
  created_at: string
}

export function MessagesManager() {
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [loading, setLoading] = useState(true)

  const fetchMessages = useCallback(async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setMessages(data)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchMessages()
  }, [fetchMessages])

  const handleDelete = async (id: string) => {
    if (!confirm("Estas seguro de eliminar este mensaje?")) return

    const supabase = createClient()
    const { error } = await supabase
      .from("contact_messages")
      .delete()
      .eq("id", id)

    if (error) {
      toast.error("Error al eliminar el mensaje")
    } else {
      toast.success("Mensaje eliminado")
      fetchMessages()
    }
  }

  if (loading) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-32 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)]">
          Mensajes de Contacto
        </h2>
        <p className="text-sm text-muted-foreground">
          {messages.length} {messages.length === 1 ? "mensaje" : "mensajes"}
        </p>
      </div>

      {messages.length === 0 ? (
        <Card className="border-dashed border-border">
          <CardContent className="flex flex-col items-center gap-4 py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <MessageSquare className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">Sin mensajes</p>
              <p className="text-sm text-muted-foreground">
                Los mensajes de contacto apareceran aqui
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((msg) => (
            <Card key={msg.id} className="border-border/50">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-1 flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-primary" />
                        <span className="font-semibold text-foreground">{msg.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-3.5 w-3.5" />
                        <span>{msg.email}</span>
                      </div>
                      {msg.phone && (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{msg.phone}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-sm leading-relaxed text-foreground/80">
                      {msg.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(msg.created_at).toLocaleString("es", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="shrink-0 text-destructive hover:bg-destructive/10 hover:text-destructive"
                    onClick={() => handleDelete(msg.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Eliminar mensaje</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
