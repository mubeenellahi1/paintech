import * as React from "react";

function SvgChat(props) {
  return (
    <svg width={26} height={24} {...props}>
      <g fill="#FFF" fillRule="evenodd">
        <path
          fillRule="nonzero"
          d="M4.97 17.08C5.525 16.46 6.55 16 7.384 16H24c.003 0 0-14 0-14 0 .004-22 0-22 0v18.389l2.97-3.31zM0 2.003C0 .897.895 0 2 0h22c1.103 0 2 .9 2 2v14c0 1.106-.89 2-2 2H7.384c-.265 0-.749.217-.927.416L2.415 22.92C1.435 24.013 0 23.482 0 21.997V2.003z"
        />
        <path d="M12 8h2v2h-2zM8 8h2v2H8zm8 0h2v2h-2z" />
      </g>
    </svg>
  );
}

export default SvgChat;
