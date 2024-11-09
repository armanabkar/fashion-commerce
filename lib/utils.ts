import { ReadonlyURLSearchParams } from "next/navigation";

/**
 * Creates a full URL from a pathname and searchParams.
 *
 * @param pathname The base path of the URL.
 * @param searchParams The search parameters to include in the URL.
 * @returns A full URL, including the search parameters if they are present.
 */
export const createUrl = (
  pathname: string,
  searchParams: URLSearchParams | ReadonlyURLSearchParams
): string => {
  const queryString = searchParams.toString();
  return `${pathname}${queryString ? `?${queryString}` : ""}`;
};

/**
 * Ensures a string starts with a prefix.
 *
 * If the input string starts with the prefix, it is returned unchanged.
 * Otherwise, the prefix is prepended to the input string.
 *
 * @param input The input string to check.
 * @param prefix The prefix to ensure the string starts with.
 * @returns The input string with the prefix prepended if necessary.
 */
export const ensureStartsWith = (input: string, prefix: string): string => {
  return input.startsWith(prefix) ? input : `${prefix}${input}`;
};

/**
 * Validates that the required environment variables are set.
 *
 * Throws an error if any of the required variables are not set.
 *
 * Required environment variables:
 * - `SHOPIFY_STORE_DOMAIN`
 * - `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
 *
 * The `SHOPIFY_STORE_DOMAIN` environment variable must not contain any
 * square brackets, as this can cause issues with the Shopify API.
 *
 * This function is intended to be used in a server-side environment, such as
 * a Next.js API route or a Vercel serverless function.
 */
export const validateEnvironmentVariables = (): void => {
  const REQUIRED_ENV_VARS = [
    "SHOPIFY_STORE_DOMAIN",
    "SHOPIFY_STOREFRONT_ACCESS_TOKEN",
  ];

  const missingVars = REQUIRED_ENV_VARS.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingVars.length > 0) {
    throw new Error(
      `Missing environment variables: ${missingVars.join(
        ", "
      )}. Please refer to https://vercel.com/docs/integrations/shopify#configure-environment-variables for more information.`
    );
  }

  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN || "";

  if (storeDomain.includes("[") || storeDomain.includes("]")) {
    throw new Error(
      "The `SHOPIFY_STORE_DOMAIN` environment variable contains invalid characters (brackets). Please remove them."
    );
  }
};
