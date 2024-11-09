"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "@/lib/types";

const FooterMenuItem = ({ item }: { item: Menu }) => {
  const currentPathname = usePathname();
  const [isActive, setIsActive] = useState(currentPathname === item.path);

  useEffect(() => {
    setIsActive(currentPathname === item.path);
  }, [currentPathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        onClick={() => window.scrollTo(0, 0)}
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300",
          {
            "text-black dark:text-neutral-300": isActive,
          }
        )}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default function FooterMenu({ menu }: { menu: Menu[] }) {
  if (menu.length === 0) return null;

  return (
    <nav>
      <ul>
        {menu.map((menuItem: Menu) => (
          <FooterMenuItem key={menuItem.title} item={menuItem} />
        ))}
      </ul>
    </nav>
  );
}
