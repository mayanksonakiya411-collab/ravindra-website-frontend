import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Courses from '../components/Courses';
import WhyChoose from '../components/WhyChoose';
import Locations from '../components/Locations';
import { courses, features, locations, stats } from '../data/content';

const sections = [
  {
    title: 'About Ravindra IAS',
    description: 'Learn about our teaching philosophy, founder and approach to UPSC success.',
    href: '/about',
  },
  {
    title: 'Courses',
    description: 'Explore our UPSC program details, duration, and pricing for every stage.',
    href: '/courses',
  },
  {
    title: 'Results',
    description: 'See the toppers and success stories from recent UPSC batches.',
    href: '/results',
  },
  {
    title: 'Videos',
    description: 'Watch live classes and featured coaching videos from Ravindra IAS.',
    href: '/videos',
  },
  {
    title: 'Resources',
    description: 'Access current affairs, notes and test series designed for UPSC excellence.',
    href: '/resources',
  },
  {
    title: 'FAQ',
    description: 'Get clear answers to the most common questions about our programs.',
    href: '/faq',
  },
  {
    title: 'Contact',
    description: 'Book an enrollment call and connect with our admissions team.',
    href: '/contact',
  },
];

export default function HomePage({ onEnroll }) {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      setCounts(stats.map((stat) => Math.floor(stat.value * progress)));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const formatValue = (value, suffix) => `${value}${suffix}`;

  return (
    <main className="relative overflow-hidden">
      <Hero onEnroll={onEnroll} />

      <section className="layout py-16">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-center shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
              <p className="text-3xl font-semibold text-white light:text-slate-950">{formatValue(counts[index], stat.suffix)}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-400 light:text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="layout py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Featured programs</p>
            <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">
              High-impact UPSC programs built to deliver results.
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-300 light:text-slate-600">
              Our coaching is structured around clear milestones and exam-focused delivery, so each aspirant moves forward with confidence.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
            <h3 className="text-lg font-semibold text-white light:text-slate-950">Ready for a rank-winning plan?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300 light:text-slate-600">
              Speak with our admissions team to get your personalized program recommendation and batch schedule.
            </p>
            <button
              onClick={onEnroll}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:scale-[1.02]"
            >
              Book free counselling
            </button>
          </div>
        </div>
      </section>

      <Courses courses={courses.slice(0, 3)} onEnroll={onEnroll} />

      <section className="layout py-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Batch intake</p>
              <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">
                Join the next upcoming batch or choose online coaching from anywhere.
              </h2>
              <p className="max-w-xl text-base leading-7 text-slate-300 light:text-slate-600">
                Flexible schedules, dedicated mentor support, and a proven preparation ecosystem designed for modern UPSC aspirants.
              </p>
            </div>
            <div className="space-y-4 rounded-[2rem] bg-slate-900/90 p-6 text-slate-300 light:bg-slate-100/90 light:text-slate-700">
              <p className="font-semibold uppercase tracking-[0.3em] text-violet-300">Open batches</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xl font-semibold text-white light:text-slate-950">GS PCM 2027</p>
                  <p className="mt-1 text-sm">Classroom + live online • Starts June 2026</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white light:text-slate-950">Mains Test Series 2027</p>
                  <p className="mt-1 text-sm">Online batch • Rolling admissions</p>
                </div>
                <div>
                  <p className="text-xl font-semibold text-white light:text-slate-950">Interview Guidance</p>
                  <p className="mt-1 text-sm">Limited seats • Personalized mentorship</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChoose features={features} />
      <Locations locations={locations} />

      <section className="layout py-16">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
          <div className="mb-8 grid gap-6 md:grid-cols-3">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Explore</p>
              <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">Quick access to your next step.</h2>
              <p className="max-w-lg text-base leading-8 text-slate-300 light:text-slate-600">
                Navigate directly to the pages that help you decide fast—courses, results, live videos, resources and contact.
              </p>
            </div>
            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              {sections.slice(0, 4).map((section) => (
                <Link
                  key={section.href}
                  to={section.href}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-white transition hover:border-violet-400 hover:bg-slate-950/90 light:bg-white/90 light:text-slate-950"
                >
                  <h3 className="text-xl font-semibold">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {sections.slice(4).map((section) => (
              <Link
                key={section.href}
                to={section.href}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 text-white transition hover:border-violet-400 hover:bg-slate-950/90 light:bg-white/90 light:text-slate-950"
              >
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
