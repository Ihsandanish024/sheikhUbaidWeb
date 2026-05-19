import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              About
            </span>
            About Me
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-zinc-300 transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="text-sm text-zinc-300 transition hover:text-white">Portfolio</Link>
            <Link to="/blogs" className="text-sm text-zinc-300 transition hover:text-white">Blogs</Link>
            <Link to="/contact" className="text-sm text-zinc-300 transition hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Page Header Section */}
        <section className="relative overflow-hidden px-6 pt-12 pb-16 md:px-10 lg:pb-20">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="mx-auto max-w-7xl relative z-10">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-zinc-400 hover:text-amber-300 transition"
            >
              ← Back to Home
            </Link>

            <h1 className="mt-8 text-5xl md:text-6xl font-semibold tracking-tight text-zinc-100">
              About
            </h1>

            <p className="text-zinc-400 mt-6 max-w-2xl text-base leading-8">
              A deeper look into my academic journey, expertise, and professional experience in Arabic language teaching, poetry, and voice artistry.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-12 border-t border-zinc-800/70">
          <div className="mx-auto max-w-7xl">
            {/* INTRODUCTION */}
            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">Introduction</p>
              <div className="p-10 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-black/20">
                <h2 className="text-3xl font-semibold mb-6 text-zinc-100">Who I am</h2>
                <p className="text-zinc-400 leading-8">
                  {/* Replace this text later */}
                  Write a detailed introduction about your teacher here.
                  Include academic philosophy, research vision, teaching style,
                  achievements, and long-term goals.
                </p>
              </div>
            </div>

            {/* EDUCATION */}
            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">Education</p>
              <h2 className="text-3xl font-semibold mb-10 text-zinc-100">Academic Background</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                    Degree Title
                  </h3>
                  <p className="text-zinc-400">
                    University Name – Year
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-3 text-zinc-100">
                    Another Degree
                  </h3>
                  <p className="text-zinc-400">
                    University Name – Year
                  </p>
                </div>
              </div>
            </div>

            {/* SKILLS */}
            <div className="mb-20">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">Skills</p>
              <h2 className="text-3xl font-semibold mb-10 text-zinc-100">Core Competencies</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-lg shadow-black/10 transition hover:-translate-y-1 text-zinc-200">
                  Skill Category 1
                </div>

                <div className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-lg shadow-black/10 transition hover:-translate-y-1 text-zinc-200">
                  Skill Category 2
                </div>

                <div className="p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-lg shadow-black/10 transition hover:-translate-y-1 text-zinc-200">
                  Skill Category 3
                </div>
              </div>
            </div>

            {/* ACTIVITIES */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80 mb-10">Activities</p>
              <h2 className="text-3xl font-semibold mb-10 text-zinc-100">Professional Engagements</h2>

              <div className="space-y-6">
                <div className="p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/10 transition hover:-translate-y-1 text-zinc-200">
                  Academic Conference Participation
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/10 transition hover:-translate-y-1 text-zinc-200">
                  Research Projects
                </div>

                <div className="p-8 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 shadow-xl shadow-black/10 transition hover:-translate-y-1 text-zinc-200">
                  Community or Educational Programs
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-4xl border border-zinc-800 bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-zinc-900/80 p-12 shadow-2xl shadow-black/20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Ready to Learn?</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Start Your Arabic Journey</h2>
              <p className="mt-6 text-base leading-8 text-zinc-400">
                Connect with me to book personalized lessons or discuss your Arabic learning goals.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/70 px-6 py-8 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-zinc-400">© 2026 Noor Al-Qalam. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-300">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <Link to="/portfolio" className="transition hover:text-white">Portfolio</Link>
            <Link to="/blogs" className="transition hover:text-white">Blogs</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
