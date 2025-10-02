'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        An unexpected error has occurred. We apologize for the inconvenience.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-[#ffe500] text-black font-medium rounded-md hover:bg-[#e6cf00] transition-colors"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}