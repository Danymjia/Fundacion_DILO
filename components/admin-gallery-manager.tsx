"use client"

import { useEffect, useState, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"
import { Plus, Trash2, ImageIcon, Upload, Edit } from "lucide-react"
import Image from "next/image"

interface GalleryImage {
  id: string
  title: string
  image_url: string
  created_at: string
}

export function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [title, setTitle] = useState("")
  const [editTitle, setEditTitle] = useState("")
  const [editingId, setEditingId] = useState<string | null>(null)
  const [file, setFile] = useState<File | null>(null)

  const fetchImages = useCallback(async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from("gallery_images")
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      setImages(data)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchImages()
  }, [fetchImages])

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !title) return

    setUploading(true)
    const supabase = createClient()

    try {
      // Upload image to storage
      const fileExt = file.name.split(".").pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from("gallery")
        .upload(fileName, file)

      if (uploadError) throw uploadError

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("gallery")
        .getPublicUrl(fileName)

      // Insert into gallery_images table
      const { error: insertError } = await supabase
        .from("gallery_images")
        .insert({
          title,
          image_url: urlData.publicUrl,
        })

      if (insertError) throw insertError

      toast.success("Imagen subida exitosamente")
      setTitle("")
      setFile(null)
      setDialogOpen(false)
      fetchImages()
    } catch {
      toast.error("Error al subir la imagen")
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm("Estas seguro de eliminar esta imagen?")) return

    const supabase = createClient()

    try {
      // Extract file path from URL
      const urlParts = imageUrl.split("/gallery/")
      if (urlParts.length > 1) {
        await supabase.storage.from("gallery").remove([urlParts[1]])
      }

      const { error } = await supabase
        .from("gallery_images")
        .delete()
        .eq("id", id)

      if (error) throw error

      toast.success("Imagen eliminada")
      fetchImages()
    } catch {
      toast.error("Error al eliminar la imagen")
    }
  }

  const handleEditOpen = (img: GalleryImage) => {
    setEditingId(img.id)
    setEditTitle(img.title)
    setEditDialogOpen(true)
  }

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingId || !editTitle) return

    setUploading(true)
    const supabase = createClient()

    try {
      const { error } = await supabase
        .from("gallery_images")
        .update({ title: editTitle })
        .eq("id", editingId)

      if (error) throw error

      toast.success("Título actualizado exitosamente")
      setEditDialogOpen(false)
      fetchImages()
    } catch {
      toast.error("Error al actualizar el título")
    } finally {
      setUploading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="aspect-[4/3] animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground font-[family-name:var(--font-heading)]">
            Imagenes de la Galeria
          </h2>
          <p className="text-sm text-muted-foreground">
            {images.length} {images.length === 1 ? "imagen" : "imagenes"}
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2 rounded-full">
              <Plus className="h-4 w-4" />
              Subir Imagen
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-[family-name:var(--font-heading)]">
                Subir nueva imagen
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleUpload} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="title">Titulo</Label>
                <Input
                  id="title"
                  placeholder="Descripcion de la imagen"
                  required
                  className="rounded-xl"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="image">Imagen</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  required
                  className="rounded-xl"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </div>
              <Button
                type="submit"
                disabled={uploading}
                className="gap-2 rounded-full"
              >
                <Upload className="h-4 w-4" />
                {uploading ? "Subiendo..." : "Subir Imagen"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-[family-name:var(--font-heading)]">
                Editar Título de Imagen
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleEditSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="edit-title">Nuevo Título</Label>
                <Input
                  id="edit-title"
                  placeholder="Descripción de la imagen"
                  required
                  className="rounded-xl"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                disabled={uploading}
                className="gap-2 rounded-full"
              >
                <Edit className="h-4 w-4" />
                {uploading ? "Guardando..." : "Guardar Cambios"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {images.length === 0 ? (
        <Card className="border-dashed border-border">
          <CardContent className="flex flex-col items-center gap-4 py-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <ImageIcon className="h-8 w-8 text-muted-foreground" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">Sin imagenes</p>
              <p className="text-sm text-muted-foreground">
                Sube la primera imagen a la galeria
              </p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img) => (
            <Card key={img.id} className="group overflow-hidden border-border/50">
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.image_url}
                  alt={img.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <CardContent className="flex items-center justify-between p-4">
                <div className="w-[60%]">
                  <p className="font-semibold text-foreground text-sm truncate">{img.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(img.created_at).toLocaleDateString("es")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-1.5 rounded-full"
                    onClick={() => handleEditOpen(img)}
                  >
                    <Edit className="h-3.5 w-3.5" />
                    Editar
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="gap-1.5 rounded-full"
                    onClick={() => handleDelete(img.id, img.image_url)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    Eliminar
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
