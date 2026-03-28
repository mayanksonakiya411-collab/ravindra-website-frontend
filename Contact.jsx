import { useState } from 'react';

const initialState = { name: '', email: '', phone: '' };

export default function Contact({ onEnroll }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) next.email = 'Enter a valid email';
    if (!form.phone.match(/^[0-9]{10}$/)) next.phone = 'Enter a 10-digit phone number';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onEnroll();
      setForm(initialState);
      setErrors({});
    }
  };

  return (
    <section id="contact" className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Start your journey</p>
          <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">Book a free enrollment call with our adviser.</h2>
          <p className="max-w-xl text-sm leading-7 text-slate-300 light:text-slate-600">
            Enter your details and our team will guide you through the best UPSC program for your preparation timeline.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-xl light:border-slate-300/20 light:bg-white/90">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              Name
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 light:border-slate-300/50 light:bg-white/80 light:text-slate-900"
              />
              {errors.name && <span className="text-xs text-rose-400">{errors.name}</span>}
            </label>
            <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
              Email
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 light:border-slate-300/50 light:bg-white/80 light:text-slate-900"
              />
              {errors.email && <span className="text-xs text-rose-400">{errors.email}</span>}
            </label>
          </div>
          <label className="space-y-2 text-sm text-slate-300 light:text-slate-700">
            Phone
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/80 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20 light:border-slate-300/50 light:bg-white/80 light:text-slate-900"
            />
            {errors.phone && <span className="text-xs text-rose-400">{errors.phone}</span>}
          </label>
          <button type="submit" className="w-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 text-base font-semibold text-white transition hover:scale-[1.01]">
            Start Your UPSC Journey
          </button>
        </form>
      </div>
    </section>
  );
}
