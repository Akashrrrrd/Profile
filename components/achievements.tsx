export default function Achievements() {
  const achievements = [
    {
      title: "DocuSign Hackathon Winner",
      description: 'Secured "Most Valuable Project" award for developing an innovative, real-world solution.',
      award: "Won $100",
    },
    {
      title: "Nosu AI Hackathon Recognition",
      description: "Recognized for exceptional work in building AI-driven solutions.",
      award: "Appreciated",
    },
    {
      title: "Google Chrome AI Challenge & SIH Finalist",
      description: "Reached finals for developing a scalable, high-performance solution.",
      award: "Finalist",
    },
    {
      title: "Freelancing Milestone",
      description: "Delivered a production-level E-Learning Platform with excellent feedback.",
      award: "Earned ₹20,000",
    },
    {
      title: "Head of Web Development, Vidyutrenz Symposium",
      description: "Led a team to design an event platform handling 2,000+ registrations.",
      award: "Leadership",
    },
  ]

  const certifications = [
    "Digital Skills: Artificial Intelligence - Accenture via FutureLearn",
    "Introduction to Networks & Security - Cisco",
    "MongoDB for Developers - MongoDB University",
    "Cybersecurity Analyst Job Simulation - TCS Forage",
    "TCS iON Career Edge - Young Professional - TCS",
  ]

  return (
    <section id="achievements" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">Achievements & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Achievements</h3>
            <div className="space-y-6">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <h4 className="font-bold text-foreground pr-2">{achievement.title}</h4>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full self-start">
                      {achievement.award}
                    </span>
                  </div>
                  <p className="text-foreground/70 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex gap-3 p-4 bg-secondary/30 rounded-lg border border-border">
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-foreground/80">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
