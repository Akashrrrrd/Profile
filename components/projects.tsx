"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Eye } from "lucide-react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "MailSense - Smart Email Assistant",
      description:
        "Secure email system with Google OAuth, Gmail API integration, email classification using Python ML module, and WhatsApp notifications via Twilio.",
      technologies: ["Node.js", "React", "Gmail API", "Python", "Twilio", "Firebase"],
      link: "https://mailsense-omega.vercel.app/",
      github: "https://github.com/Akashrrrrd/MailSense",
      image: "/Project-1.png",
      highlights: ["Google OAuth Integration", "ML-powered Email Classification", "WhatsApp Notifications"],
      category: "Full Stack",
    },
    {
      title: "SyncOps - Real-time Collaboration",
      description:
        "High-performance real-time data processing platform using FastAPI and async I/O, handling 100+ data streams with sub-100ms latency.",
      technologies: ["FastAPI", "Python", "PostgreSQL", "WebSockets", "React"],
      link: "https://sync-ops-xvfz.vercel.app/",
      github: "https://github.com/Akashrrrrd/SyncOps",
      image: "/Project-2.png",
      highlights: ["100+ Data Streams", "40% Performance Boost", "Sub-100ms Latency"],
      category: "Backend",
    },
    {
      title: "TruthGuard - AI Data Analysis Tool",
      description:
        "Leverages MongoDB Vector Search for context-based content analysis on large unstructured data with asynchronous ingestion system handling 10GB+ data.",
      technologies: ["MongoDB", "Vector Search", "Node.js", "AI/ML", "React"],
      link: "https://truthguard-io.vercel.app/",
      github: "https://github.com/Akashrrrrd/TruthGuard",
      image: "/Project-3.png",
      highlights: ["Vector Search", "Async Data Ingestion", "10GB+ Data Handling"],
      category: "AI/ML",
    },
    {
      title: "OpenPrep - Placement Preparation",
      description:
        "Collaborative learning platform serving 1,500+ active users with company-specific resources, structured coding paths, and interview materials.",
      technologies: ["React", "Node.js", "MongoDB", "Real-time Updates", "Express"],
      link: "https://open-prepio.vercel.app/",
      github: "https://github.com/Akashrrrrd/OpenPrep",
      image: "/Project-4.png",
      highlights: ["1,500+ Active Users", "Real-time Content System", "Curated Resources"],
      category: "Full Stack",
    },
  ]

  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">Featured Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden border border-border rounded-xl bg-card hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay with Actions */}
                <div className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredProject === idx ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Eye className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>

                <p className="text-foreground/70 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs text-foreground/60 px-2 py-1 border border-border rounded bg-secondary/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Akashrrrrd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors font-medium"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
