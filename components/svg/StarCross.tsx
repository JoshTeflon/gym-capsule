import * as React from "react"

const StarCross = ({...props}) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.798 13.078c5.394 9.23-8.983 9.23-3.596 0-8.217 9.23-10.51 6.938-1.28-1.28-9.23 5.395-9.23-8.983 0-3.596-9.23-8.217-6.937-10.51 1.28-1.28-5.394-9.23 8.983-9.23 3.596 0 8.217-9.23 10.51-6.937 1.28 1.28 9.23-5.394 9.23 8.984 0 3.597 9.23 8.217 6.934 10.508-1.28 1.28z"
        fill="#8A6AE3"
      />
    </svg>
  )
}

export default StarCross