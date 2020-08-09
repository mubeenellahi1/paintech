import * as React from "react";

function SvgMaskCopy(props) {
  return (
    <svg width={706} height={387} {...props}>
      <defs>
        <filter
          id="mask-copy_svg__a"
          width="145.2%"
          height="148.6%"
          x="-22.6%"
          y="-24.3%"
          filterUnits="objectBoundingBox"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation={38.571} />
        </filter>
      </defs>
      <path
        fill="#44485D"
        fillRule="evenodd"
        d="M68 89h512.211v475.953H68z"
        filter="url(#mask-copy_svg__a)"
        style={{
          mixBlendMode: "multiply",
        }}
        transform="translate(29 8.356)"
      />
    </svg>
  );
}

export default SvgMaskCopy;
