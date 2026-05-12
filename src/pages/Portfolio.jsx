import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import  {getPortfolio}  from "../services/portfolioapi";

const  portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const data = await getPortfolio();
        setPortfolio(data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading Portfolio...
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        No portfolio data found.
      </div>
    );
  }




  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">

<img
  src={`http://localhost:5000${portfolio.profileImage}`}
  alt="Professor"
  className="w-80 h-80 object-cover rounded-3xl shadow-2xl border border-white/10"
/>

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-6 backdrop-blur-lg bg-white/5 border-b border-white/10 sticky top-0 z-50">
        <h1 className="text-2xl font-semibold tracking-wide">Professor Portfolio</h1>

        <div className="flex gap-8 text-sm font-medium">
          <Link to="/blogs" className="hover:text-gray-300 transition">Visit Blogs</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            {portfolio.introduction}
          </h2>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-6">Education</h2>
        <p className="text-gray-300">{portfolio.education}</p>
      </section>

      {/* SKILLS */}
      <section className="px-10 py-20 bg-white/5">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <p className="text-gray-300">{portfolio.skills}</p>
      </section>

      {/* ACTIVITIES */}
      <section className="px-10 py-20">
        <h2 className="text-4xl font-bold mb-6">Activities</h2>
        <p className="text-gray-300">{portfolio.activities}</p>
      </section>

    </div>
  );
};

export default portfolio;