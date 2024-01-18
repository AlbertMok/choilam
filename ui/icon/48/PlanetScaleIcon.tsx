import { forwardRef } from "react";

const PlanetScaleIcon = forwardRef<
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
    <g clipPath="url(#clip0_731_578)">
      <path
        d="M8 24C8 15.1273 15.1273 8 24 8C30.4727 8 36.0727 11.8545 38.6182 17.4545L17.4545 38.6182C16.5818 38.1818 15.7091 37.7455 14.9091 37.1636L28 24H24L12.6545 35.3455C9.81818 32.4364 8 28.4364 8 24Z"
        fill="white"
      />
      <path d="M40 24L24 40C32.8727 40 40 32.8727 40 24Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_731_578">
        <rect width="32" height="32" fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
));
PlanetScaleIcon.displayName = "PlanetScaleIcon";

export { PlanetScaleIcon };
