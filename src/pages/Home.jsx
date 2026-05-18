import { useState } from "react";
import { Link } from "react-router";
import {
  Menu,
  X,
  Sparkles,
  BookOpen,
  Feather,
  Mic2,
//   Speakerphone,
  Mail,
  Linkedin,
  Instagram,
  Twitter,
  ChevronRight,
  Quote,
} from "lucide-react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blogs", to: "/blogs" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const services = [
  {
    title: "Arabic Language Teaching",
    description: "Structured lessons for learners at every level.",
    icon: BookOpen,
  },
  {
    title: "Arabic Poetry",
    description: "Original poetry with refined literary rhythm.",
    icon: Feather,
  },
  {
    title: "Arabic Writing",
    description: "Professional writing, editing, and literary consulting.",
    icon: Sparkles,
  },
  {
    title: "Voice-over for Advertisements",
    description: "Premium Arabic voice recordings for videos and ads.",
    icon: Mic2,
  },
  {
    title: "Public Speaking & Pronunciation",
    description: "Accent coaching and polished delivery for live speech.",
    // icon: Speakerphone,
  },
];

const portfolioItems = [
  {
    title: "Classical Arabic Curriculum",
    description: "A complete learning path for modern and classical Arabic fluency.",
  },
  {
    title: "Literary Poetry Series",
    description: "Curated poems and visual storytelling for cultural projects.",
  },
  {
    title: "Voice-over Campaign",
    description: "Professional Arabic narration for brand videos and ads.",
  },
];

const blogPreviews = [
  {
    title: "The Art of Pronunciation in Arabic",
    excerpt: "Explore the beauty of Arabic sound, accent, and the musicality of every phrase.",
  },
  {
    title: "Crafting Poems with Timeless Emotion",
    excerpt: "A guide to writing modern Arabic poetry that honors classical tradition.",
  },
];

