import { Navbar } from "@/components/Navbar/Navbar";
import { ThemeButton } from "@/components/Button/ThemeButton";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar } from "@/app/Avatar";

export const Header = forwardRef<
  React.ElementRef<"header">,
  React.ComponentPropsWithoutRef<"header">
>(({ className, ...props }, ref) => (
  <header
    ref={ref}
    className={cn("flex items-center justify-between py-6", className)}
    {...props}
  >
    <Avatar />
    <Navbar />
    <ThemeButton />
  </header>
));
Header.displayName = "Header";
