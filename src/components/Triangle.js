import React from "react"

const Triangle = () => (
  <svg
    id="triangle"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="900"
    height="900"
    viewBox="0 0 900 900"
  >
    <defs>
      <clipPath id="clip-path">
        <rect width="899" height="899" fill="none" />
      </clipPath>
      <linearGradient
        id="linear-gradient"
        x1="-17.8517"
        y1="-10.5749"
        x2="1191.6279"
        y2="839.9925"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#0deaae" />
        <stop offset="0.7064" stopColor="#23b5c1" />
      </linearGradient>
    </defs>
    <g clipPath="url(#clip-path)">
      <path
        d="M542.4991-513.315.7038,899.2815,1495,662.148Zm8.0054,70.81L1419.3628,629.7361,56.2862,846.0461Z"
        fill="url(#linear-gradient)"
      />
    </g>
  </svg>
)

export default Triangle