const testimonials = [
  {
    quote: "His Arabic lessons elevated my confidence, and every lesson felt graceful and meaningful.",
    name: "Layla A.",
    role: "Student of Arabic Literature",
  },
  {
    quote: "The voice-over recording brought our campaign to life with elegant Arabic clarity.",
    name: "Omar H.",
    role: "Creative Director",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    label: "Instagram",
    icon: Instagram,
    href: "#",
  },
  {
    label: "Twitter",
    icon: Twitter,
    href: "#",
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="inline-flex items-center gap-3 text-xl font-semibold tracking-tight text-white">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 shadow-sm shadow-amber-400/10">
              A
            </span>
            Noor Al-Qalam
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-sm text-zinc-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/admin/login"
              className="rounded-full border border-zinc-700 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
            >
              Admin Login
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300 transition hover:border-amber-300 hover:text-amber-300 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-800 bg-zinc-950/95 px-6 py-5 md:hidden">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 transition hover:border-amber-400 hover:bg-zinc-800"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/admin/login"
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl border border-zinc-800 bg-white/5 px-4 py-3 text-sm text-zinc-200 transition hover:border-amber-400 hover:text-amber-300"
              >
                Admin Login
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pt-12 pb-20 md:px-10 lg:pb-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-amber-500/10 to-transparent blur-3xl" />
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
            <div className="relative z-10 flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-sm text-amber-200 shadow-sm shadow-amber-400/10">
                Arabic Teacher · Poet · Voice Artist
              </span>

              <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
                Elegant Arabic teaching, poetry, and premium voice-over services.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                I help learners discover the depth of Arabic language and literature with clear pronunciation, expressive poetry, and professional Arabic voice content for videos and advertisements.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                >
                  Explore Portfolio
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/blogs"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  Read Blogs
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/90 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-amber-300 hover:text-amber-300"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="relative flex-1 rounded-4xl border border-zinc-800 bg-zinc-900/70 p-8 shadow-2xl shadow-amber-500/5 backdrop-blur-xl sm:p-10">
              <div className="absolute inset-x-0 -top-8 h-24 rounded-4xl bg-gradient-to-r from-amber-400/15 via-transparent to-sky-400/10 blur-3xl" />
              <div className="relative space-y-6">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 shadow-lg shadow-black/20">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Featured Services</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-zinc-900/90 p-4 text-sm text-zinc-300 ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-amber-400/20 hover:bg-zinc-800/90">
                      <p className="font-semibold text-zinc-100">Accent Precision</p>
                      <p className="mt-2 text-sm text-zinc-400">Professional pronunciation coaching.</p>
                    </div>
                    <div className="rounded-3xl bg-zinc-900/90 p-4 text-sm text-zinc-300 ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-amber-400/20 hover:bg-zinc-800/90">
                      <p className="font-semibold text-zinc-100">Literary Craft</p>
                      <p className="mt-2 text-sm text-zinc-400">Poetry and writing with authentic Arabic voice.</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-zinc-800 bg-zinc-900/90 p-6 text-zinc-300 shadow-inner shadow-black/20">
                  <h2 className="text-xl font-semibold text-zinc-50">Why Choose My Services</h2>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    Combining pedagogy, literature, and voice artistry, I deliver refined Arabic communication that feels both modern and deeply rooted in tradition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">About</p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">A teacher of Arabic language, poetry, and refined expression.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                With years of teaching experience and passion for Arabic literature, I bring clarity and elegance to every lesson, article, and voice recording I create.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-zinc-100">Teaching Mastery</h3>
                <p className="mt-4 text-zinc-400 leading-7">
                  Personalized lessons for spoken Arabic, grammar, and fluency that grow confidence fast.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-zinc-100">Poetry & Literature</h3>
                <p className="mt-4 text-zinc-400 leading-7">
                  Crafted Arabic poetry with soulful rhythm and rich literary expression.
                </p>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/80 p-7 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-zinc-100">Voice-over Expertise</h3>
                <p className="mt-4 text-zinc-400 leading-7">
                  Professional Arabic voice for commercials, narrations, and branded media.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Services</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">What I offer</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-zinc-400">
                Elegant, modern service cards designed to communicate experience and trust.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="group rounded-4xl border border-zinc-800 bg-zinc-900/80 p-7 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300 transition group-hover:bg-amber-300/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-zinc-100">{service.title}</h3>
                    <p className="mt-3 text-zinc-400 leading-7">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Featured Portfolio</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Selected work & services</h2>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <div key={item.title} className="group overflow-hidden rounded-4xl border border-zinc-800 bg-zinc-900/80 p-7 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Featured</p>
                  <h3 className="mt-4 text-2xl font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-4 text-zinc-400 leading-7">{item.description}</p>
                  <button className="mt-8 inline-flex items-center text-sm font-semibold text-amber-300 transition group-hover:text-amber-200">
                    View details
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Latest Blogs</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Recent articles</h2>
              </div>
              <Link
                to="/blogs"
                className="inline-flex items-center rounded-full border border-zinc-700 bg-white/5 px-5 py-3 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
              >
                Explore blogs
              </Link>
            </div>

            <div className="mt-10 grid gap-6 xl:grid-cols-2">
              {blogPreviews.map((blog) => (
                <article key={blog.title} className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 transition hover:-translate-y-1 hover:border-amber-400/30 hover:bg-zinc-800/90">
                  <h3 className="text-2xl font-semibold text-zinc-100">{blog.title}</h3>
                  <p className="mt-4 text-zinc-400 leading-7">{blog.excerpt}</p>
                  <Link
                    to="/blogs"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-amber-300 transition hover:text-amber-200"
                  >
                    Read more
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/70 px-6 py-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Testimonials</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Trusted by learners and creative teams.</h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                  Feedback from students and collaborators who experienced Arabic teaching, writing, and voice-over services.
                </p>
              </div>

              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.name} className="rounded-4xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl shadow-black/10 transition hover:-translate-y-1">
                    <Quote className="h-6 w-6 text-amber-300" />
                    <p className="mt-5 text-zinc-300 leading-8">{testimonial.quote}</p>
                    <p className="mt-6 text-sm font-semibold text-zinc-100">{testimonial.name}</p>
                    <p className="text-sm text-zinc-400">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 pt-16 md:px-10 lg:px-12">
          <div className="mx-auto max-w-7xl rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">Contact</p>
                <h2 className="mt-4 text-3xl font-semibold text-zinc-100 sm:text-4xl">Start your Arabic journey or book a voice-over.</h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
                  Reach out by email or connect through social channels for a tailored consultation.
                </p>

                <div className="mt-10 space-y-5">
                  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                    <p className="text-sm text-amber-300/90">Email</p>
                    <a href="mailto:info@arabicvoice.art" className="mt-2 block text-lg font-semibold text-zinc-100 hover:text-amber-300">
                      info@arabicvoice.art
                    </a>
                  </div>

                  <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                    <p className="text-sm text-amber-300/90">Social</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-zinc-200 transition hover:border-amber-300 hover:text-amber-300"
                          >
                            <Icon className="h-4 w-4" />
                            {social.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-4xl bg-linear-to-br from-amber-400/10 via-transparent to-sky-400/5 p-8 shadow-inner shadow-black/20">
                <div className="rounded-3xl border border-zinc-800 bg-zinc-950/95 p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Let’s connect</p>
                  <p className="mt-6 text-lg leading-8 text-zinc-300">
                    Send a message for teaching, poetry, narration, or consulting and receive detailed guidance within one business day.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
                  >
                    Message me
                  </Link>
                </div>
              </div>
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
            <Link to="/about" className="transition hover:text-white">About</Link>
            <Link to="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
