import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero({ onEnroll }) {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_35%)] py-24 sm:py-32">
      <div className="layout relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full bg-slate-900/80 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-200 shadow-glass light:bg-white/80 light:text-slate-950"
          >
            Batch open • limited seats • 2026 enrolment
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-5"
          >
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl light:text-slate-950">
              Build your UPSC success story with Ravindra IAS.
            </h1>
            <p className="max-w-xl text-lg text-slate-300 sm:text-xl light:text-slate-600">
              Premium UPSC preparation with focused mentoring, live classrooms, and an exam-ready system designed for rank-winning performance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={onEnroll}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:scale-[1.02]"
            >
              Book Free Counselling
            </button>
            <Link
              to="/courses"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/70 bg-slate-950/80 px-8 py-4 text-base font-semibold text-white transition hover:border-violet-300/80 hover:text-violet-200 light:border-slate-200/50 light:bg-white/80 light:text-slate-950"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative rounded-[2rem] border border-violet-500/15 bg-gradient-to-br from-slate-900/80 via-slate-950/80 to-slate-900/90 p-6 shadow-glass light:border-blue-200/15 light:bg-white/80"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),transparent_30%)]" />
          <div className="relative space-y-6">
            <div className="flex flex-wrap items-center gap-4 rounded-3xl bg-slate-950/70 p-4 shadow-xl shadow-slate-950/20 light:bg-slate-100/80">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <span className="text-xl font-semibold">80+</span>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 light:text-slate-500">UPSC toppers</p>
                <p className="text-lg font-semibold text-white light:text-slate-950">Rank-winning guidance</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Live classroom sessions', value: '20+ batches' },
                { label: 'Personal mentor reviews', value: 'Weekly insights' },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-700/30 bg-slate-950/70 p-5 light:border-slate-300/20 light:bg-white/80">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">{item.label}</p>
                  <p className="mt-3 text-xl font-semibold text-white light:text-slate-950">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-3 rounded-[1.75rem] bg-slate-900/80 p-5 text-sm text-slate-300 shadow-inner shadow-slate-950/30 light:bg-slate-100/90 light:text-slate-700">
              <p className="font-medium text-white light:text-slate-950">Why choose Ravindra IAS</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                <li>Structured exam-specific training</li>
                <li>Focused answers and current affairs</li>
                <li>Mentor-led doubt resolution</li>
                <li>Online & classroom mode available</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
