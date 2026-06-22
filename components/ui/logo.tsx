import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2" aria-label="Muhammad Abubakar">
      {/* Logo Badge */}
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold text-sm">
        MA
      </div>
      {/* Logo Text */}
      <span className="hidden font-semibold text-gray-900 sm:inline">
        abubakar
      </span>
    </Link>
  );
}
