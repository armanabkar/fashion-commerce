// import { getCart } from "lib/shopify";
import { cookies } from "next/headers";
import CartModal from "./modal";
import { products } from "@/lib/testData";

export default async function Cart() {
  // const cartId = cookies().get("cartId")?.value;
  // let cart;

  // if (cartId) {
  //   cart = await getCart(cartId);
  // }

  return (
    <CartModal
      cart={{
        id: "string",
        checkoutUrl: "string",
        cost: {
          subtotalAmount: { amount: "10", currencyCode: "USD" },
          totalAmount: { amount: "10", currencyCode: "USD" },
          totalTaxAmount: { amount: "10", currencyCode: "USD" },
        },
        lines: [
          {
            id: "1",
            quantity: 1,
            cost: { totalAmount: { amount: "20", currencyCode: "USD" } },
            merchandise: {
              id: "1",
              title: "test 1",
              selectedOptions: [{ name: "Black", value: "XS" }],
              product: products[0],
            },
          },
        ],
        totalQuantity: 1,
      }}
    />
  );
}
