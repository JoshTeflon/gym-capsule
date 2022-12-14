import * as React from "react"

const Ziza = ({...props}) => {
  return (
    <svg
      width={78}
      height={32}
      viewBox="0 0 78 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_20_482)">
        <path d="M55.5 0h22l-19 32h-22l19-32z" fill="#FF7A00" />
        <path d="M35.5 0h16l-19 32h-16l19-32z" fill="#FF9736" />
        <path d="M19.5 0h12l-19 32H.5l19-32z" fill="#FFBC7D" />
      </g>
      <defs>
        <clipPath id="clip0_20_482">
          <path fill="#fff" d="M0 0H78V32H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Ziza