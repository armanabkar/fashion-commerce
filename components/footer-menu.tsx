"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const FooterMenuItem = ({ item }: any) => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href=""
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300",
          {
            "text-black dark:text-neutral-300": active,
          }
        )}
      >
        {item}
      </Link>
    </li>
  );
};

export default function FooterMenu() {
  // if (!menu.length) return null;

  return (
    <nav>
      {/* <ul>
        {menu.map((item: Menu) => {
          return <FooterMenuItem key={item.title} item={item} />;
        })}
      </ul> */}
      <ul>
        <FooterMenuItem item={"Home"} />
        <FooterMenuItem item={"About"} />
        <FooterMenuItem item={"Terms & Conditions"} />
        <FooterMenuItem item={"Shipping & Return Policy"} />
        <FooterMenuItem item={"Privacy Policy"} />
        <FooterMenuItem item={"FAQ"} />
      </ul>
    </nav>
  );
}
