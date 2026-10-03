import { Moon } from "lucide-react";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 ">
      <nav className="flex gap-4 justify-center m-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Home
          </span>
        </Link>
        <button>
          <Moon />
        </button>
      </nav>
    </header>
  );
}
