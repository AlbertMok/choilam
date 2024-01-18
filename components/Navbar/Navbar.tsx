"use client";

import { usePathname } from "next/navigation";
import { NavbarItem, Navbar as NavbarRoot } from "@/ui/components/Navbar";
import { nav } from "@/config/nav";

export function Navbar() {
  const pathname = usePathname().split("/").at(1) ?? "";

  return (
    <NavbarRoot value={pathname}>
      {nav.map((item, index) => (
        <NavbarItem value={item.value} key={`${item.name}-${index}`}>
          {item.name}
        </NavbarItem>
      ))}
    </NavbarRoot>
  );
}
