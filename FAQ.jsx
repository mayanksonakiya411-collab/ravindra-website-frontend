import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export default function FAQ({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="faq" className="mt-20 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Frequently asked</p>
        <h2 className="text-3xl font-semibold text-white light:text-slate-950 sm:text-4xl">Questions answered clearly for confident decisions.</h2>
      </div>
      <div className="mt-10 grid gap-4">
        {items.map((faq, index) => (
          <button
            key={faq.question}
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            className="group w-full rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-5 text-left shadow-glass transition hover:border-violet-400/30 light:border-slate-300/20 light:bg-white/80"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg font-semibold text-white light:text-slate-950">{faq.question}</span>
              <FiChevronDown
                className={`h-5 w-5 text-slate-300 transition duration-300 ${activeIndex === index ? 'rotate-180 text-violet-300' : 'text-slate-400'}`}
              />
            </div>
            {activeIndex === index && (
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300 light:text-slate-600">{faq.answer}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
