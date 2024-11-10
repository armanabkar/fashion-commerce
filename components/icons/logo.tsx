import clsx from "clsx";

/**
 * A component for rendering the site logo.
 *
 * This component uses an SVG to render the site logo. The SVG is filled with
 * black by default, but can be changed to white for dark mode by adding the
 * "dark:fill-white" class.
 *
 * The component accepts any props that a standard HTML `<svg>` element
 * accepts.
 *
 * @example
 * <LogoIcon className="h-8 w-8" />
 */
export default function LogoIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 32 28"
      {...props}
      className={clsx("h-4 w-4 fill-black dark:fill-white", props.className)}
    >
      <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
      <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
    </svg>
  );
}
