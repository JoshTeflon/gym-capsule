import * as React from "react"

const QuadCircle = ({...props}) => {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.09 12.18a6.09 6.09 0 006.09-6.09 6.09 6.09 0 006.091 6.09 6.09 6.09 0 00-6.09 6.091 6.09 6.09 0 00-6.09-6.09zm0 0a6.09 6.09 0 106.09 6.091 6.09 6.09 0 106.091-6.09 6.09 6.09 0 10-6.09-6.09 6.09 6.09 0 10-6.09 6.09z"
        fill="url(#paint0_linear_163_43)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_163_43"
          x1={-8.74326}
          y1={0.00000430129}
          x2={33.6373}
          y2={2.98125}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F66D00" />
          <stop offset={1} stopColor="#A335E6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QuadCircle