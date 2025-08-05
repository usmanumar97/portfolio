import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex flex-col sm:flex-row sm:gap-6 items-center gap-6">
      <li>
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition-colors text-xl"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition-colors text-xl"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition-colors text-xl"
        >
          Work
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="text-neutral-400 hover:text-white transition-colors text-xl"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
