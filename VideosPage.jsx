import Videos from '../components/Videos';
import { videos } from '../data/content';

export default function VideosPage() {
  return (
    <main className="layout py-20">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">YouTube Channel</p>
          <h1 className="text-4xl font-semibold text-white light:text-slate-950">Watch our coaching videos and live classes.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600">
            Browse featured sessions, recent tutorials, and live classes from Ravindra IAS so you can experience the coaching style first-hand.
          </p>
        </div>
      </section>
      <section className="mt-10 space-y-10">
        <div className="rounded-[2rem] border border-violet-500/10 bg-gradient-to-r from-violet-950/80 to-slate-950/90 p-8 shadow-2xl shadow-violet-500/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Live right now</p>
              <h2 className="text-3xl font-semibold text-white light:text-slate-950">Join our ongoing classroom discussion.</h2>
              <p className="max-w-xl text-slate-300 light:text-slate-600">
                Our live classes cover current affairs, answer writing technique and UPSC strategy. Tune in to catch the latest batch in action.
              </p>
            </div>
            <div className="rounded-full bg-slate-900/90 px-6 py-4 text-white shadow-xl shadow-violet-500/20 light:bg-slate-100 light:text-slate-950">
              <p className="text-sm uppercase tracking-[0.25em] text-violet-300">Next live</p>
              <p className="mt-2 text-2xl font-semibold">6:30 PM • Today</p>
              <p className="text-sm text-slate-400 light:text-slate-600">Join on YouTube for the live UPSC coaching session.</p>
            </div>
          </div>
        </div>
        <Videos items={videos} />
      </section>
    </main>
  );
}
