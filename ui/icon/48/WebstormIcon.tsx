import { forwardRef } from "react";

const WebstormIcon = forwardRef<
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
    <g clipPath="url(#clip0_731_466)">
      <path
        d="M7.97256 41.7189L2.05713 6.65601L12.9966 2.11658L19.9817 6.26743L26.3817 2.81601L39.7166 7.93601L32.2377 45.9429L7.97256 41.7189Z"
        fill="url(#paint0_linear_731_466)"
      />
      <path
        d="M45.9428 16.9188L40.2788 2.93027L30.0023 2.05713L14.1394 17.2983L18.4091 36.9417L26.3817 42.5326L45.9428 30.9257L41.1428 21.9246L45.9428 16.9188Z"
        fill="url(#paint1_linear_731_466)"
      />
      <path
        d="M37.152 14.8343L41.1428 21.9246L45.9428 16.9189L42.4183 8.20572L37.152 14.8343Z"
        fill="url(#paint2_linear_731_466)"
      />
      <path
        d="M10.2858 10.2857H37.7143V37.7143H10.2858V10.2857Z"
        fill="black"
      />
      <path
        d="M13.7051 32.5303H23.9908V34.2446H13.7051V32.5303Z"
        fill="white"
      />
      <path
        d="M23.4422 13.7006L21.9108 19.7028L20.16 13.7006H18.4182L16.6628 19.7028L15.136 13.7006H12.736L15.6754 23.9908H17.6045L19.2868 18.0343L20.9508 23.9908H22.9028L25.8377 13.7006H23.4422Z"
        fill="white"
      />
      <path
        d="M26.2673 22.5234L27.6068 20.9189C28.4482 21.6959 29.543 22.141 30.6879 22.1714C31.6022 22.1714 32.1782 21.8057 32.1782 21.1977V21.1703C32.1782 20.5943 31.8216 20.3017 30.0982 19.8583C28.0182 19.328 26.6788 18.752 26.6788 16.704V16.672C26.6788 14.8023 28.1828 13.5634 30.2902 13.5634C31.6814 13.5388 33.0371 14.0031 34.121 14.8754L32.9416 16.5851C32.1709 15.9822 31.235 15.6283 30.2582 15.5703C29.3896 15.5703 28.9325 15.968 28.9325 16.4846V16.5166C28.9325 17.1931 29.3896 17.4309 31.1588 17.888C33.2525 18.4366 34.4319 19.1863 34.4319 20.9874V21.0149C34.4319 23.0629 32.8685 24.2149 30.6422 24.2149C29.0306 24.2212 27.4732 23.6337 26.2673 22.5646"
        fill="white"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_731_466"
        x1="17.7737"
        y1="2.97143"
        x2="29.1291"
        y2="43.8583"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.28" stopColor="#07C3F2" />
        <stop offset="0.94" stopColor="#087CFA" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_731_466"
        x1="21.3165"
        y1="8.15999"
        x2="40.5303"
        y2="36.3337"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.14" stopColor="#FCF84A" />
        <stop offset="0.37" stopColor="#07C3F2" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_731_466"
        x1="40.352"
        y1="11.6434"
        x2="42.8754"
        y2="20.5806"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.28" stopColor="#07C3F2" />
        <stop offset="0.94" stopColor="#087CFA" />
      </linearGradient>
      <clipPath id="clip0_731_466">
        <rect width="48" height="48" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
));
WebstormIcon.displayName = "WebstormIcon";

export { WebstormIcon };
