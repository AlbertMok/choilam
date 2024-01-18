import { forwardRef } from "react";

const TailwindCSSIcon = forwardRef<
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
    <rect width="48" height="48" rx="12" fill="#38BDF8" />
    <g clipPath="url(#clip0_731_555)">
      <mask
        id="mask0_731_555"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="8"
        y="14"
        width="32"
        height="20"
      >
        <path d="M8 14.5714H40V33.0857H8V14.5714Z" fill="white" />
      </mask>
      <g mask="url(#mask0_731_555)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 14.5714C19.7333 14.5714 17.0667 16.6286 16 20.7429C17.6 18.6857 19.4667 17.9143 21.6 18.4286C22.8172 18.7217 23.6871 19.5737 24.6501 20.516C26.2187 22.0514 28.0344 23.8286 32 23.8286C36.2667 23.8286 38.9333 21.7714 40 17.6572C38.4 19.7143 36.5333 20.4857 34.4 19.9714C33.1828 19.6783 32.3129 18.8263 31.3499 17.884C29.7813 16.3486 27.9656 14.5714 24 14.5714ZM16 23.8286C11.7333 23.8286 9.06667 25.8857 8 30C9.6 27.9429 11.4667 27.1714 13.6 27.6857C14.8172 27.9794 15.6871 28.8309 16.6501 29.7732C18.2187 31.3086 20.0344 33.0857 24 33.0857C28.2667 33.0857 30.9333 31.0286 32 26.9143C30.4 28.9714 28.5333 29.7429 26.4 29.2286C25.1828 28.9354 24.3129 28.0834 23.3499 27.1412C21.7813 25.6057 19.9656 23.8286 16 23.8286Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_731_555">
        <rect
          width="32"
          height="18.8571"
          fill="white"
          transform="translate(8 14.5714)"
        />
      </clipPath>
    </defs>
  </svg>
));
TailwindCSSIcon.displayName = "TailwindCSSIcon";

export { TailwindCSSIcon };
