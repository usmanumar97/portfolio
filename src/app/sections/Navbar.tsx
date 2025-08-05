import Link from "next/link";
import HamburgerButton from "../components/HamburgerButton";
import Navigation from "../components/Navigation";

export default function Navbar() {
  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">
          <Link
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Osman
          </Link>

          {/* Only show on small screens */}
          <div className="sm:hidden">
            <HamburgerButton />
          </div>

          {/* Only show on medium and up */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
    </div>
  );
}
