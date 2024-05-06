export interface Product {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: ProductOption[];
  price: string;
  featuredImage: string;
  images: { url: string; altText: string }[];
  variants: ProductVariant[];
  currencyCode: string;
  tags: string[];
  updatedAt: string;
  seo: SEO;
}

export interface SEO {
  title: string;
  description: string;
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface ProductVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: Money;
}

export interface Menu {
  title: string;
  path: string;
}

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

export interface CartItem {
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
}

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface Page {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  url: string;
  altText: string;
  width: number;
  height: number;
}

export type MerchandiseSearchParams = {
  [key: string]: string;
};
