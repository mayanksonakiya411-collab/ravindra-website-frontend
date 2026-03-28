import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const metricData = [
  { label: 'Students', value: 10000, suffix: '+' },
  { label: 'Selections', value: 500, suffix: '+' },
  { label: 'Years', value: 15, suffix: '+' },
];

export default function About() {
  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const duration = 1400;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(metricData.map((item) => Math.floor(item.value * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80 sm:p-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-violet-300"
          >
            About Ravindra IAS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-3xl font-semibold text-white sm:text-4xl light:text-slate-950"
          >
            Crafted for aspirants who want guidance, momentum and proven results.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600"
          >
            Ravindra IAS blends expert faculty, smart study systems and deep UPSC insights to help you stay ahead with confidence, consistency and clarity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {metricData.map((metric, index) => (
              <div key={metric.label} className="glass-card rounded-[1.75rem] p-6 text-center">
                <p className="text-4xl font-semibold text-white light:text-slate-950">{counts[index].toLocaleString()}{metric.suffix}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-900/70 shadow-glass"
          >
            <img
              src="https://ravindrasias.com/wp-content/uploads/2024/09/RAVINDRAS-INSTITUTE-1-1resize.png"
              alt="Ravindra's Institute logo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 backdrop-blur-xl text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Founder of Coaching</p>
              <h3 className="mt-2 text-2xl font-semibold">Ravindra Sir</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Founder of GS NCERT Course with a legacy of building aspirants through concept-first UPSC coaching.
              </p>
            </div>
          </motion.div>
          {[
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
          ].map((src, index) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * index }}
              className="relative overflow-hidden rounded-[2rem]"
            >
              <img src={src} alt="Ravindra IAS students" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
