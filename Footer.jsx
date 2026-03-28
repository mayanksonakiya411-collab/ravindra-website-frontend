import { FiMail, FiPhone, FiInstagram, FiYoutube, FiLinkedin, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 px-6 py-12 text-slate-300 light:bg-white/90 light:text-slate-700">
      <div className="layout grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white light:text-slate-950">Ravindra IAS</h3>
          <p className="max-w-md text-sm leading-7 text-slate-400 light:text-slate-600">
            Professional UPSC coaching with a strong success record, student-first mentorship, and modern classroom plus online delivery.
          </p>
          <div className="flex items-center gap-4 text-slate-300 light:text-slate-600">
            <FiInstagram className="h-5 w-5" />
            <FiYoutube className="h-5 w-5" />
            <FiLinkedin className="h-5 w-5" />
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Explore</p>
          <div className="mt-4 grid gap-2 text-sm text-slate-300 light:text-slate-600">
            <a href="/about" className="transition hover:text-white">About</a>
            <a href="/courses" className="transition hover:text-white">Courses</a>
            <a href="/results" className="transition hover:text-white">Results</a>
            <a href="/videos" className="transition hover:text-white">Videos</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300 light:text-slate-600">
            <p className="flex items-center gap-2"><FiPhone className="h-4 w-4" /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><FiMail className="h-4 w-4" /> support@ravindriais.co.in</p>
            <p className="flex items-center gap-2"><FiMapPin className="h-4 w-4" /> Old Rajinder Nagar, New Delhi</p>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500 light:text-slate-500">
        © 2026 Ravindra IAS. All rights reserved.
      </div>
    </footer>
  );
}
