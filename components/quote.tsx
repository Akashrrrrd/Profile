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
    <section id="quote" className="px-4 sm:px-6 py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Classic Typography Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="w-16 h-px bg-border mb-6"></div>
            <h2 className="text-sm font-medium tracking-[0.2em] text-foreground/60 uppercase mb-2">Philosophy</h2>
            <div className="w-16 h-px bg-border"></div>
          </div>
        </div>

        {/* Main Quote Block */}
        <div className="max-w-3xl mx-auto">
          {/* Opening Quote Mark */}
          <div className="text-center mb-8">
            <span className="text-6xl md:text-7xl font-serif text-primary/20 leading-none">"</span>
          </div>

          {/* Questions Grid */}
          <div className={`space-y-6 mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {questions.map((item, idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-700 delay-${idx * 150}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="flex items-center justify-between py-4 px-6 border-l-2 border-border bg-card/30 backdrop-blur-sm">
                  <span className="text-lg md:text-xl font-medium text-foreground tracking-wide">
                    {item.question}
                  </span>
                  <span className={`font-bold text-lg px-4 py-1 rounded-sm border ${
                    item.answer === "Yes" 
                      ? "text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-400 dark:border-emerald-800 dark:bg-emerald-950/30" 
                      : "text-slate-600 border-slate-200 bg-slate-50 dark:text-slate-400 dark:border-slate-700 dark:bg-slate-900/30"
                  }`}>
                    {item.answer}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy Statement */}
          <div className={`text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed tracking-wide">
              I don't chase <em className="font-medium text-primary not-italic">titles</em>,
              <br className="hidden sm:block" />
              I chase <em className="font-semibold text-primary not-italic">solutions</em>.
            </blockquote>
          </div>

          {/* Closing Quote Mark */}
          <div className="text-center mt-8">
            <span className="text-6xl md:text-7xl font-serif text-primary/20 leading-none">"</span>
          </div>

          {/* Attribution */}
          <div className={`text-center mt-8 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-4">
              <div className="w-8 h-px bg-border"></div>
              <span className="text-sm font-medium tracking-wider text-foreground/60 uppercase">Akash R</span>
              <div className="w-8 h-px bg-border"></div>
            </div>
          </div>
        </div>

        {/* Decorative Corner Elements */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-border opacity-30"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-border opacity-30"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-border opacity-30"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-border opacity-30"></div>
      </div>
    </section>
  )
}