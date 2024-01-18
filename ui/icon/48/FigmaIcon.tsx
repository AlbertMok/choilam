import { forwardRef } from "react";

const FigmaIcon = forwardRef<
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
    <g clipPath="url(#clip0_731_425)">
      <path
        d="M18 42C21.312 42 24 39.312 24 36V30H18C14.688 30 12 32.688 12 36C12 39.312 14.688 42 18 42Z"
        fill="#0ACF83"
      />
      <path
        d="M12 24C12 20.688 14.688 18 18 18H24V30H18C14.688 30 12 27.312 12 24Z"
        fill="#A259FF"
      />
      <path
        d="M12 12C12 8.688 14.688 6 18 6H24V18H18C14.688 18 12 15.312 12 12Z"
        fill="#F24E1E"
      />
      <path
        d="M24 6H30C33.312 6 36 8.688 36 12C36 15.312 33.312 18 30 18H24V6Z"
        fill="#FF7262"
      />
      <path
        d="M36 24C36 27.312 33.312 30 30 30C26.688 30 24 27.312 24 24C24 20.688 26.688 18 30 18C33.312 18 36 20.688 36 24Z"
        fill="#1ABCFE"
      />
    </g>
    <defs>
      <clipPath id="clip0_731_425">
        <rect width="24" height="36" fill="white" transform="translate(12 6)" />
      </clipPath>
    </defs>
  </svg>
));
FigmaIcon.displayName = "FigmaIcon";

export { FigmaIcon };
