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
    video: "/videos/jawai video final.mp4",
    // Using a high-res Unsplash image as a reliable fallback poster
    poster: "https://images.unsplash.com/photo-1615887023516-9b6c5062a5a3?q=80&w=1920&auto=format&fit=crop",
  },
  about: {
    leopard: "/images/leopard jawai.jpg?q=80&w=800&auto=format&fit=crop",
    shepherd: "/images/shepherd jawai.jpg?q=80&w=800&auto=format&fit=crop",
  },
  packages: {
    safari: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop",
    dam: "/images/bird and dam.avif?q=80&w=800&auto=format&fit=crop",
    stay: "/images/stay jawai (Large).jpg?q=80&w=800&auto=format&fit=crop",
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
      src: "/images/jawai 4 (Large).jpg?q=80&w=800&auto=format&fit=crop", 
      alt: "Jawai Landscape", 
      span: "col-span-1" 
    },
    { 
      id: 3,
      src: "/images/jawai 6.webp?q=80&w=800&auto=format&fit=crop", 
      alt: "Peacock", 
      span: "col-span-1" 
    },
    { 
      id: 4,
      src: "images/jawai 7.webp?q=80&w=800&auto=format&fit=crop", 
      alt: "Sunset over hills", 
      span: "col-span-1 md:col-span-2" 
    },
    { 
      id: 5,
      src: "/images/jawai 0 (Large).jpg?q=80&w=800&auto=format&fit=crop", 
      alt: "Rugged Terrain", 
      span: "col-span-1" 
    },
  ]
};
