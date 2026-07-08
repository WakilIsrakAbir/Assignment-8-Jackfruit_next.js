import Link from 'next/link';

const Navbar = () => {
  const isLoggedIn = false; // Mock state for now

  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            {isLoggedIn && <li><Link href="/my-profile">My Profile</Link></li>}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">SunCart</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          {isLoggedIn && <li><Link href="/my-profile">My Profile</Link></li>}
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {isLoggedIn ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src="https://ui-avatars.com/api/?name=User" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/my-profile">Profile</Link></li>
              <li><button>Logout</button></li>
            </ul>
          </div>
        ) : (
          <>
            <Link href="/login" className="btn btn-ghost">Login</Link>
            <Link href="/register" className="btn btn-primary">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
