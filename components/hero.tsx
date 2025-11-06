import { Linkedin, Github, Download } from "lucide-react"
import TypingAnimation from "./typing-animation"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">Akash R</h1>
            <div className="text-xl sm:text-2xl md:text-3xl text-primary font-medium h-10 sm:h-12 flex items-center">
              <TypingAnimation
                texts={[
                  "Full Stack Developer",
                  "React.js Enthusiast",
                  "Node.js Developer",
                  "Problem Solver"
                ]}
              />
            </div>
          </div>

          <p className="text-lg text-foreground/70 leading-relaxed max-w-lg">
            I'm a passionate full-stack developer specializing in building high-performance web applications with
            Node.js, React, and cloud technologies. Currently pursuing BE in Electronics and Communication from Chennai
            Institute of Technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="/Akashr's Resume.pdf"
              download="Akashr's Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>

            <div className="flex gap-4 justify-center sm:justify-start">
              <a
                href="https://linkedin.com/in/aaakashrajendran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/Akashrrrrd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-border rounded-lg hover:bg-secondary hover:border-primary transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg blur-3xl"></div>
            <div className="relative bg-secondary p-8 rounded-lg border border-border">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <code className="text-sm text-foreground/70">
                  <div>{"const developer = {"}</div>
                  <div className="ml-4">
                    name: <span className="text-accent">'Akash R'</span>,
                  </div>
                  <div className="ml-4">
                    role: <span className="text-accent">'Full Stack Developer'</span>,
                  </div>
                  <div className="ml-4">
                    passion: <span className="text-accent">'Building scalable solutions'</span>,
                  </div>
                  <div className="ml-4">
                    location: <span className="text-accent">'Chennai, India'</span>,
                  </div>
                  <div>{"}"}</div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
