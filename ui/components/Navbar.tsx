"use client";

import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { atom, createStore, Provider, useAtomValue } from "jotai";
import Link from "next/link";
import { motion } from "framer-motion";

export const navbarStore = createStore();

const activeValueAtom = atom<string | null>(null);

const Navbar = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  navbarStore.set(activeValueAtom, value);

  return (
    <Provider store={navbarStore}>
      <nav className="h-fit rounded-full bg-neutral-6 p-1">
        <ul className="flex items-center space-x-2">{children}</ul>
      </nav>
    </Provider>
  );
};

const NavbarItem = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  const isSelectedAtom = useMemo(
    () => atom((get) => get(activeValueAtom) === value),
    [value]
  );

  const isSelected = useAtomValue(isSelectedAtom);

  return (
    <li
      className={cn(
        "relative z-10 px-3 py-1 text-sm font-bold text-neutral-12",
        isSelected && "z-0"
      )}
    >
      <Link href={`/${value}`} className="relative z-10">
        {children}
      </Link>
      {isSelected && (
        <motion.div
          layoutId="thumb"
          className="absolute inset-0 z-0 rounded-full bg-neutral-1"
        />
      )}
    </li>
  );
};

export { Navbar, NavbarItem };
