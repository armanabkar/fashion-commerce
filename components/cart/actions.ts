"use server";

import { TAGS } from "@/lib/constants";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addItem(prevState: any, variantId: string | undefined) {
  const cartId = (await cookies()).get("cartId")?.value;

  if (!cartId || !variantId) {
    return "Error adding item to cart";
  }

  try {
    // Implement your custom logic for adding an item to the cart here
    // For example, you can update a local cart state or make an API call to a different cart service
    // You can also use a shopping cart library or package to handle the cart functionality

    revalidateTag(TAGS.cart);
  } catch (error) {
    console.error("Failed to add item to cart:", error);
    return "Error adding item to cart";
  }
}

export async function removeItem(prevState: any, merchandiseId: string) {
  let cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    // Implement your custom logic for removing an item from the cart here
    // For example, you can update a local cart state or make an API call to a different cart service
    // You can also use a shopping cart library or package to handle the cart functionality

    revalidateTag(TAGS.cart);
  } catch (error) {
    console.error("Failed to remove item from cart:", error);
    return "Error removing item from cart";
  }
}

export async function updateItemQuantity(
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  let cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  const { merchandiseId, quantity } = payload;

  try {
    // Implement your custom logic for updating an item quantity in the cart here
    // For example, you can update a local cart state or make an API call to a different cart service
    // You can also use a shopping cart library or package to handle the cart functionality

    revalidateTag(TAGS.cart);
  } catch (error) {
    console.error("Failed to update item quantity:", error);
    return "Error updating item quantity";
  }
}
