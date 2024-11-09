import clsx from "clsx";

const dots = "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

const loadingDotsClassName =
  "mx-[1px] inline-block h-1 w-1 animate-blink rounded-md";

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
