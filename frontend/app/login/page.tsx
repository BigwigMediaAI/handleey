"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const ADMIN_USER = process.env.NEXT_PUBLIC_ADMIN_USER;
  const ADMIN_PASS = process.env.NEXT_PUBLIC_ADMIN_PASS;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === ADMIN_USER && password === ADMIN_PASS) {
        Cookies.set("adminAuth", "true", {
          expires: 1,
          sameSite: "strict",
        });
        router.push("/admin");
      } else {
        setError("Invalid email or password");
      }

      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-secondary)] flex items-center justify-center px-4 relative overflow-hidden">
      {/* 🔥 Background Gradient Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[var(--accent)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[var(--primary)]/20 rounded-full blur-3xl" />

      {/* 🔥 Card */}
      <div className="relative w-full max-w-md bg-white/70 backdrop-blur-xl border border-[var(--border)] rounded-3xl shadow-xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            Welcome Back 👋
          </h1>
          <p className="text-sm text-[var(--text-secondary)] mt-2">
            Login to access your dashboard
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-[var(--text-secondary)] mb-1 block">
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
                size={18}
              />
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[var(--border)] bg-white outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-[var(--text-secondary)] mb-1 block">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
                size={18}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-11 pr-12 py-3 rounded-xl border border-[var(--border)] bg-white outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error */}
          {error && (
            <p className="text-sm text-[var(--error)] text-center">{error}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-[var(--text-secondary)] text-center mt-6">
          Secure Admin Access 🔒
        </p>
      </div>
    </div>
  );
}
