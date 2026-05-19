import { Link } from "react-router-dom";
import {
  BookOpen,
  Feather,
  Sparkles,
  Mic2,
  Volume2,
  ChevronRight,
} from "lucide-react";

const serviceCards = [
  {
    title: "Arabic Curriculum Design",
    description: "Lesson plans, daily practice guides, and teaching resources for modern learners.",
    icon: BookOpen,
  },
  {
    title: "Arabic Poetry Craft",
    description: "Original poetry and writing consultations that celebrate language and rhythm.",
    icon: Feather,
  },
  {
    title: "Voice-over Production",
    description: "High-quality Arabic voice recordings for campaigns, narration, and audio projects.",
    icon: Mic2,
  },
  {
    title: "Pronunciation Coaching",
    description: "Accent refinement and public speaking coaching for confident spoken Arabic.",
    icon: Volume2,
  },
];

const portfolioItems = [
  {
    title: "Classical Arabic Learning Path",
    description: "A complete frontend portfolio presentation of curriculum, milestones, and learning goals.",
  },
  {
    title: "Poetic Voice Series",
    description: "A collection of expressive poems paired with atmospheric audio narrative.",
  },
  {
    title: "Brand Audio Campaign",
    description: "Voice-over projects designed for modern digital storytelling.",
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              P
            </span>
            Portfolio
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-sm text-zinc-300 transition hover:text-white">Home</Link>
            <Link to="/blogs" className="text-sm text-zinc-300 transition hover:text-white">Blogs</Link>
            <Link to="/about" className="text-sm text-zinc-300 transition hover:text-white">About</Link>
            <Link to="/contact" className="text-sm text-zinc-300 transition hover:text-white">Contact</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative z-10 flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 shadow-sm shadow-amber-400/10">
                Frontend Portfolio · UI-first Experience
              </span>

              <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
                A polished portfolio built fully with frontend visuals, rich gradients, and modern UX.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                This page no longer depends on backend data. It is designed to showcase projects, services, and lessons with the same premium style as the home page.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  Book a Session
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  Read Blogs
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-zinc-800/80 bg-white/5 p-8 shadow-xl shadow-amber-500/5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Highlight</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Smooth design, no API needed</h2>
                <p className="mt-4 text-zinc-400">
                  All portfolio content is stored in the page and styled with dark glass panels, gradient accents, and tactile buttons.
                </p>
              </div>

              <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl shadow-black/30">
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">UI features</p>
                <ul className="mt-6 space-y-4 text-zinc-300">
                  <li className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-5 w-5 text-amber-300" />
                    <span>Soft glowing gradients and polished glass cards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="mt-1 h-5 w-5 text-amber-300" />
                    <span>Readable typography with strong visual hierarchy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Volume2 className="mt-1 h-5 w-5 text-amber-300" />
                    <span>Interactive CTA buttons and premium hover effects.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-950/80 px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Services</p>
              <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">What I offer</h2>
              <p className="mx-auto max-w-2xl text-zinc-400">
                These service cards focus on teaching, creative writing, and audio production with a cohesive homepage-inspired style.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {serviceCards.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="rounded-3xl border border-zinc-800/80 bg-zinc-900/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-amber-300/50 hover:bg-zinc-900">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 text-zinc-400">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col gap-3 text-center">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Portfolio</p>
              <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">Featured work</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-zinc-800/80 bg-white/5 p-8 shadow-lg shadow-amber-500/5 transition hover:-translate-y-1 hover:border-amber-300">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-zinc-400">{item.description}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-300">
                    <ChevronRight className="h-4 w-4" />
                    Case study details
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-6 py-16 md:px-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="relative mx-auto max-w-7xl rounded-[2.75rem] border border-zinc-800/70 bg-zinc-950/90 p-10 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Ready to work together?</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Launch your next Arabic project with confidence.</h2>
                <p className="mt-4 max-w-xl text-zinc-400">
                  This portfolio is fully frontend-driven, with no API calls. It is optimized for fast load times and polished presentation.
                </p>
              </div>

              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block rounded-3xl bg-amber-400 px-6 py-4 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  Contact Me
                </Link>
                <Link
                  to="/blogs"
                  className="block rounded-3xl border border-zinc-700 bg-white/5 px-6 py-4 text-center text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  View Blog Articles
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
