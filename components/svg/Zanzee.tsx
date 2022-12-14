import * as React from "react"

const Zanzee = ({...props}) => {
  return (
    <svg
      width={33}
      height={32}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.333 8.5a7.5 7.5 0 01-7.5 7.5h-7.5V8.5a7.5 7.5 0 1115 0zM16.333 23.5a7.5 7.5 0 017.5-7.5h7.5v7.5a7.5 7.5 0 01-15 0z"
        fill="#17CF97"
      />
      <path
        d="M1.333 23.5a7.5 7.5 0 007.5 7.5h7.5v-7.5a7.5 7.5 0 00-15 0zM31.333 8.5a7.5 7.5 0 00-7.5-7.5h-7.5v7.5a7.5 7.5 0 1015 0z"
        fill="#17CF97"
      />
    </svg>
  )
}

export default Zanzee