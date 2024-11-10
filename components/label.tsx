import clsx from "clsx";
import Price from "./price";

/**
 * A label component that displays a title and price.
 *
 * This component is designed to be used on top of an image, like a product
 * image. It uses absolute positioning to position the label at the bottom of
 * its parent container. The label is a rounded rectangle with a white
 * background and black text. The price is displayed on the right side of the
 * label and is rounded.
 *
 * The component accepts the following props:
 *
 * - `title`: The title of the product.
 * - `amount`: The price of the product as a string.
 * - `currencyCode`: The currency code of the price.
 * - `position`: The position of the label. Can be either `"bottom"` or `"center"`.
 *    Defaults to `"bottom"`.
 *
 * The component uses the `clsx` library to conditionally apply CSS classes
 * based on the props. The classes are defined in the `tailwind.config.js` file.
 *
 * @example
 * <Label title="Product Title" amount="19.99" currencyCode="USD" />
 */
const Label = ({
  title,
  amount,
  currencyCode,
  position = "bottom",
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: "bottom" | "center";
}) => {
  const containerClasses = clsx(
    "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
    {
      "lg:px-20 lg:pb-[35%]": position === "center",
    }
  );

  const labelClasses = clsx(
    "flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md",
    "dark:border-neutral-800 dark:bg-black/70 dark:text-white"
  );

  return (
    <div className={containerClasses}>
      <div className={labelClasses}>
        <h3 className="mr-4 flex-grow pl-2 line-clamp-2 leading-none tracking-tight">
          {title}
        </h3>
        <Price
          className="flex-none rounded-full bg-blue-600 p-2 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
