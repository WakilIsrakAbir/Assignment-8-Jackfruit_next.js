"use client";

import { useState } from "react";
import { signUp, signIn } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await signUp.email({
      email,
      password,
      name,
      image,
    });

    if (error) {
      setError(error.message || "Registration failed. Please try again.");
      setLoading(false);
    } else {
      router.push("/login");
    }
  };

  const handleGoogleLogin = async () => {
    await signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="w-full">
      {error && (
        <div className="alert alert-error mb-4 rounded-box p-3 text-sm">
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div className="form-control">
          <label className="label"><span className="label-text">Name</span></label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="input input-bordered w-full" placeholder="John Doe" />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Email</span></label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input input-bordered w-full" placeholder="john@example.com" />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Photo URL</span></label>
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} className="input input-bordered w-full" placeholder="https://example.com/photo.jpg" />
        </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Password</span></label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input input-bordered w-full" placeholder="********" minLength={6} />
        </div>
        <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
          {loading ? <span className="loading loading-spinner"></span> : "Register"}
        </button>
      </form>

      <div className="divider">OR</div>

      <button onClick={handleGoogleLogin} className="btn btn-outline w-full gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
        Register with Google
      </button>

      <p className="text-center mt-6 text-sm">
        Already have an account? <Link href="/login" className="link link-primary font-bold">Login</Link>
      </p>
    </div>
  );
}
