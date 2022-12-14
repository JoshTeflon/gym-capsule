import * as React from "react"

const Capelli = ({...props}) => {
  return (
    <svg
      width={53}
      height={32}
      viewBox="0 0 53 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_20_472)">
        <path
          d="M0 16C0 7.163 7.163 0 16 0h21c8.837 0 16 7.163 16 16v16H16C7.163 32 0 24.837 0 16z"
          fill="#4845D2"
        />
        <path
          d="M37 6H16C10.477 6 6 10.477 6 16s4.477 10 10 10h21c5.523 0 10-4.477 10-10S42.523 6 37 6z"
          fill="#A5B4FC"
        />
        <path d="M16 21a5 5 0 100-10 5 5 0 000 10z" fill="#000" />
        <path d="M14 15a1 1 0 100-2 1 1 0 000 2z" fill="#fff" />
        <path d="M38 21a5 5 0 100-10 5 5 0 000 10z" fill="#000" />
        <path d="M36 15a1 1 0 100-2 1 1 0 000 2z" fill="#fff" />
      </g>
      <defs>
        <clipPath id="clip0_20_472">
          <path fill="#fff" d="M0 0H53V32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Capelli