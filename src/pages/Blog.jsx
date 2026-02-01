import { resume } from '../data/content'

export default function Blog() {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="absolute top-0 left-0">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x leading-none">
          Blog
        </h1>
        <p className="text-base lg:text-lg text-primary font-medium tracking-wide flex items-center gap-2 mt-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Thoughts on building, product, and technology.
        </p>
      </div>

      {/* Blog posts placeholder - centered */}
      <div className="text-center">
        <p className="text-muted-foreground text-sm">Coming soon...</p>
        <p className="text-muted-foreground/60 text-xs mt-1">Check back for updates</p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 pt-3 border-t border-border/20">
        <p className="text-[10px] text-muted-foreground/60 text-center">
          © {new Date().getFullYear()} {resume.name}
        </p>
      </div>
    </div>
  )
}
