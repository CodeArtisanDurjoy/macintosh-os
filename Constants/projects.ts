export interface Project {
  id: string;
  name: string;
  type: string;
  src: string;
  alt: string;
  url: string;
  description: string;
  technologies: string[];
  category: string;
  year: string;
  features: string[];
  isFavorite?: boolean;
}

export const projects: Project[] = [
  {
    id: "project-macos",
    name: "Macintosh OS (Portfolio)",
    type: "Personal Project",
    src: "https://pickholder.sirv.com/Images/macos.png",
    alt: "Macintosh OS portfolio",
    url: "#",
    description: "A portfolio site styled like classic Mac OS, designed for interactivity and nostalgia. Projects are presented as draggable apps, folders, and modals on a retro desktop interface.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Portfolio UI",
    year: "2025",
    features: [
      "Fully interactive Mac-style desktop",
      "Custom draggable windows and dock",
      "Responsive and mobile-optimized UI",
      "Smooth transitions and animations"
    ],
    isFavorite: true
  },
  {
    id: "project-climecache",
    name: "ClimeCache",
    type: "Personal Project",
    src: "https://pickholder.sirv.com/Images/weather.png",
    alt: "ClimeCache",
    url: "#",
    description: "An advanced weather dashboard with offline caching, location bookmarks, and user notes. Designed for users who want quick access to weather updates with a focus on productivity.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    category: "Utility App",
    year: "2025",
    features: [
      "Location bookmarking with persistent cache",
      "Offline support for recent weather data",
      "Weather notes tied to location",
      "Smooth UX and keyboard navigation"
    ],
    isFavorite: true
  },
  {
    id: "project-1",
    name: "Secret Room",
    type: "Personal Project",
    src: "https://pickholder.sirv.com/Images/thumbnail-main.png",
    alt: "Secret Room",
    url: "#",
    description: "A mystery-themed chat app that creates anonymous, self-destructing rooms. Built to explore secure communication and user interaction dynamics in real-time apps.",
    technologies: ["Next.js", "React", "Node.js", "Socket.IO", "CSS"],
    category: "Game / Real-time App",
    year: "2023",
    features: [
      "Real-time anonymous messaging",
      "Room expiration and auto-deletion",
      "Minimalist, interactive UI",
      "Lightweight and responsive"
    ],
    isFavorite: false
  },
  {
    id: "project-americare",
    name: "AmeriCare Landing Page",
    type: "Client Website",
    src: "https://pickholder.sirv.com/Images/americare.png",
    alt: "AmeriCare Website",
    url: "#",
    description: "A health-focused marketing website designed to promote AmeriCare's digital services. It features responsive design, contact forms, and easy-to-edit modular sections.",
    technologies: ["Next.js", "Tailwind CSS", "React Icons", "EmailJS"],
    category: "Client Work",
    year: "2024",
    features: [
      "Dynamic landing sections for services",
      "Contact form with EmailJS integration",
      "Mobile-friendly layout",
      "SEO-optimized structure"
    ],
    isFavorite: false
  },
  {
    id: "project-gh-explorer",
    name: "GitHub Repository Explorer",
    type: "Personal Project",
    src: "https://pickholder.sirv.com/Images/github.jpg",
    alt: "GitHub Repo Explorer",
    url: "#",
    description: "A web app that lets users search, filter, and explore public GitHub repositories by language, stars, and activity. Designed for devs who want a faster GitHub browsing experience.",
    technologies: ["Next.js", "Redux Toolkit", "Octokit", "TypeScript", "Tailwind CSS"],
    category: "Developer Tool",
    year: "2024",
    features: [
      "Live GitHub search using Octokit",
      "Star, language, and fork-based filtering",
      "Repository detail modals",
      "Favorites and recent search history"
    ],
    isFavorite: true
  },
  {
    id: "project-linktree",
    name: "Linktree Clone",
    type: "Personal Project",
    src: "https://pickholder.sirv.com/Images/my-linktree.png",
    alt: "Linktree Clone",
    url: "#",
    description: "A full Linktree clone with user registration, authentication, profile customization, and real-time preview. Built to test multi-user architecture and link management UX.",
    technologies: ["Next.js", "Tailwind CSS", "Zustand", "bad-words", "qrcode.react", "js-cookie"],
    category: "SaaS Clone",
    year: "2024",
    features: [
      "User account creation & login",
      "QR code link sharing",
      "Link preview with drag-and-drop",
      "Profanity filtering and confetti on save"
    ],
    isFavorite: false
  }
];

