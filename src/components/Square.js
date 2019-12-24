import React from "react"

const Square = () => (
  <svg
    id="square"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="900"
    height="900"
    viewBox="0 0 900 900"
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="421.1588"
        y1="470.9026"
        x2="53.2723"
        y2="737.5276"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0deaae" />
        <stop offset="0.0647" stop-color="#0fe4b0" />
        <stop offset="0.4084" stop-color="#1acab9" />
        <stop offset="0.7175" stop-color="#21bbbf" />
        <stop offset="0.9603" stop-color="#23b5c1" />
      </linearGradient>
    </defs>
    <path
      d="M450,0,0,450,450,900,900,450ZM41.5924,444.4878l409.41-409.41,409.41,409.41-409.41,409.41Z"
      fill="url(#linear-gradient)"
    />
  </svg>
)

export default Square
