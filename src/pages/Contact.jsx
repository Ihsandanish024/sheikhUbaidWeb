import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 px-6 py-16 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-2xl shadow-black/20">
          <h1 className="text-4xl font-semibold text-zinc-100 sm:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-400">
            Reach out to book Arabic lessons, request poetry, or arrange voice-over services for your next video or advertisement.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 rounded-4xl border border-zinc-800 bg-zinc-900/80 p-10 shadow-xl shadow-black/10">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-300/80">Message</p>
              <p className="mt-4 text-zinc-300 leading-8">
                For personalized teaching plans, creative writing projects, or professional recording sessions, email directly or leave a message here.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                <p className="text-sm text-amber-300/90">Email</p>
                <a href="mailto:info@arabicvoice.art" className="mt-3 block text-lg font-semibold text-zinc-100 hover:text-amber-300">
                  info@arabicvoice.art
                </a>
              </div>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
                <p className="text-sm text-amber-300/90">Availability</p>
                <p className="mt-3 text-lg font-semibold text-zinc-100">Weekdays 09:00–19:00</p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6">
              <p className="text-sm text-amber-300/90">Phone</p>
              <p className="mt-3 text-lg font-semibold text-zinc-100">+966 5X XXX XXXX</p>
            </div>
          </div>

          <div className="rounded-4xl border border-zinc-800 bg-linear-to-br from-amber-400/10 via-transparent to-sky-400/5 p-10 shadow-inner shadow-black/20">
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/95 p-8">
              <h2 className="text-2xl font-semibold text-zinc-100">Send a Request</h2>
              <p className="mt-4 text-zinc-400 leading-7">
                Share your project details and I will follow up with a clear consultation and service proposal.
              </p>
              <div className="mt-8 space-y-4">
                <div className="rounded-3xl bg-zinc-900/95 p-4 text-zinc-300">
                  <p className="text-sm text-zinc-500">Type</p>
                  <p className="mt-2 text-zinc-100">Language lesson</p>
                </div>
                <div className="rounded-3xl bg-zinc-900/95 p-4 text-zinc-300">
                  <p className="text-sm text-zinc-500">Type</p>
                  <p className="mt-2 text-zinc-100">Voice-over project</p>
                </div>
                <div className="rounded-3xl bg-zinc-900/95 p-4 text-zinc-300">
                  <p className="text-sm text-zinc-500">Type</p>
                  <p className="mt-2 text-zinc-100">Poetry collaboration</p>
                </div>
              </div>
              <Link
                to="/"
                className="mt-8 inline-flex items-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-amber-300"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
