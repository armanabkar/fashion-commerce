export interface Product {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption;
  price: string;
  featuredImage: string;
  images: { url: string; altText: string }[];
  variants: ProductVariant;
  currencyCode: string;
  tags: string[];
  updatedAt: string;
  seo: SEO;
}

export type SEO = {
  title: string;
  description: string;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
}[];

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
}[];

export const products = [
  {
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "Acme-Baby-Cap",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Mug",
    featuredImage: "/images/6.webp",
    handle: "Acme-Mug",
    price: "15",
    currencyCode: "USD",
  },
  {
    title: "Acme Hoodie",
    featuredImage: "/images/5.webp",
    handle: "Acme-Hoodie",
    price: "50",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Onesie",
    featuredImage: "/images/2.webp",
    handle: "Acme-Baby-Onesie",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "Acme-Baby-Cap",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Mug",
    featuredImage: "/images/6.webp",
    handle: "Acme-Mug",
    price: "15",
    currencyCode: "USD",
  },
  {
    title: "Acme Hoodie",
    featuredImage: "/images/5.webp",
    handle: "Acme-Hoodie",
    price: "50",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Onesie",
    featuredImage: "/images/2.webp",
    handle: "Acme-Baby-Onesie",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Cap",
    featuredImage: "/images/1-1.webp",
    handle: "Acme-Baby-Cap",
    price: "10",
    currencyCode: "USD",
  },
  {
    title: "Acme Mug",
    featuredImage: "/images/6.webp",
    handle: "Acme-Mug",
    price: "15",
    currencyCode: "USD",
  },
  {
    title: "Acme Hoodie",
    featuredImage: "/images/5.webp",
    handle: "Acme-Hoodie",
    price: "50",
    currencyCode: "USD",
  },
  {
    title: "Acme Baby Onesie",
    featuredImage: "/images/2.webp",
    handle: "Acme-Baby-Onesie",
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
    body: "<p>This website is built with Next.js Commerce, which is a ecommerce template for creating a headless Shopify storefront.</p><p>Support for real-world commerce features including:</p><ul><li>Out of stocks</li><li>Order history</li><li>Order status</li><li>Cross variant / option availability (aka. Amazon style)</li><li>Hidden products</li><li>Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)</li><li>Seamless and secure checkout via Shopify Checkout</li><li>And more!</li></ul><p>This template also allows us to highlight newer Next.js features including:</p><ul><li>Next.js App Router</li><li>Optimized for SEO using Next.js's Metadata</li><li>React Server Components (RSCs) and Suspense</li><li>Server Actions for mutations</li><li>Edge runtime</li><li>New Next.js 13 fetching and caching paradigms</li><li>Dynamic OG images</li><li>Styling with Tailwind CSS</li><li>Automatic light/dark mode based on system settings</li><li>And more!</li></ul>",
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

export interface Cart {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: CartItem[];
  totalQuantity: number;
}

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export interface Money {
  amount: string;
  currencyCode: string;
}

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export const product = {
  id: "1",
  title: "Acme Baby Cap",
  featuredImage: "/images/1-1.webp",
  handle: "Acme-Baby-Cap",
  price: "10",
  currencyCode: "USD",
  availableForSale: true,
  description: "sasasa",
  descriptionHtml:
    "<div><p>Step into summer! Every time your head looks down, you'll see these beauties, and your mood bounces right back up.</p><p>Sleek, easy, and effortlessly stylish. Acme Slip-On Shoes are the ultimate get-up-and-go footwear. The low-profile slip-on canvas upper offers unbeatable convenience, while the clean design makes this all-white slip-on the perfect choice for anyone with places to go and things to do. One of the most popular designs, these shoes are the perfect middle ground between style and convenience.</p><ul><li>Iconic slip-on shoe</li><li>Low profile canvas uppers</li><li>Supportive padded collars</li><li>Elastic side accents</li><li>Signature rubber waffle outsoles</li></ul></div>",
  images: [
    { url: "/images/1-1.webp", altText: "Acme Baby Cap" },
    { url: "/images/1-2.webp", altText: "Acme Baby Capa" },
    { url: "/images/1-3.webp", altText: "Acme Baby Cap" },
  ],
  seo: { title: "Acme Baby Cap", description: "" },
  options: [
    {
      id: "1",
      name: "Color",
      values: ["Black", "Gray", "White", "Pink"],
    },
    {
      id: "2",
      name: "Size",
      values: ["S", "M", "L", "XL", "XXL"],
    },
  ],
  variants: [
    {
      id: "1",
      title: "",
      availableForSale: true,
      selectedOptions: [
        {
          name: "color",
          value: "Black",
        },
        {
          name: "size",
          value: "L",
        },
      ],
      price: { amount: "10", currencyCode: "USD" },
    },
    {
      id: "2",
      title: "",
      availableForSale: true,
      selectedOptions: [
        {
          name: "color",
          value: "White",
        },
        {
          name: "size",
          value: "XL",
        },
      ],
      price: { amount: "10", currencyCode: "USD" },
    },
    {
      id: "3",
      title: "",
      availableForSale: true,
      selectedOptions: [
        {
          name: "color",
          value: "Gray",
        },
        {
          name: "size",
          value: "L",
        },
      ],
      price: { amount: "10", currencyCode: "USD" },
    },
    {
      id: "4",
      title: "",
      availableForSale: true,
      selectedOptions: [
        {
          name: "color",
          value: "Gray",
        },
        {
          name: "size",
          value: "XL",
        },
      ],
      price: { amount: "10", currencyCode: "USD" },
    },
  ],
  tags: [],
  updatedAt: "",
};
