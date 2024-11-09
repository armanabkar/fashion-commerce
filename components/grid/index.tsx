import clsx from "clsx";

function Grid({ children, className, ...rest }: React.ComponentProps<"ul">) {
  return (
    <ul className={clsx("grid grid-flow-row gap-4", className)} {...rest}>
      {children}
    </ul>
  );
}

function GridItem({ children, className, ...rest }: React.ComponentProps<"li">) {
  return (
    <li className={clsx("aspect-square transition-opacity", className)} {...rest}>
      {children}
    </li>
  );
}

Grid.Item = GridItem;

export default Grid;
