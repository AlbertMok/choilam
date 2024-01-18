import { forwardRef } from "react";

const VercelIcon = forwardRef<
  SVGSVGElement,
  React.ComponentPropsWithoutRef<"svg">
>((props, ref) => (
  <svg
    ref={ref}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width="48" height="48" rx="12" fill="black" />
    <g clipPath="url(#clip0_731_587)">
      <path d="M24 13.5938L36 34.3786H12L24 13.5938Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_731_587">
        <rect
          width="24"
          height="20.8125"
          fill="white"
          transform="translate(12 13.5938)"
        />
      </clipPath>
    </defs>
  </svg>
));
VercelIcon.displayName = "VercelIcon";

export { VercelIcon };
