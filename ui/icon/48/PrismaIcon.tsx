import { forwardRef } from "react";

const PrismaIcon = forwardRef<
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
    <g clipPath="url(#clip0_731_574)">
      <path
        d="M35.8418 31.5486L25.875 10.3827C25.6227 9.85206 25.0998 9.50242 24.513 9.47206C23.9248 9.43265 23.3636 9.72361 23.0568 10.227L12.2467 27.7356C11.9112 28.2753 11.9182 28.9605 12.2649 29.4932L17.55 37.6777C17.9606 38.3087 18.7374 38.5943 19.459 38.3797L34.7963 33.843C35.2636 33.7064 35.6486 33.3739 35.8519 32.9316C36.0524 32.4914 36.049 31.9853 35.8425 31.5478L35.8418 31.5486ZM33.6104 32.4564L20.5957 36.3048C20.1987 36.4229 19.8176 36.0788 19.9002 35.6781L24.55 13.414C24.6369 12.9974 25.2121 12.9315 25.394 13.3169L34.0016 31.5957C34.0786 31.7605 34.0795 31.9508 34.0041 32.1164C33.9287 32.282 33.7846 32.4062 33.6096 32.4564H33.6104Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_731_574">
        <rect
          width="24"
          height="29.0625"
          fill="white"
          transform="translate(12 9.46875)"
        />
      </clipPath>
    </defs>
  </svg>
));
PrismaIcon.displayName = "PrismaIcon";

export { PrismaIcon };
