export default function Education() {
  const education = [
    {
      institution: "Chennai Institute of Technology",
      degree: "BE in Electronics and Communication",
      date: "2022 - 2026",
      status: "Currently Pursuing",
      cgpa: "8.4/10",
    },
    {
      institution: "Sri Divya Chaitanya Matric Higher Secondary School",
      degree: "12th (HSLC)",
      date: "2022",
      percentage: "92.5%",
      marks: "556/600",
    },
    {
      institution: "Sri Divya Chaitanya Matric Higher Secondary School",
      degree: "10th (SSLC)",
      date: "2020",
      percentage: "96%",
      marks: "480/500",
    },
  ]

  return (
    <section id="education" className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">Education</h2>

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <p className="text-lg text-primary font-medium">{edu.institution}</p>
                </div>
                <p className="text-foreground/60 font-medium whitespace-nowrap">{edu.date}</p>
              </div>

              <div className="ml-0 md:ml-0">
                {edu.status && (
                  <p className="text-foreground/70 leading-relaxed">
                    <span className="text-primary font-bold">›</span> {edu.status}
                  </p>
                )}
                {edu.cgpa && (
                  <p className="text-foreground/70 leading-relaxed">
                    <span className="text-primary font-bold">›</span> CGPA: {edu.cgpa}
                  </p>
                )}
                {edu.percentage && (
                  <p className="text-foreground/70 leading-relaxed">
                    <span className="text-primary font-bold">›</span> Percentage: {edu.percentage} ({edu.marks})
                  </p>
                )}
              </div>

              {idx < education.length - 1 && <div className="border-t border-border my-8"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}