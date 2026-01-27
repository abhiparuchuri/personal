import { Routes, Route, NavLink, Link } from 'react-router-dom'
import { resume } from './data/content'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <div className="h-screen bg-background flex flex-col overflow-hidden">
      {/* Multi-layer animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-dot-grid opacity-15" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,hsl(175_85%_42%/0.2),transparent_70%)] blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[radial-gradient(circle,hsl(15_90%_60%/0.15),transparent_70%)] blur-3xl animate-float-delayed" />
      </div>

      {/* Navbar */}
      <nav className="flex-shrink-0 px-4 lg:px-8 xl:px-12 py-4 border-b border-border/20 backdrop-blur-md bg-background/50 relative z-20">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link to="/" className="font-display text-lg font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-x">
            {resume.name.split(' ')[0]}
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-8 lg:px-16 xl:px-24 pt-6 lg:pt-8 pb-4 lg:pb-6 relative z-10 overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
