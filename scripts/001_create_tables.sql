-- Table: admins (linked to auth.users)
CREATE TABLE IF NOT EXISTS public.admins (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Only admins can read their own row
CREATE POLICY "admins_select_own" ON public.admins
  FOR SELECT USING (auth.uid() = id);

-- Table: gallery_images
CREATE TABLE IF NOT EXISTS public.gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  image_url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;

-- Everyone can read gallery images
CREATE POLICY "gallery_images_select_public" ON public.gallery_images
  FOR SELECT USING (true);

-- Only admins can insert gallery images
CREATE POLICY "gallery_images_insert_admin" ON public.gallery_images
  FOR INSERT WITH CHECK (
    EXISTS (SELECT 1 FROM public.admins WHERE id = auth.uid())
  );

-- Only admins can update gallery images
CREATE POLICY "gallery_images_update_admin" ON public.gallery_images
  FOR UPDATE USING (
    EXISTS (SELECT 1 FROM public.admins WHERE id = auth.uid())
  );

-- Only admins can delete gallery images
CREATE POLICY "gallery_images_delete_admin" ON public.gallery_images
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.admins WHERE id = auth.uid())
  );

-- Table: contact_messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone can insert a contact message
CREATE POLICY "contact_messages_insert_public" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Only admins can read contact messages
CREATE POLICY "contact_messages_select_admin" ON public.contact_messages
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM public.admins WHERE id = auth.uid())
  );

-- Only admins can delete contact messages
CREATE POLICY "contact_messages_delete_admin" ON public.contact_messages
  FOR DELETE USING (
    EXISTS (SELECT 1 FROM public.admins WHERE id = auth.uid())
  );
