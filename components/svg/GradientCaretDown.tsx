import * as React from "react"

const GradientCaretDown = ({...props}) => {
  return (
    <svg
      width={11}
      height={8}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.176 5.132l3.657-3.657a.739.739 0 111.063 1.026l-.018.018L5.699 6.7a.739.739 0 01-1.045 0L.475 2.52a.739.739 0 111.027-1.063l.018.018 3.656 3.657z"
        fill="url(#paint0_linear_307_172)"
        stroke="url(#paint1_linear_307_172)"
        strokeWidth={0.5}
      />
      <defs>
        <linearGradient
          id="paint0_linear_307_172"
          x1={-1.05264}
          y1={2.14828}
          x2={7.30141}
          y2={10.5901}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D62B1F" />
          <stop offset={1} stopColor="#59419B" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_307_172"
          x1={-1.05264}
          y1={2.14828}
          x2={7.30141}
          y2={10.5901}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D62B1F" />
          <stop offset={1} stopColor="#59419B" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default GradientCaretDown