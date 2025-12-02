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
    title: "Jasprit Bumrah — Body Double Campaign",
    caption: "Professional body double for sports brand commercial",
    deliverables: ["Body Double Work", "Movement Replication"],
    thumbnail: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    date: "2025-10-15"
  },
  {
    id: "2",
    youtubeId: "9bZkp7q19f0",
    title: "Hardik Pandya — Training Sequence",
    caption: "Athletic movement replication for fitness brand",
    deliverables: ["Body Double", "Action Sequences"],
    thumbnail: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
    date: "2025-08-20"
  },
  {
    id: "3",
    youtubeId: "3JZ_D3ELwOQ",
    title: "Sports Commercial — Cricket Action",
    caption: "Professional cricket movement and posture matching",
    deliverables: ["Technical Movements", "Camera Setup"],
    thumbnail: "https://i.ytimg.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
    date: "2025-09-05"
  },
  {
    id: "4",
    youtubeId: "L_jWHffIx5E",
    title: "Digital Campaign — Behind the Scenes",
    caption: "Body double preparation and execution process",
    deliverables: ["Behind the Scenes", "Technical Setup"],
    thumbnail: "https://i.ytimg.com/vi/L_jWHffIx5E/hqdefault.jpg",
    date: "2025-07-12"
  }
];

export const seedProjects: Project[] = [
  {
    id: "1",
    title: "Jasprit Bumrah Sports Campaign",
    brand: "Leading Sports Brand",
    category: "Sports Commercial",
    thumbnail: "/api/placeholder/400/300",
    videoId: "1",
    description: "Official body double work for Jasprit Bumrah across multiple commercial campaigns featuring precise bowling action and athletic movement replication.",
    deliverables: ["Body Double Performance", "Movement Coordination", "Camera Setup"],
    date: "2025-06-15",
    tags: ["cricket", "body-double", "sports", "jasprit-bumrah"]
  },
  {
    id: "2",
    title: "Hardik Pandya Fitness Series",
    brand: "Premium Fitness Brand",
    category: "Athletic Campaign",
    thumbnail: "/api/placeholder/400/300",
    videoId: "2",
    description: "Complete body double representation for Hardik Pandya's fitness campaign, replicating training sequences and athletic movements with precision.",
    deliverables: ["Training Sequences", "Athletic Movements", "Posture Matching"],
    date: "2025-08-20",
    tags: ["fitness", "body-double", "hardik-pandya", "athletic"]
  },
  {
    id: "3",
    title: "Cricket World Cup Promotional",
    brand: "Sports Broadcasting Network",
    category: "Event Promotion",
    thumbnail: "/api/placeholder/400/300",
    videoId: "3",
    description: "Professional body double work for cricket tournament promotional materials featuring technical cricket movements and player positioning.",
    deliverables: ["Technical Cricket Skills", "Player Positioning", "Lighting Tests"],
    date: "2025-09-05",
    tags: ["cricket", "tournament", "promotional", "technical-skills"]
  },
  {
    id: "4",
    title: "Athletic Wear Digital Campaign",
    brand: "Premium Sportswear Company",
    category: "Digital Media",
    thumbnail: "/api/placeholder/400/300",
    videoId: "4",
    description: "Comprehensive body double work for digital campaign focusing on athletic movements and sportswear functionality demonstrations.",
    deliverables: ["Movement Replication", "Product Demonstration", "Digital Content"],
    date: "2025-07-12",
    tags: ["sportswear", "digital", "movement", "product-demo"]
  },
  {
    id: "5",
    title: "Instagram Growth Achievement 2025",
    brand: "Personal Brand - @jr.hardikpandyaa93",
    category: "Social Media",
    thumbnail: "/api/placeholder/400/300",
    videoId: "5",
    description: "Reached 703K followers on Instagram showcasing body double work and athletic content. Featured engagement from sports community and growing international audience.",
    deliverables: ["Content Creation", "Audience Growth", "Brand Building", "Community Engagement"],
    date: "2025-12-02",
    tags: ["instagram", "social-media", "growth", "body-double", "milestone"]
  }
];

export const stats = [
  { value: "703K", label: "Instagram Followers" },
  { value: "50+", label: "Projects as Body Double" },
  { value: "6+", label: "Years Experience" },
  { value: "2", label: "Major Cricket Stars" }
];

export const services = [
  {
    title: "Body Double Performance",
    description: "Professional body double services with precise posture matching and movement replication",
    icon: "🎭"
  },
  {
    title: "Stunt Double Work",
    description: "Safe and professional stunt coordination for athletic movements and action sequences",
    icon: "🏃"
  },
  {
    title: "Movement Coaching",
    description: "Athletic movement replication and technical skill demonstration for film/commercials",
    icon: "🎯"
  },
  {
    title: "Camera Setup & Lighting",
    description: "Expert assistance with lighting tests, shadow alignment, and camera measurement",
    icon: "📷"
  },
  {
    title: "Athlete Consultation",
    description: "Technical consultation for cricket movements and athletic performance representation",
    icon: "🏏"
  },
  {
    title: "Production Support",
    description: "Complete pre-production and on-set support for sports and athletic campaigns",
    icon: "🎬"
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Project Assessment",
    description: "Detailed analysis of body double requirements and athletic movement specifications"
  },
  {
    step: "02",
    title: "Physical Matching",
    description: "Posture analysis, body type matching, and movement capability assessment"
  },
  {
    step: "03",
    title: "Technical Preparation",
    description: "Movement rehearsal, camera positioning coordination, and lighting test participation"
  },
  {
    step: "04",
    title: "On-Set Performance",
    description: "Professional body double execution with precise movement replication and technical accuracy"
  },
  {
    step: "05",
    title: "Project Completion",
    description: "Final review, additional takes if required, and project handover"
  }
];

export const brands = [
  { name: "Star Sports", logo: "/api/placeholder/120/60" },
  { name: "Sony Sports", logo: "/api/placeholder/120/60" },
  { name: "Nike Cricket", logo: "/api/placeholder/120/60" },
  { name: "Adidas Cricket", logo: "/api/placeholder/120/60" },
  { name: "BCCI", logo: "/api/placeholder/120/60" },
  { name: "IPL", logo: "/api/placeholder/120/60" }
];