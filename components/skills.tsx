"use client"

import { useState, useEffect } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "FastAPI", level: 75 },
        { name: "RESTful APIs", level: 90 },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 75 },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 95 },
      ],
    },
    {
      category: "Core Concepts",
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "System Design", level: 75 },
        { name: "OOP", level: 85 },
        { name: "Computer Networks", level: 80 },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const skillsSection = document.getElementById("skills")
    if (skillsSection) {
      observer.observe(skillsSection)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-6 border border-border rounded-lg bg-card">
              <h3 className="text-xl font-bold text-primary mb-6">{cat.category}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
