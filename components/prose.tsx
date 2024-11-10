import clsx from "clsx";

interface TextProps {
  html: string;
  className?: string;
}

/**
 * A functional component that renders HTML content within a styled div.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.html - The HTML content to be rendered inside the div.
 * @param {string} [props.className] - An optional custom class name to be applied for additional styling.
 *
 * @returns {JSX.Element} A div element with HTML content and applied styles.
 */
const Prose: React.FC<{
  html: string;
  className?: string;
}> = ({ html, className: customClassName }) => {
  return (
    <div
      className={clsx(
        "prose mx-auto max-w-6xl text-base leading-7 text-black dark:text-white",
        {
          "prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black dark:prose-headings:text-white":
            true,
          "prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg":
            true,
          "prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 dark:prose-a:text-white":
            true,
          "prose-strong:text-black dark:prose-strong:text-white": true,
          "prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6": true,
          "prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6": true,
        },
        customClassName
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default Prose;
