import * as React from "react"

const CaretRight = ({...props}) => {
  return (
    <svg
      width={7}
      height={12}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.241 6.082L.584 2.426A.74.74 0 111.61 1.361l.018.018 4.18 4.18a.739.739 0 010 1.045L1.63 10.782A.74.74 0 01.566 9.758l.018-.018 3.657-3.657z"
        fill="url(#paint0_linear_307_256)"
        stroke="url(#paint1_linear_307_256)"
        strokeWidth={0.5}
      />
      <defs>
        <linearGradient
          id="paint0_linear_307_256"
          x1={1.25741}
          y1={12.3112}
          x2={9.69925}
          y2={3.95713}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D62B1F" />
          <stop offset={1} stopColor="#59419B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_307_256"
          x1={1.25741}
          y1={12.3112}
          x2={9.69925}
          y2={3.95713}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D62B1F" />
          <stop offset={1} stopColor="#59419B" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default CaretRight