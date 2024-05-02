export interface Product {
  title: string;
  featuredImage: string;
  handle: string;
  price: string;
  currencyCode: string;
  descriptionHtml?: string;
}

export const products = [
  {
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Mug",
    featuredImage: "/images/6.webp",
    handle: "string",
    price: "15",
    currencyCode: "USD",
  },
  {
    title: "Acme Hoodie",
    featuredImage: "/images/5.webp",
    handle: "string",
    price: "50",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Onesie",
    featuredImage: "/images/2.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Mug",
    featuredImage: "/images/6.webp",
    handle: "string",
    price: "15",
    currencyCode: "USD",
  },
  {
    title: "Acme Hoodie",
    featuredImage: "/images/5.webp",
    handle: "string",
    price: "50",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Onesie",
    featuredImage: "/images/2.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Mug",
    featuredImage: "/images/6.webp",
    handle: "string",
    price: "15",
    currencyCode: "USD",
  },
  {
    title: "Acme Hoodie",
    featuredImage: "/images/5.webp",
    handle: "string",
    price: "50",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Onesie",
    featuredImage: "/images/2.webp",
    handle: "string",
    price: "10",
    currencyCode: "USD",
  },
];

export interface Menu {
  title: string;
  path: string;
}

export const menu: Menu[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Terms & Conditions", path: "/terms-conditions" },
  { title: "Shipping & Return Policy", path: "/shipping-return-policy" },
  { title: "Privacy Policy", path: "/privacy-policy" },
  { title: "FAQ", path: "/frequently-asked-questions" },
];

export const pages = [
  {
    title: "About",
    path: "about",
    seo: {
      title: "About",
      description:
        "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    },
    body: `This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. 

Support for real-world commerce features including: 

Out of stocks
Order history
Order status
Cross variant / option availability (aka. Amazon style)
Hidden products
Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)
Seamless and secure checkout via Shopify Checkout
And more!
This template also allows us to highlight newer Next.js features including: 

Next.js App Router
Optimized for SEO using Next.js's Metadata
React Server Components (RSCs) and Suspense
Server Actions for mutations
Edge runtime
New Next.js 13 fetching and caching paradigms
Dynamic OG images
Styling with Tailwind CSS
Automatic light/dark mode based on system settings
And more!`,
    bodySummary:
      "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    createdAt: "2024/05/01",
    updatedAt: "2024/05/01",
  },
  {
    title: "Terms & Conditions",
    path: "terms-conditions",
    seo: {
      title: "Terms & Conditions",
      description:
        "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    },
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.",
    bodySummary:
      "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    createdAt: "2024/05/01",
    updatedAt: "2024/05/01",
  },
  {
    title: "Shipping & Return Policy",
    path: "shipping-return-policy",
    seo: {
      title: "Shipping & Return Policy",
      description:
        "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    },
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.",
    bodySummary:
      "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    createdAt: "2024/05/01",
    updatedAt: "2024/05/01",
  },
  {
    title: "Privacy Policy",
    path: "privacy-policy",
    seo: {
      title: "Privacy Policy",
      description:
        "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    },
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.",
    bodySummary:
      "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    createdAt: "2024/05/01",
    updatedAt: "2024/05/01",
  },
  {
    title: "Frequently Asked Questions",
    path: "frequently-asked-questions",
    seo: {
      title: "Frequently Asked Questions",
      description:
        "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    },
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero justo laoreet sit amet cursus sit. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi bibendum. Consectetur libero id faucibus nisl. Quisque id diam vel quam elementum. Eros donec ac odio tempor orci dapibus ultrices. Turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio.",
    bodySummary:
      "This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront. ",
    createdAt: "2024/05/01",
    updatedAt: "2024/05/01",
  },
];
