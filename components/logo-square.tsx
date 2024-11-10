import LogoIcon from "./icons/logo";

/**
 * A square logo component with a responsive size.
 *
 * @example
 * import LogoSquare from "@/components/logo-square";
 *
 * <LogoSquare />
 *
 * @param {object} props The component props.
 * @param {string} [props.size="sm"] The size of the logo.
 *   Options are "sm" for a 30px logo or undefined for a 40px logo.
 */
export default function LogoSquare({
  size: logoSize,
}: {
  size?: "sm" | undefined;
}) {
  const sizeClassName =
    logoSize === "sm"
      ? "h-[30px] w-[30px] rounded-lg"
      : "h-[40px] w-[40px] rounded-xl";
  const iconSizeClassName =
    logoSize === "sm" ? "h-[10px] w-[10px]" : "h-[16px] w-[16px]";

  return (
    <div
      className={`${sizeClassName} flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black`}
    >
      <LogoIcon className={iconSizeClassName} />
    </div>
  );
}
