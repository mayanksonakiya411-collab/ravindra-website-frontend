import { FiSearch } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function Resources({ items, query, onSearch }) {
  return (
    <section id="resources" className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Study resources</p>
          <h2 className="mt-3 text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">Power-packed materials for strong preparation.</h2>
        </div>
        <label className="relative block w-full max-w-sm">
          <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={query}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search resources"
            className="w-full rounded-full border border-slate-700/60 bg-slate-950/80 py-3 pl-12 pr-4 text-sm text-slate-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 light:border-slate-300/50 light:bg-white/80 light:text-slate-900"
          />
        </label>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {items.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -6 }}
            className="glass-card rounded-[1.75rem] p-6"
          >
            <h3 className="text-xl font-semibold text-white light:text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{item.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
