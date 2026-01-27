import { useState } from 'react'
import { resume } from '../data/content'
import { Button } from '../components/ui/button'
import { ArrowUpRight, Copy, Check } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(resume.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-6">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x leading-none">
          Contact
        </h1>
        <p className="text-base lg:text-lg text-primary font-medium tracking-wide flex items-center gap-2 mt-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Let's connect and build something together.
        </p>
      </div>

      {/* Contact content - centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md">
          <p className="text-muted-foreground text-sm mb-4">
            mailto: <span className="text-primary">sucks</span>, so here's my email
          </p>

          <div
            onClick={copyEmail}
            className="group cursor-pointer backdrop-blur-xl bg-gradient-to-br from-card/50 to-card/20 border border-border/30 px-6 py-4 rounded-xl hover:border-primary/50 transition-all mb-4"
          >
            <p className="font-display text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {resume.email}
            </p>
            <p className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-primary" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3 w-3" />
                  Click to copy
                </>
              )}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            {resume.links.map((link) => (
              <Button
                key={link.label}
                variant={link.label === 'LinkedIn' ? 'default' : 'outline'}
                size="sm"
                className={
                  link.label === 'LinkedIn'
                    ? 'bg-[#0077B5] hover:bg-[#006399] text-white border-none transition-all'
                    : 'backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 hover:border-primary/50 hover:text-primary transition-all'
                }
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 mt-auto border-t border-border/20">
        <p className="text-[10px] text-muted-foreground/60 text-center">
          © {new Date().getFullYear()} {resume.name}
        </p>
      </div>
    </div>
  )
}
