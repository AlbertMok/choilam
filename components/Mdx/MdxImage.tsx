import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const MdxImage = forwardRef<
  React.ElementRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image> & {
    description?: React.ReactNode;
  }
>(({ className, ...props }, ref) => (
  <div className="flex flex-col items-center">
    <Image ref={ref} className={cn("rounded-md", className)} {...props} />
    {props.description && (
      <p className="mt-2 text-sm text-neutral-11 md:text-base">
        {props.description}
      </p>
    )}
  </div>
));
MdxImage.displayName = "MdxImage";

export default MdxImage;
