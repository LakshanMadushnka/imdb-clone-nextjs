import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Left Side: Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link href={"/signin"} className="text-lg hover:text-amber-500 transition duration-300">
              Sign In
            </Link>
          </li>
          <li>
            <Link href={"/"} className="text-lg hover:text-amber-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-lg hover:text-amber-500 transition duration-300">
              About
            </Link>
          </li>
        </ul>

        {/* Right Side: IMDB Clone */}
        <div>
          <Link href={"/"} >
            <span className="text-2xl font-bold bg-amber-500 py-2 px-3 rounded-lg mr-4">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
