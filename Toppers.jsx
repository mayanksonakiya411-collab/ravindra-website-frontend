import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Toppers({ students }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex((prev) => (prev === 0 ? students.length - 1 : prev - 1));
  const handleNext = () => setActiveIndex((prev) => (prev === students.length - 1 ? 0 : prev + 1));

  return (
    <section id="results" className="mt-20">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Our selection</p>
          <h2 className="mt-3 text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">Successful candidates from Ravindra IAS.</h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="rounded-full border border-white/10 bg-slate-900/80 p-3 text-slate-200 transition hover:border-violet-300 hover:text-white light:bg-white/80 light:text-slate-900"
            aria-label="Previous topper"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-white/10 bg-slate-900/80 p-3 text-slate-200 transition hover:border-violet-300 hover:text-white light:bg-white/80 light:text-slate-900"
            aria-label="Next topper"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((student, studentIndex) => (
          <motion.article
            key={student.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: activeIndex === studentIndex ? 1 : 0.5, scale: activeIndex === studentIndex ? 1.02 : 0.98 }}
            transition={{ duration: 0.35 }}
            className={`glass-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glass transition-transform ${
              activeIndex === studentIndex ? 'lg:border-violet-400/40 lg:shadow-2xl' : ''
            }`}
          >
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-violet-500 to-blue-500" />
            <div className="relative space-y-5">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
                <img src={student.image} alt={student.name} className="h-64 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-4 py-2 text-sm font-semibold text-white">
                  {student.rank}
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-white light:text-slate-950">{student.name}</h3>
                <p className="text-sm leading-7 text-slate-300 light:text-slate-600">{student.quote}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
