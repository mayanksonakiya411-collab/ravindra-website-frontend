import { motion } from 'framer-motion';

export default function Videos({ items }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="glass-card overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-glass"
        >
          <div className="relative h-64 overflow-hidden bg-slate-900">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${item.videoId}`}
              title={item.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {item.live && (
              <div className="absolute top-4 left-4 rounded-full bg-rose-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-lg">
                Live
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold text-white light:text-slate-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300 light:text-slate-600">{item.description}</p>
              </div>
              <span className="rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-violet-200">
                {item.category}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300 light:bg-slate-200 light:text-slate-900">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
