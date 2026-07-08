"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <div className="max-w-md">
        <div className="text-error mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-lg text-base-content/70 mb-8">
          We apologize for the inconvenience. An unexpected error has occurred while trying to process your request.
        </p>
        <button
          className="btn btn-error btn-lg px-8 shadow-lg hover:scale-105 transition-transform text-white"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
