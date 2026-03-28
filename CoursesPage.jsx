import Courses from '../components/Courses';
import { courses } from '../data/content';

export default function CoursesPage({ onEnroll }) {
  return (
    <main className="layout py-20">
      <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glass backdrop-blur-xl light:border-slate-200/10 light:bg-white/80">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-violet-300">Courses</p>
          <h1 className="text-4xl font-semibold text-white light:text-slate-950">Find the ideal UPSC program for your preparation stage.</h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 light:text-slate-600">
            Explore course details, duration, features and pricing designed to help you move faster with confidence.
          </p>
        </div>
      </section>
      <Courses courses={courses} onEnroll={onEnroll} />
    </main>
  );
}
