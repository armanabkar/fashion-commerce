import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen text-center mt-24">
      <h1 className="text-xl font-medium inline-block border-r border-gray-500/50 pr-4 mr-4">
        404
      </h1>
      <div className="inline-block">
        <h2>This page could not be found.</h2>
      </div>
      <p className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300 mt-4">
        <Link href="/">Return Home</Link>
      </p>
    </div>
  );
}
