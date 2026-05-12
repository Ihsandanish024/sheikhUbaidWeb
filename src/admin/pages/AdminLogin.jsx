
import { useState } from "react";
import { loginAdmin } from "../../services/adminApi";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (e) => {
     e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const res = await loginAdmin({
        email,
        password,
      });

      localStorage.setItem("token", res.token);
      console.log("token has achived")
      window.location.href = "/dashboard";
    } catch (err) {
      console.log(err)
      setError("Invalid email or password");
      console.log("problem in email and password")
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-zinc-100">
            Admin Login
          </h1>
          <p className="text-sm text-zinc-400 mt-2">
            Sign in to manage blog content
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm text-zinc-400 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="admin@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-zinc-400 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={login}
          disabled={loading}
          className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition px-4 py-2 text-white font-medium disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Footer */}
        <p className="text-xs text-zinc-500 text-center mt-6">
          Protected Admin Area
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
