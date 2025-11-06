import { Mail, Linkedin, Github } from "lucide-react"
import ContactForm from "./contact-form"

export default function Contact() {
  return (
    <section id="connect" className="px-6 py-24 bg-secondary/30 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Let's Connect</h2>
        <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
          want to say hello, feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Send me a message</h3>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Get in touch</h3>
            <div className="space-y-6">
              <a
                href="mailto:aakashrajendran2004@gmail.com"
                className="group p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                  <p className="text-foreground/60">Email</p>
                </div>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors text-sm break-all">
                  aakashrajendran2004@gmail.com
                </p>
              </a>
              <a
                href="https://linkedin.com/in/aaakashrajendran"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Linkedin className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                  <p className="text-foreground/60">LinkedIn</p>
                </div>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">aaakashrajendran</p>
              </a>
              <a
                href="https://github.com/Akashrrrrd"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Github className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                  <p className="text-foreground/60">GitHub</p>
                </div>
                <p className="font-bold text-foreground group-hover:text-primary transition-colors">Akashrrrrd</p>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-foreground/60">© 2025 Akash R. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
