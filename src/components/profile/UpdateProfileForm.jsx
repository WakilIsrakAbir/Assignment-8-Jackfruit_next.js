"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function UpdateProfileForm({ user }) {
  const router = useRouter();
  const [name, setName] = useState(user.name || "");
  const [image, setImage] = useState(user.image || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data, error } = await authClient.updateUser({
      name: name,
      image: image,
    });

    if (error) {
      setError(error.message || "Failed to update profile.");
      setLoading(false);
    } else {
      router.push("/my-profile");
      router.refresh(); // Refresh the Server Component to show new data
    }
  };

  return (
    <div className="w-full">
      {error && (
        <div className="alert alert-error mb-4 rounded-box p-3 text-sm">
          <span>{error}</span>
        </div>
      )}
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <div className="form-control">
          <label className="label"><span className="label-text">Name</span></label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="input input-bordered w-full" 
            placeholder="John Doe" 
          />
        </div>
        
        <div className="form-control">
          <label className="label"><span className="label-text">Profile Image URL</span></label>
          <input 
            type="url" 
            value={image} 
            onChange={(e) => setImage(e.target.value)} 
            className="input input-bordered w-full" 
            placeholder="https://example.com/photo.jpg" 
          />
        </div>
        
        <div className="flex gap-4 mt-6">
          <Link href="/my-profile" className="btn btn-outline flex-1">
            Cancel
          </Link>
          <button type="submit" className="btn btn-primary flex-1" disabled={loading}>
            {loading ? <span className="loading loading-spinner"></span> : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
