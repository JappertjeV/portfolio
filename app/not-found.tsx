import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-indigo-400 font-mono text-sm font-medium mb-4">404</p>
      <h1 className="text-4xl font-bold text-zinc-50 mb-4">Page not found</h1>
      <p className="text-zinc-500 mb-8 max-w-sm">
        This page doesn&apos;t exist or was moved. Let&apos;s get you back.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-sm font-medium transition-colors"
      >
        <ArrowLeft size={15} />
        Back home
      </Link>
    </div>
  );
}
