'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };

  return (
    <form
      className="flex items-center justify-between px-5 max-w-6xl mx-auto bg-white shadow-md rounded-full overflow-hidden"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search for something..."
        className="w-full h-12 px-6 text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className={`text-white font-semibold px-6 py-2 h-10 rounded-full ${
          search === '' ? 'bg-gray-300 cursor-not-allowed' : 'bg-amber-600 hover:bg-amber-500'
        } transition-colors`}
        disabled={search === ''}
      >
        Search
      </button>
    </form>
  );
}
