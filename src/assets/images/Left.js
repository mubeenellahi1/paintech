import * as React from "react";

function SvgLeft(props) {
  return (
    <svg width={33} height={15} {...props}>
      <path
        fill="#62C8A5"
        fillRule="evenodd"
        d="M29.364 8.356H0v-2h29.586L25 1.77 26.414.356l6 6H33v2h-.808l-5.778 5.778L25 12.719l4.364-4.363z"
      />
    </svg>
  );
}

export default SvgLeft;
