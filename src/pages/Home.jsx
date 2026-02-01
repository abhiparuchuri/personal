import { useState } from 'react'
import { Link } from 'react-router-dom'
import { resume } from '../data/content'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Home() {
  const [hoveredJob, setHoveredJob] = useState(null)

  return (
    <div className="flex flex-col lg:flex-row gap-3 w-full h-full">

      {/* ── LEFT IDENTITY PANEL ── */}
      <div className="glass-card lg:w-[38%] xl:w-[36%] lg:flex-shrink-0 p-5 lg:p-7 flex flex-col">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x leading-none">
            {resume.name}
          </h1>
          <p className="text-base lg:text-lg text-primary font-medium tracking-wide flex items-center gap-2 mt-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            {resume.title}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-sm">
            {resume.summary}
          </p>
        </div>

        <div className="flex items-center gap-2 mt-5">
          {resume.links.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              size="sm"
              className={`transition-all h-9 text-sm ${
                link.label === 'LinkedIn'
                  ? 'bg-[#0077B5] border-[#0077B5]/50 text-white hover:bg-[#0077B5]/90'
                  : 'backdrop-blur-md bg-card/30 border-border/50 hover:bg-card/50 hover:border-primary/50 hover:text-primary'
              }`}
              asChild
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>

        {/* Socials + Copyright pushed to bottom */}
        <div className="mt-auto pt-8">
          <div className="flex items-center gap-3 mb-4">
            <a href="https://linkedin.com/in/abhiparuchuri" target="_blank" rel="noopener noreferrer" className="group" title="LinkedIn">
              <div className="w-8 h-8 rounded-full bg-[#0077B5] flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(0,119,181,0.4)]">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
            <a href={`https://instagram.com/${resume.social?.instagram || ''}`} target="_blank" rel="noopener noreferrer" className="group" title="Instagram">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(225,48,108,0.4)]">
                <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </a>
            <a href={`https://twitter.com/${resume.social?.twitter || ''}`} target="_blank" rel="noopener noreferrer" className="group" title="Twitter / X">
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.2)]">
                <svg className="w-3.5 h-3.5 text-background" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; {new Date().getFullYear()} {resume.name}
          </p>
        </div>
      </div>

      {/* ── RIGHT CONTENT PANEL ── */}
      <div className="flex-1 flex flex-col gap-3 min-h-0">

        {/* Education + Skills Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Education */}
          <div className="glass-card p-4 sm:w-[40%] sm:flex-shrink-0">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 flex items-center gap-2">
              Education
              <span className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></span>
            </h2>
            <p className="font-semibold text-foreground text-base leading-tight">{resume.education.degree}</p>
            <p className="text-sm text-primary mt-0.5 font-medium">{resume.education.school}</p>
            <p className="text-xs text-muted-foreground/70 mt-1">{resume.education.year}</p>
          </div>

          {/* Skills */}
          <div className="glass-card p-4 flex-1">
            <h2 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-2 flex items-center gap-2">
              Skills
              <span className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {resume.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-gradient-to-r from-card/40 to-card/15 border-border/30 hover:from-card/55 hover:to-card/25 hover:border-primary/40 transition-all text-sm text-foreground cursor-default px-3 py-1.5 rounded-lg"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* ── EXPERIENCE TIMELINE ── */}
        <div className="glass-card p-4 lg:p-5 flex-1 flex flex-col min-h-0">
          <h2 className="font-display text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3 flex items-center gap-2">
            Experience
            <span className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent"></span>
          </h2>
          <div className="flex-1 flex flex-col justify-between relative pl-5">
            {/* Timeline vertical line */}
            <div className="absolute left-[4px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"></div>

            {resume.experience.map((job, i) => (
              <div
                key={i}
                className={`relative group cursor-pointer py-2 pl-4 rounded-r-lg transition-all ${
                  hoveredJob === i
                    ? 'bg-primary/5 border-l-2 border-l-primary/60 -ml-px'
                    : 'border-l-2 border-l-transparent -ml-px'
                }`}
                onMouseEnter={() => setHoveredJob(i)}
                onMouseLeave={() => setHoveredJob(null)}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-[9px] top-3 w-[10px] h-[10px] rounded-full border-2 transition-all ${
                  hoveredJob === i
                    ? 'bg-primary border-primary shadow-[0_0_8px_hsl(175_85%_42%/0.6)]'
                    : 'bg-background border-primary/40'
                }`} />

                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                      {job.role}
                      <span className="text-muted-foreground font-normal"> at </span>
                      <span className="text-primary">{job.company}</span>
                    </h3>
                    <p className={`text-xs mt-0.5 transition-colors line-clamp-1 ${
                      hoveredJob === i ? 'text-foreground/70' : 'text-muted-foreground'
                    }`}>
                      {job.points[0]}
                    </p>
                  </div>
                  <span className="text-[11px] text-muted-foreground/70 whitespace-nowrap flex-shrink-0 mt-0.5">{job.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── CONTACT CTA ── */}
        <div className="glass-card p-4 flex items-center justify-between !bg-gradient-to-r !from-card/50 !via-card/30 !to-accent/5">
          <p className="text-sm text-muted-foreground/50 italic">send me a message!</p>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/90 text-white shadow-md hover:shadow-accent/25 transition-all h-9 text-sm"
            asChild
          >
            <Link to="/contact">
              <Mail className="mr-1.5 h-3.5 w-3.5" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
