import Footer from "@/components/layout/footer";
import CheckoutItems from "@/components/checkout/checkout-items";
import CheckoutForm from "@/components/checkout/checkout-form";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Checkout",
  };
}

export default function Checkout() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="px-4 pb-8 lg:px-6">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white md:p-12 p-4 md:p-8 mb-6 lg:flex-row lg:gap-8 dark:border-neutral-800 dark:bg-black">
          <div className="p-4 md:p-8 mb-6">
            <div className="grid gap-14 gap-y-2 text-sm grid-cols-1 lg:grid-cols-6">
              <div className="lg:order-1 order-2 lg:col-span-4">
                <CheckoutForm />
              </div>

              <div className={`lg:order-2 order-1 text-gray-600 lg:col-span-2`}>
                <CheckoutItems />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
