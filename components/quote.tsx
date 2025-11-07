"use client"

import { useState, useEffect } from "react"

export default function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const quoteSection = document.getElementById("quote")
    if (quoteSection) {
      observer.observe(quoteSection)
    }

    return () => observer.disconnect()
  }, [])

  const questions = [
    { question: "Are you Software Engineer?", answer: "No" },
    { question: "Are you Software Architect?", answer: "No" },
    { question: "Are you Developer?", answer: "No" },
    { question: "Do you write code?", answer: "Yes" }
  ]

  return (
    <section id="quote" className="px-4 sm:px-6 py-20 sm:py-24 bg-secondary/20 relative">
      <div className="max-w-4xl mx-auto">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Philosophy</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {/* Clean Questions Layout */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {questions.map((item, idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-700`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center justify-between py-6 px-8 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300">
                  <span className="text-lg md:text-xl font-medium text-foreground">
                    {item.question}
                  </span>
                  <span className={`font-semibold text-lg px-4 py-2 rounded-md ${
                    item.answer === "Yes" 
                      ? "text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/30 dark:border-emerald-800" 
                      : "text-slate-600 bg-slate-50 border border-slate-200 dark:text-slate-400 dark:bg-slate-900/30 dark:border-slate-700"
                  }`}>
                    {item.answer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Elegant Philosophy Statement */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl"></div>
            <div className="relative bg-card/80 backdrop-blur-sm p-12 rounded-2xl border border-border shadow-lg">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed">
                "I don't chase <span className="font-semibold text-primary">titles</span>,
                <br className="hidden sm:block" />
                I chase <span className="font-bold text-primary">solutions</span>."
              </blockquote>
              
              {/* Attribution */}
              <div className="mt-8 pt-6 border-t border-border/50">
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-px bg-border"></div>
                  <span className="text-sm font-medium tracking-wider text-foreground/60 uppercase">Akash R</span>
                  <div className="w-12 h-px bg-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}