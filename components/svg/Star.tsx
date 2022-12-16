import * as React from "react"

const Star = ({...props}) => {
  return (
    <svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={19}
      >
        <path fill="#D9D9D9" d="M0 0.5H18V18.5H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          d="M4.369 17l1.219-5.269L1.5 8.188l5.4-.47L9 2.75l2.1 4.969 5.4.468-4.088 3.544L13.633 17 9 14.206 4.369 17z"
          fill="#28292B"
        />
      </g>
    </svg>
  )
}

export default Star