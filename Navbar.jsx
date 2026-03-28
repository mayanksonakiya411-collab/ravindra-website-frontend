import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

const logoUrl = 'https://ravindrasias.com/wp-content/uploads/2024/09/RAVINDRAS-INSTITUTE-1-1resize.png';

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/results' },
  { label: 'Videos', href: '/videos' },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

const anchors = [];

export default function Navbar({ theme, setTheme, onEnroll }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl transition-colors duration-500 light:bg-white/90">
      <div className="layout flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-white hover:text-violet-300 light:text-slate-950">
          <img src={logoUrl} alt="Ravindra IAS Logo" className="h-10 w-auto rounded-full border border-white/10 bg-white/10 object-contain" />
          <span className="text-xl font-semibold tracking-tight">Ravindra IAS</span>
        </Link>
        <button
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/70 p-3 text-slate-200 transition hover:border-violet-300 hover:text-white md:hidden light:bg-white/80 light:text-slate-950"
          aria-label="Toggle menu"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-slate-300 light:text-slate-700 transition hover:text-white light:hover:text-slate-950">
              {link.label}
            </Link>
          ))}
          {anchors.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-300 light:text-slate-700 transition hover:text-white light:hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full border border-slate-700/60 bg-slate-900/60 p-3 text-slate-200 transition hover:border-violet-300/70 hover:text-violet-200 light:bg-white/70 light:text-slate-950"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
          </button>
          <button
            onClick={onEnroll}
            className="rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:scale-[1.02]"
          >
            Enroll Now
          </button>
        </div>
      </div>
      {open && (
        <div className="layout rounded-b-[2rem] border-t border-white/10 bg-slate-950/95 p-5 backdrop-blur-xl md:hidden light:bg-white/95">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-violet-500/10 hover:text-white light:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            {anchors.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-violet-500/10 hover:text-white light:text-slate-900"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="rounded-full border border-slate-700/60 bg-slate-900/60 p-3 text-slate-200 transition hover:border-violet-300/70 hover:text-violet-200 light:bg-white/70 light:text-slate-950"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
              </button>
              <button
                onClick={() => {
                  setOpen(false);
                  onEnroll();
                }}
                className="flex-1 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
