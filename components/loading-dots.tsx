import clsx from "clsx";

const dots = "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

const loadingDotsClassName =
  "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

/**
 * A component that displays three small dots in a row that blink on and off in
 * sequence. Useful for indicating that a request is in progress.
 *
 * The component accepts a single prop, `className`, which allows the caller to
 * pass in a custom CSS class name to style the component.
 *
 * The component uses the `clsx` library to conditionally apply CSS classes based
 * on the `className` prop. The classes are defined in the `tailwind.config.js`
 * file.
 */
const LoadingDots = ({ className }: { className: string }) => (
  <span className="mx-2 inline-flex items-center">
    <span className={clsx(loadingDotsClassName, className)} />
    <span
      className={clsx(
        loadingDotsClassName,
        "animation-delay-[200ms]",
        className
      )}
    />
    <span
      className={clsx(
        loadingDotsClassName,
        "animation-delay-[400ms]",
        className
      )}
    />
  </span>
);

export default LoadingDots;
