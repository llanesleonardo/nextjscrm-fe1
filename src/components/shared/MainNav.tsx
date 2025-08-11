import Link from 'next/link';
import { cookies } from 'next/headers';

export default async function MainNav() {
  const cookieStore = await cookies();  // await cookies()
  const token = cookieStore.get('token')?.value;
  const isLoggedIn = !!token;
  //const isLoggedIn =true; // Check if token exists to determine login status
  return (
    <nav className="space-x-6">
   

     
            <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white hover:underline">
            About us
          </Link>
          <Link href="/features" className="text-white hover:underline">
            Features
          </Link>
          <Link href="/pricing" className="text-white hover:underline">
            Pricing
          </Link>
          <Link href="/resources" className="text-white hover:underline">
            Resources
          </Link>
          <Link href="/contact" className="text-white hover:underline">
            Contact
          </Link>
          <Link href="/login" className="text-white hover:underline">
            Login
          </Link>
          <Link href="/signup" className="text-white hover:underline">
            Sign Up
          </Link>
          <Link href="/account/dashboard" className="text-white hover:underline">
            Dashboard
          </Link>
          <Link href="/account/profiles" className="text-white hover:underline">
            Profile
          </Link>
        <form action="/logout" method="POST" className="inline">
          <button
            type="submit"
            className="text-white hover:underline bg-transparent border-none cursor-pointer"
          >
            Logout
          </button>
        </form>
    </nav>
  );
}
