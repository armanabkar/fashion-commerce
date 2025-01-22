"use client";
import { ProductContextType, ProductState } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import React, {
  createContext,
  useContext,
  useMemo,
  useOptimistic,
  useCallback,
} from "react";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

/**
 * Provides the product context to its children, allowing them to access
 * and update the product state, which includes product options and images.
 *
 * This component initializes the product state from URL search parameters
 * and provides methods to update product options and the selected image
 * optimistically.
 *
 * @param children - The React components that will consume the product context.
 */
export function ProductProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  const getInitialState = () => {
    const params: ProductState = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  const [state, setOptimisticState] = useOptimistic(
    getInitialState(),
    (prevState: ProductState, update: ProductState) => ({
      ...prevState,
      ...update,
    })
  );

  const updateOption = useCallback(
    (name: string, value: string) => {
      const newState = { [name]: value };
      setOptimisticState(newState);
      return { ...state, ...newState };
    },
    [state, setOptimisticState]
  );

  const updateImage = useCallback(
    (index: string) => {
      const newState = { image: index };
      setOptimisticState(newState);
      return { ...state, ...newState };
    },
    [state, setOptimisticState]
  );

  const value = useMemo(
    () => ({
      state,
      updateOption,
      updateImage,
    }),
    [state, updateOption, updateImage]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
}

export function useUpdateURL() {
  const router = useRouter();

  return (state: ProductState) => {
    const newParams = new URLSearchParams(window.location.search);
    Object.entries(state).forEach(([key, value]) => {
      newParams.set(key, value);
    });
    router.push(`?${newParams.toString()}`, { scroll: false });
  };
}
