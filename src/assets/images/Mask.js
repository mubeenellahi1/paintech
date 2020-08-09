import * as React from "react";

function SvgMask(props) {
  return (
    <svg width={134} height={160} {...props}>
      <defs>
        <filter
          id="mask_svg__a"
          width="222.8%"
          height="188.5%"
          x="-61.4%"
          y="-44.2%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={38} />
        </filter>
      </defs>
      <path
        fill="#3B365F"
        fillRule="evenodd"
        d="M33 81.243h185.725V339H33z"
        filter="url(#mask_svg__a)"
        style={{
          mixBlendMode: "multiply",
        }}
        transform="translate(63 14.356)"
      />
    </svg>
  );
}

export default SvgMask;
