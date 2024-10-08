import * as React from "react"

const Uh = ({...props}) => {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
        fill="#FFCC4D"
      />
      <path
        d="M16.333 12.667a3.667 3.667 0 100-7.334 3.667 3.667 0 000 7.334zM7.667 12.667a3.667 3.667 0 100-7.334 3.667 3.667 0 000 7.334z"
        fill="#F4F7F9"
      />
      <path
        d="M15.406 15.616c-1.842-.445-5.915-.04-7.441 2.937a.25.25 0 00.222.364c.057 0 .114-.02.16-.058 2.057-1.72 4.958-1.72 6.692-1.72 1.09 0 1.69 0 1.69-.472s-.47-.846-1.323-1.051zM7 8.666a1.662 1.662 0 00.25-3.308A3.627 3.627 0 005.8 5.85c-.287.3-.466.704-.466 1.151 0 .92.746 1.667 1.667 1.667zm8.667 0a1.662 1.662 0 00.25-3.308 3.625 3.625 0 00-1.451.491C14.179 6.15 14 6.553 14 7c0 .92.746 1.667 1.667 1.667z"
        fill="#65471B"
      />
    </svg>
  )
}

export default Uh