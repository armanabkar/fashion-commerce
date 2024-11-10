import clsx from "clsx";

/**
 * A component that formats and displays a monetary amount with its currency code.
 *
 * This component uses the Intl.NumberFormat API to format the amount as a currency.
 * It displays the formatted amount within a paragraph element, followed by the currency code.
 *
 * Props:
 * - `amount`: The monetary amount to be formatted and displayed.
 * - `className`: Optional CSS class for styling the paragraph element.
 * - `currencyCode`: The ISO 4217 currency code (e.g., "USD"). Defaults to "USD".
 * - `currencyCodeClassName`: Optional CSS class for styling the span element containing the currency code.
 *
 * Additional props are passed to the underlying paragraph element.
 */
const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const formattedAmount = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
    currencyDisplay: "narrowSymbol",
  }).format(parseFloat(amount));

  return (
    <p suppressHydrationWarning className={className}>
      {formattedAmount}
      <span className={clsx("ml-1 inline", currencyCodeClassName)}>
        {currencyCode}
      </span>
    </p>
  );
};

export default Price;
