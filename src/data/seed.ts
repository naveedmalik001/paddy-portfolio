export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  caption: string;
  deliverables: string[];
  thumbnail: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  brand: string;
  category: string;
  thumbnail: string;
  videoId?: string;
  description: string;
  deliverables: string[];
  date: string;
  tags: string[];
}

export interface EnquiryForm {
  name: string;
  brand: string;
  email: string;
  instagram: string;
  collabType: string;
  budget: string;
  launchDate: string;
  brief: string;
}

export const seedVideos: Video[] = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Brand X — Lifestyle Campaign Reel",
    caption: "15s hero reel + stories",
    deliverables: ["1 Reel", "3 Stories"],
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    date: "2025-10-15"
  },
  {
    id: "2",
    youtubeId: "9bZkp7q19f0",
    title: "Fitness Brand — Training Cut",
    caption: "Cinematic training montage",
    deliverables: ["1 Reel", "5 Stills"],
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    date: "2025-08-20"
  },
  {
    id: "3",
    youtubeId: "3JZ_D3ELwOQ",
    title: "Fashion Week — Street Style",
    caption: "Urban fashion campaign",
    deliverables: ["1 Reel", "8 Photos"],
    thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    date: "2025-09-05"
  },
  {
    id: "4",
    youtubeId: "L_jWHffIx5E",
    title: "Tech Brand — Product Launch",
    caption: "Sleek product showcase",
    deliverables: ["2 Reels", "Carousel"],
    thumbnail: "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg",
    date: "2025-07-12"
  }
];

export const seedProjects: Project[] = [
  {
    id: "1",
    title: "Summer Campaign 2025",
    brand: "Luxury Fashion House",
    category: "Fashion",
    thumbnail: "/api/placeholder/400/300",
    videoId: "1",
    description: "High-end summer collection featuring vibrant colors and elegant silhouettes.",
    deliverables: ["5 Reels", "15 Photos", "Stories"],
    date: "2025-06-15",
    tags: ["fashion", "luxury", "summer"]
  },
  {
    id: "2",
    title: "Fitness Transformation",
    brand: "Wellness Brand",
    category: "Fitness",
    thumbnail: "/api/placeholder/400/300",
    videoId: "2",
    description: "90-day fitness journey showcasing transformation and lifestyle integration.",
    deliverables: ["3 Reels", "Before/After", "Testimonials"],
    date: "2025-08-20",
    tags: ["fitness", "wellness", "transformation"]
  },
  {
    id: "3",
    title: "Street Style Series",
    brand: "Urban Fashion",
    category: "Streetwear",
    thumbnail: "/api/placeholder/400/300",
    videoId: "3",
    description: "Edgy street style captures contemporary urban fashion trends.",
    deliverables: ["4 Reels", "12 Photos", "City Guide"],
    date: "2025-09-05",
    tags: ["streetwear", "urban", "contemporary"]
  },
  {
    id: "4",
    title: "Tech Product Launch",
    brand: "Innovation Labs",
    category: "Technology",
    thumbnail: "/api/placeholder/400/300",
    videoId: "4",
    description: "Minimalist tech product showcase focusing on design and functionality.",
    deliverables: ["2 Reels", "Product Photos", "Unboxing"],
    date: "2025-07-12",
    tags: ["technology", "minimalist", "innovation"]
  }
];

export const stats = [
  { value: "2M+", label: "Followers" },
  { value: "15M+", label: "Impressions" },
  { value: "500+", label: "Campaigns" },
  { value: "50+", label: "Brands" }
];

export const services = [
  {
    title: "Content Creation",
    description: "High-quality photos and videos tailored to your brand aesthetic",
    icon: "📸"
  },
  {
    title: "Brand Campaigns",
    description: "Comprehensive campaigns from concept to execution",
    icon: "🎯"
  },
  {
    title: "Product Photography",
    description: "Professional product shots with creative direction",
    icon: "📱"
  },
  {
    title: "Social Media Strategy",
    description: "Strategic content planning and audience engagement",
    icon: "📊"
  },
  {
    title: "Influencer Collaborations",
    description: "Partnership opportunities with engaged audiences",
    icon: "🤝"
  },
  {
    title: "Creative Consulting",
    description: "Brand consultation and creative direction services",
    icon: "💡"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We discuss your brand, goals, and vision for the collaboration"
  },
  {
    step: "02",
    title: "Creative Brief",
    description: "Detailed planning of concepts, deliverables, and timeline"
  },
  {
    step: "03",
    title: "Content Creation",
    description: "Professional photoshoot and video production sessions"
  },
  {
    step: "04",
    title: "Post-Production",
    description: "Expert editing and content preparation for your platforms"
  },
  {
    step: "05",
    title: "Delivery & Launch",
    description: "Final content delivery and coordinated social media launch"
  }
];

export const brands = [
  { name: "Nike", logo: "/api/placeholder/120/60" },
  { name: "Adidas", logo: "/api/placeholder/120/60" },
  { name: "Apple", logo: "/api/placeholder/120/60" },
  { name: "Gucci", logo: "/api/placeholder/120/60" },
  { name: "Zara", logo: "/api/placeholder/120/60" },
  { name: "H&M", logo: "/api/placeholder/120/60" }
];