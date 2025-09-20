'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CulturePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#culture');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-600">Redirecting to culture section...</p>
      </div>
    </div>
  );
}