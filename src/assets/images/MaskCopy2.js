import * as React from "react";

function SvgMaskCopy2(props) {
  return (
    <svg width={382} height={310} {...props}>
      <defs>
        <filter
          id="mask-copy-2_svg__a"
          width="141.9%"
          height="156.2%"
          x="-20.9%"
          y="-28.1%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={38} />
        </filter>
      </defs>
      <path
        fill="#182639"
        fillRule="evenodd"
        d="M42 87.5h544.635V493H42z"
        filter="url(#mask-copy-2_svg__a)"
        style={{
          mixBlendMode: "multiply",
        }}
        transform="translate(54 8.356)"
      />
    </svg>
  );
}

export default SvgMaskCopy2;
