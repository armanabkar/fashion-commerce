import { ReadonlyURLSearchParams } from "next/navigation";

/**
 * Creates a URL by combining a pathname and URLSearchParams.
 *
 * @param pathname - The pathname to use for the URL
 * @param params - The URLSearchParams to use for the URL
 * @returns A URL string
 */
export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
): string => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

/**
 * Ensures that a given string starts with the specified prefix.
 *
 * @param stringToCheck - The string to check and potentially modify
 * @param startsWith - The prefix to ensure the string starts with
 * @returns The original string if it already starts with the prefix,
 * or the string with the prefix prepended otherwise
 */
export const ensureStartsWith = (
  stringToCheck: string,
  startsWith: string
): string =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

/**
 * Validates the presence and format of required environment variables.
 * Throws an error if any required environment variable is missing or improperly formatted.
 */
export const validateEnvironmentVariables = () => {
  // List of environment variables required for the application to function
  const requiredEnvironmentVariables = [
    "SHOPIFY_STORE_DOMAIN",
    "SHOPIFY_STOREFRONT_ACCESS_TOKEN",
  ];

  // Array to keep track of any missing environment variables
  const missingEnvironmentVariables = [] as string[];

  // Iterate through the required environment variables to check their existence
  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      // Add the missing environment variable to the array
      missingEnvironmentVariables.push(envVar);
    }
  });

  // If there are any missing environment variables, throw an error with details
  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        "\n"
      )}\n`
    );
  }

  // Check if the SHOPIFY_STORE_DOMAIN contains brackets, which are invalid
  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes("[") ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes("]")
  ) {
    throw new Error(
      "Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them."
    );
  }
};
