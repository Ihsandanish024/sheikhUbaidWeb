import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 md:px-20 py-20">

      {/* Header */}
      <div className="mb-20">
        <Link
          to="/portfolio"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="text-5xl md:text-6xl font-bold mt-6 tracking-tight">
          About
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          A deeper look into academic journey, expertise, and professional
          experience.
        </p>
      </div>


      {/* INTRODUCTION */}
      <section className="mb-20">
        <div className="p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl font-semibold mb-6">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            {/* Replace this text later */}
            Write a detailed introduction about your teacher here.
            Include academic philosophy, research vision, teaching style,
            achievements, and long-term goals.
          </p>
        </div>
      </section>


      {/* EDUCATION */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10">Education</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-medium mb-3">
              Degree Title
            </h3>
            <p className="text-gray-400">
              University Name – Year
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
            <h3 className="text-xl font-medium mb-3">
              Another Degree
            </h3>
            <p className="text-gray-400">
              University Name – Year
            </p>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-10">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            Skill Category 1
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            Skill Category 2
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg">
            Skill Category 3
          </div>
        </div>
      </section>


      {/* ACTIVITIES */}
      <section>
        <h2 className="text-3xl font-semibold mb-10">Activities</h2>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
            Academic Conference Participation
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
            Research Projects
          </div>

          <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl">
            Community or Educational Programs
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
