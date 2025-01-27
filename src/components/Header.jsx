import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import {SignedIn, SignedOut, UserButton} from '@clerk/nextjs';

export default function Header() {
  return (
    
      <div className="flex items-center justify-between p-3 max-w-6xl mx-auto">
        
        <ul className="flex gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
          <Link href={"/sign-in"} >
              Sign In
            </Link>

          </SignedOut>
          
          <li>
            <Link href={"/"} >
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} >
              About
            </Link>
          </li>
        </ul>

        
        <div className='flex items-center gap-4'>
            <DarkModeSwitch />
          <Link href={"/"} >
            <span className="text-2xl font-bold bg-amber-500 py-2 px-3 rounded-lg mr-4">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </Link>
        </div>

      </div>
    
  );
}
