export default function Experience() {
  const experiences = [
    {
      company: "PrepInsta",
      location: "Online",
      title: "Full Stack Developer Intern",
      date: "Jul 2024 - Aug 2024",
      highlights: [
        "Built backend modules with Node.js and Express.js, creating REST APIs and optimizing SQL queries",
        "Implemented secure login with authentication features and integrated MongoDB with Python automation",
        "Achieved near-zero downtime during development with improved error handling",
      ],
    },
    {
      company: "Internshala Trainings",
      location: "Online",
      title: "Web Development Training",
      date: "May 2024 - Jun 2024",
      highlights: [
        "Completed comprehensive 8-week online training on Web Development",
        "Gained expertise in HTML, CSS, Bootstrap, MySQL, PHP, JS, React, and Final Project modules",
        "Successfully completed all training modules and received certification",
      ],
    },
    {
      company: "CodeBind Technologies",
      location: "T-Nagar, Chennai",
      title: "Web Developer Intern",
      date: "Nov 2023 - Dec 2023",
      highlights: [
        "Designed and developed an Online Ticket Booking Platform from scratch",
        "Implemented database structures and CRUD operations in PostgreSQL",
        "Optimized queries using indexing and automated tasks with Python scripts",
      ],
    },
  ]

  return (
    <section id="experience" className="px-6 py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-foreground/60">{exp.location}</p>
                </div>
                <p className="text-foreground/60 font-medium whitespace-nowrap">{exp.date}</p>
              </div>

              <ul className="space-y-3 ml-0 md:ml-0">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-4 text-foreground/70 leading-relaxed">
                    <span className="text-primary font-bold mt-1 flex-shrink-0">›</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {idx < experiences.length - 1 && <div className="border-t border-border my-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
