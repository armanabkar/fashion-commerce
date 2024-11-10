"use client";

/**
 * A fallback component to render when there is an error in the app.
 *
 * @param {object} props
 * @param {function} props.onReset - Called when the "Try Again" button is clicked.
 * @returns {JSX.Element}
 */
export default function ErrorFallback({ onReset }: { onReset: () => void }) {
  return (
    <div className="mx-auto my-4 flex max-w-xl flex-col rounded-lg border border-neutral-200 bg-white p-8 md:p-12 dark:border-neutral-800 dark:bg-black">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p className="my-2">
        There was an issue with our storefront. This could be a temporary issue,
        please try your action again.
      </p>
      <button
        className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90"
        onClick={onReset}
      >
        Try Again
      </button>
    </div>
  );
}
