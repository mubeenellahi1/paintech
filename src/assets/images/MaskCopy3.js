import * as React from "react";

function SvgMaskCopy3(props) {
  return (
    <svg width={767} height={400} {...props}>
      <defs>
        <filter
          id="mask-copy-3_svg__a"
          width="120.7%"
          height="147.2%"
          x="-10.4%"
          y="-23.6%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={38} />
        </filter>
      </defs>
      <path
        fill="#7B818C"
        fillRule="evenodd"
        d="M40 88h1099.083v483H40z"
        filter="url(#mask-copy-3_svg__a)"
        style={{
          mixBlendMode: "multiply",
        }}
        transform="translate(56 7.356)"
      />
    </svg>
  );
}

export default SvgMaskCopy3;
