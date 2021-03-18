import React from 'react'

type Props = {
  onClick: () => void
}

export const BaseButton: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button
      className="text-sm font-semibold bg-black text-white py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
