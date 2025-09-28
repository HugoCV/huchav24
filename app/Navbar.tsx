import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b border-gray-200/60 dark:border-gray-800">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/avatar.png" alt="Avatar" width={28} height={28} className="rounded-full" />
          <span className="font-semibold tracking-tight">Hugo Chaves Vásquez</span>
        </Link>
        <ul className="hidden sm:flex items-center gap-6 text-sm">
          <li><a href="#about" className="hover:opacity-80">About me</a></li>
          <li><a href="#projects" className="hover:opacity-80">Projects</a></li>
          <li><a href="#contact" className="hover:opacity-80">Contact</a></li>
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm"
            target="_blank"
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}
