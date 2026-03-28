import { motion } from 'framer-motion';

export default function Courses({ courses, onEnroll }) {
  return (
    <section id="courses" className="mt-20">
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Courses designed for clarity</p>
          <h2 className="mt-3 text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">
            Choose the path that fits your UPSC ambition.
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-400 light:text-slate-600 sm:text-base">
          Flexible batch options and mentorship-led curriculums to keep you motivated and exam-ready.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {courses.map((course, index) => (
          <motion.article
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card group relative overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-glass hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute -right-6 top-6 h-20 w-20 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-violet-200">
                  {course.tag}
                </span>
                <span className="text-sm font-semibold text-white light:text-slate-950">{course.duration}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white light:text-slate-950">{course.title}</h3>
              <ul className="space-y-3 text-sm text-slate-300 light:text-slate-600">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-violet-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400 light:text-slate-500">Starting at</p>
                  <p className="text-2xl font-semibold text-white light:text-slate-950">{course.price}</p>
                </div>
                <button
                  onClick={onEnroll}
                  className="rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 group-hover:scale-[1.02]"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
