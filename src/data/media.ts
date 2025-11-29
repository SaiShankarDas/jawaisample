/**
 * Centralized store for all media assets.
 * 
 * UPDATES:
 * - Video path is set to '/videos/herobg3.mp4'.
 * - Poster is set to a remote Unsplash URL as a fallback so the site looks good immediately.
 *   Once you have your own 'herocover.jpg', you can change the poster URL below to '/images/herocover.jpg'.
 */

export const ASSETS = {
  hero: {
    video: "/videos/herobg3.mp4",
    // Using a high-res Unsplash image as a reliable fallback poster
    poster: "https://images.unsplash.com/photo-1615887023516-9b6c5062a5a3?q=80&w=1920&auto=format&fit=crop",
  },
  about: {
    leopard: "https://images.unsplash.com/photo-1663499475059-666731875343?q=80&w=800&auto=format&fit=crop",
    shepherd: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=800&auto=format&fit=crop",
  },
  packages: {
    safari: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    dam: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?q=80&w=800&auto=format&fit=crop",
    stay: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
  },
  gallery: [
    { 
      id: 1,
      src: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&w=800&auto=format&fit=crop", 
      alt: "Leopard resting", 
      span: "col-span-1 md:col-span-2 row-span-2" 
    },
    { 
      id: 2,
      src: "https://images.unsplash.com/photo-1589802829985-817e51171b92?q=80&w=800&auto=format&fit=crop", 
      alt: "Jawai Landscape", 
      span: "col-span-1" 
    },
    { 
      id: 3,
      src: "https://images.unsplash.com/photo-1503919005314-30d93d07d823?q=80&w=800&auto=format&fit=crop", 
      alt: "Peacock", 
      span: "col-span-1" 
    },
    { 
      id: 4,
      src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop", 
      alt: "Sunset over hills", 
      span: "col-span-1 md:col-span-2" 
    },
    { 
      id: 5,
      src: "https://images.unsplash.com/photo-1534234828569-10229d6b4a59?q=80&w=800&auto=format&fit=crop", 
      alt: "Rugged Terrain", 
      span: "col-span-1" 
    },
  ]
};
