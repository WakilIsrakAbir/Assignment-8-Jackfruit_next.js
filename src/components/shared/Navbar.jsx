"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useSession, signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const isLoggedIn = !!session;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
        },
      },
    });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="lg:hidden relative">
          <button 
            role="button" 
            className="btn btn-ghost"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </button>
          
          {isMobileMenuOpen && (
            <div className="absolute left-2 top-14 mt-2 z-50 p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
              <ul className="menu menu-sm w-full">
                <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link></li>
                {isLoggedIn && <li><Link href="/my-profile" onClick={() => setIsMobileMenuOpen(false)}>My Profile</Link></li>}
              </ul>
            </div>
          )}
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold ml-2 lg:ml-0">SunCart</Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          {isLoggedIn && <li><Link href="/my-profile">My Profile</Link></li>}
        </ul>
      </div>
      
      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name || 'User'}`} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="menu-title px-4 py-2">
                <span className="font-bold block truncate">{session?.user?.name}</span>
                <span className="text-xs opacity-70 block truncate">{session?.user?.email}</span>
              </li>
              <div className="divider my-0"></div>
              <li><Link href="/my-profile">Profile</Link></li>
              <li><button onClick={handleLogout} className="text-error font-bold">Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost hidden sm:inline-flex">Login</Link>
            <Link href="/register" className="btn btn-primary">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
