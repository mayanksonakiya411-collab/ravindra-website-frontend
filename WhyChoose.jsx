import { FiBookOpen, FiMap, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const icons = [FiUsers, FiTrendingUp, FiMap, FiBookOpen];

export default function WhyChoose({ features }) {
  return (
    <section className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Why choose us</p>
          <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">
            Every learning detail is designed to help you perform under pressure.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 light:text-slate-600">
            We combine expert faculty, structured tests, mentor check-ins and crisp study material to keep progress visible and every decision intentional.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = icons[index] || FiBookOpen;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-[1.75rem] p-6"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-violet-500/10 text-violet-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white light:text-slate-950">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
