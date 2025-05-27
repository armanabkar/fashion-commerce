import clsx from "clsx";

const dots = "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

/**
 * A functional component that displays a loading indicator
 * using three animated dots.
 *
 * The component accepts a `className` prop, which is applied
 * to each dot for additional styling.
 *
 * @param {Object} props - The component props.
 * @param {string} props.className - Additional CSS classes for styling the dots.
 *
 * @returns {JSX.Element} A span containing three animated dots.
 */

const LoadingDots = ({ className }: { className: string }) => {
  return (
    <span className="mx-2 inline-flex items-center">
      <span className={clsx(dots, className)} />
      <span className={clsx(dots, "animation-delay-[200ms]", className)} />
      <span className={clsx(dots, "animation-delay-[400ms]", className)} />
    </span>
  );
};

export default LoadingDots;
