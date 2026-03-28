import About from '../components/About';

export default function AboutPage() {
  return (
    <main className="layout py-20">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">About</p>
          <h1 className="text-4xl font-semibold text-white light:text-slate-950">Get to know Ravindra IAS</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600">
            Discover the coaching philosophy, mentor approach, and student-first culture that sets our UPSC programs apart.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <About />
      </div>
    </main>
  );
}
