import * as React from "react"

const CaretDown = ({...props}) => {
  return (
    <svg
      width={14}
      height={7}
      viewBox="0 0 14 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.28.966L7.933 5.313a1.324 1.324 0 01-1.866 0L1.72.966"
        stroke="#BEBFC1"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default CaretDown