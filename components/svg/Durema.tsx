import * as React from "react"

const Durema = ({...props}) => {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.803 31.516c8.62 0 15.61-6.989 15.61-15.61 0-8.62-6.99-15.61-15.61-15.61C7.18.297.193 7.287.193 15.907c0 8.621 6.988 15.61 15.61 15.61zm4.87-23.948c.236-.842-.58-1.34-1.327-.808L8.929 14.181c-.81.577-.682 1.725.191 1.725h2.743v-.02h5.346l-4.356 1.536-1.92 6.822c-.237.843.58 1.34 1.326.809l10.417-7.421c.81-.577.682-1.726-.191-1.726h-4.16l2.347-8.338z"
        fill="#F15757"
      />
    </svg>
  )
}

export default Durema