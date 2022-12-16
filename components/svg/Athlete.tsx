import * as React from "react"

const Athlete = ({...props}) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.723.649a.667.667 0 00-.72-.608L.674.154a.667.667 0 00-.608.72l.22 2.58a.667.667 0 00.097 1.15L.616 7.35a.667.667 0 00.72.608l1.33-.113a.667.667 0 00.607-.72L3.027 4.23c.34-.061.673-.119 1.002-.174.07 1.1.274 2.966.648 4.724.24 1.12.568 2.29 1.024 3.21.227.458.522.927.912 1.298.344.328.811.618 1.387.694v2.888a89.587 89.587 0 01-.217-.078l-.149-.054c-.67-.24-1.35-.484-1.87-.615-.253-.064-.635-.147-1.01-.114-.32.024-.624.144-.875.344a1.48 1.48 0 00-.546 1.157c0 .548.188 1.96.347 3.087.098.696.2 1.391.307 2.086l.021.14.006.036.001.01v.003l1.318-.204-1.317.204a1.333 1.333 0 002.647-.11l.246-3.45c.741.265 1.606.571 2.46.811.848.239 1.78.44 2.631.44.851 0 1.783-.201 2.631-.44a37.408 37.408 0 002.44-.805l.266 3.452a1.334 1.334 0 002.647.102l-1.317-.204 1.317.204v-.004l.002-.009.006-.037.021-.14c.107-.694.21-1.39.307-2.085.16-1.127.347-2.539.347-3.087a1.48 1.48 0 00-.546-1.157c-.25-.2-.556-.32-.876-.344-.374-.033-.756.05-1.009.113-.52.132-1.2.376-1.87.616l-.149.054-.217.078v-2.885c1.26-.14 2.023-1.162 2.444-1.975.488-.94.807-2.131 1.023-3.257.338-1.76.472-3.607.515-4.688.325.053.655.11.99.17l-.246 2.892a.667.667 0 00.609.72l1.328.113a.666.666 0 00.72-.608l.234-2.748a.666.666 0 00.098-1.15l.219-2.579a.667.667 0 00-.608-.72L21.997.041a.667.667 0 00-.72.608l-.191 2.25a80.796 80.796 0 00-1.251-.21 1.334 1.334 0 00-2.108-.302c-4.051-.511-7.481-.51-11.462-.006a1.333 1.333 0 00-2.096.302c-.41.065-.828.136-1.255.212L2.724.648zm4.562 7.573c-.31-1.5-.513-3.02-.608-4.55 3.688-.449 6.897-.449 10.65.01-.025.887-.138 2.795-.479 4.566-.2 1.04-.46 1.934-.771 2.535-.212.408-.358.523-.406.55H8.43c-.078-.08-.197-.244-.338-.529-.308-.622-.582-1.536-.806-2.583v.001zM15 7a3 3 0 11-6 0 3 3 0 016 0z"
        fill="#fff"
      />
    </svg>
  )
}

export default Athlete