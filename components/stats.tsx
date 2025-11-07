import AnimatedCounter from "./animated-counter"
import { Code, Users, Award, Coffee } from "lucide-react"

export default function Stats() {
  const stats = [
    {
      icon: Code,
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      description: "Full-stack applications built"
    },
    {
      icon: Users,
      value: 2000,
      suffix: "+",
      label: "Users Served",
      description: "Through various platforms"
    },
    {
      icon: Award,
      value: 5,
      suffix: "+",
      label: "Certifications",
      description: "Professional achievements"
    },
    {
      icon: Coffee,
      value: 100,
      suffix: "+",
      label: "Cups of Coffee",
      description: "Fuel for coding sessions"
    }
  ]

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon
            return (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mb-3 md:mb-4">
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1">{stat.label}</h3>
                <p className="text-xs md:text-sm text-foreground/60 px-1">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}