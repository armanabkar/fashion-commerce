import { cookies } from "next/headers";
import CartModal from "./modal";
import { cartItems } from "@/lib/testData";

export default async function Cart() {
  // const cartId = cookies().get("cartId")?.value;
  // let cart;

  // if (cartId) {
  //   cart = await getCart(cartId);
  // }

  return <CartModal cart={cartItems} />;
}
