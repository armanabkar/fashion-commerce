import Link from "next/link";

/**
 * A 404 page that displays a centered message with a link to return home.
 *
 * The page is a simple, centered display of a heading and a paragraph.
 * The heading shows the 404 status code and the paragraph shows a message and
 * a link to return home.
 *
 * The component is a server-side rendered page and is client-side rendered
 * with Next.js.
 *
 * @returns {JSX.Element} The 404 page component.
 */
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
