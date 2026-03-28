import Resources from '../components/Resources';
import { resources } from '../data/content';

export default function ResourcesPage({ query, setQuery }) {
  return (
    <main className="layout py-20">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Resources</p>
          <h1 className="text-4xl font-semibold text-white light:text-slate-950">Access study resources that strengthen your preparation.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600">
            Browse curated notes, current affairs, test series and interview capsules designed for UPSC success.
          </p>
        </div>
      </section>
      <div className="mt-10">
        <Resources items={resources.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))} query={query} onSearch={setQuery} />
      </div>
    </main>
  );
}
