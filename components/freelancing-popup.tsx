"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Mail, Phone, Building2, DollarSign, Briefcase } from "lucide-react"

export default function FreelancingPopup() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary border border-border rounded-lg hover:bg-secondary/80 hover:border-primary/50 transition-all font-medium cursor-pointer dark:bg-secondary dark:hover:bg-secondary/80 whitespace-nowrap">
          <Briefcase className="w-5 h-5" />
          Freelancing
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background dark:bg-background border-border dark:border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl text-foreground dark:text-foreground">
            <Briefcase className="w-6 h-6 text-primary" />
            Freelancing Opportunities
          </DialogTitle>
          <DialogDescription className="text-foreground/70 dark:text-foreground/70">
            I'm available for freelancing projects. Get in touch to discuss your requirements.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground dark:text-foreground flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              Contact Me
            </h3>
            <div className="space-y-3 pl-6">
              {/* Email */}
              <a
                href="mailto:aakashrajendran2004@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg border border-border dark:border-border hover:bg-secondary/50 dark:hover:bg-secondary/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all group"
              >
                <Mail className="w-4 h-4 text-foreground/60 dark:text-foreground/60 group-hover:text-primary" />
                <div className="flex-1">
                  <p className="text-xs text-foreground/60 dark:text-foreground/60">Email</p>
                  <p className="text-sm font-medium text-foreground dark:text-foreground group-hover:text-primary transition-colors break-all">
                    aakashrajendran2004@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919655667171"
                className="flex items-center gap-3 p-3 rounded-lg border border-border dark:border-border hover:bg-secondary/50 dark:hover:bg-secondary/50 hover:border-primary/50 dark:hover:border-primary/50 transition-all group"
              >
                <Phone className="w-4 h-4 text-foreground/60 dark:text-foreground/60 group-hover:text-primary" />
                <div className="flex-1">
                  <p className="text-xs text-foreground/60 dark:text-foreground/60">Phone</p>
                  <p className="text-sm font-medium text-foreground dark:text-foreground group-hover:text-primary transition-colors">
                    +91 9655667171
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Experience & Background */}
          <div className="space-y-4 pt-4 border-t border-border dark:border-border">
            <h3 className="font-semibold text-foreground dark:text-foreground flex items-center gap-2">
              <Building2 className="w-4 h-4 text-primary" />
              Experience
            </h3>
            <div className="space-y-3 pl-6">
              {/* Company */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 dark:bg-secondary/30">
                <Building2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60 dark:text-foreground/60">Company</p>
                  <p className="font-medium text-foreground dark:text-foreground">sVIOS Technologies</p>
                </div>
              </div>

              {/* Earnings */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 dark:bg-secondary/30">
                <DollarSign className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs text-foreground/60 dark:text-foreground/60">Earned</p>
                  <p className="font-medium text-foreground dark:text-foreground">Up to ₹20,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4 border-t border-border dark:border-border space-y-3">
            <a
              href="mailto:aakashrajendran2004@gmail.com?subject=Freelancing Inquiry"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 dark:hover:bg-primary/90 transition-colors font-medium"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="tel:+919655667171"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary dark:text-primary rounded-lg hover:bg-primary/10 dark:hover:bg-primary/10 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              Call Me
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
