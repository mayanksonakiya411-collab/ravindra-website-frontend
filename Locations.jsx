export default function Locations({ locations }) {
  return (
    <section className="layout py-16">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Locations</p>
          <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">
            Study from our premium UPSC centers or join live online.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300 light:text-slate-600">
            Choose a mode that fits your preparation style — classroom rigor in our city centers or interactive online classes with the same expert faculty.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {locations.map((location) => (
            <article key={location.city} className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-6 shadow-glass light:border-slate-200/20 light:bg-white/90">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300">{location.city}</p>
              <h3 className="mt-4 text-xl font-semibold text-white light:text-slate-950">{location.mode}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 light:text-slate-600">{location.address}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
