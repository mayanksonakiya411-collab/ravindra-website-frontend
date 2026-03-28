import FAQ from '../components/FAQ';
import { faqs } from '../data/content';

export default function FAQPage() {
  return (
    <main className="layout py-20">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">FAQ</p>
          <h1 className="text-4xl font-semibold text-white light:text-slate-950">Frequently asked questions.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600">
            Find clear answers to the most common questions about our courses, preparation methods and admissions.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <FAQ items={faqs} />
      </div>
    </main>
  );
}
