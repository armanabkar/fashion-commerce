import clsx from "clsx";

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
