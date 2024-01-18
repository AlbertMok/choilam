"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Avatar = () => {
  const path = usePathname();
  const isHome = path === "/home";

  return (
    <div className="relative h-8 w-8">
      <motion.div
        layoutId="avatar"
        className={cn("absolute  h-8 w-8", isHome && "top-16 h-16 w-16")}
      >
        <Link href={"/"}>
          <Image
            src={"/avatar.png"}
            alt={"avatar"}
            width={isHome ? 64 : 32}
            height={isHome ? 64 : 32}
          />
        </Link>
      </motion.div>
    </div>
  );
};
