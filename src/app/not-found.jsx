import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <div className="max-w-md">
        <h1 className="text-9xl font-extrabold text-primary mb-4 opacity-80">404</h1>
        <h2 className="text-3xl font-bold mb-4">Oops! Page not found.</h2>
        <p className="text-lg text-base-content/70 mb-8">
          The sun might be shining, but we couldn't find the page you're looking for. It might have been removed or the URL is incorrect.
        </p>
        <Link href="/" className="btn btn-primary btn-lg px-8 shadow-lg hover:scale-105 transition-transform">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
