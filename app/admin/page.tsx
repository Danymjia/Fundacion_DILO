"use client";

import { GalleryManager } from "@/components/admin-gallery-manager";
import { MessagesManager } from "@/components/admin-messages-manager";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Image as ImageIcon, MessageSquare } from "lucide-react";
import { toast } from "sonner";

export default function AdminPage() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast.error("Error al cerrar sesión");
    } else {
      router.push("/admin/login");
    }
  };

  return (
    <div className="mx-auto max-w-7xl p-4 lg:p-8 space-y-8 mt-10">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-heading)]">
          Panel de Administración
        </h1>
        <Button variant="outline" className="gap-2" onClick={handleLogout}>
          <LogOut className="h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>

      <Tabs defaultValue="gallery" className="w-full">
        <TabsList className="mb-8 grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="gallery" className="gap-2">
            <ImageIcon className="h-4 w-4" />
            Galería
          </TabsTrigger>
          <TabsTrigger value="messages" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Mensajes
          </TabsTrigger>
        </TabsList>
        <TabsContent value="gallery">
          <GalleryManager />
        </TabsContent>
        <TabsContent value="messages">
          <MessagesManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
