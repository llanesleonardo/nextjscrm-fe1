import Link from 'next/link';

export default function MainNav() {
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
        </nav>
  )
}
