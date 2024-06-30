import React from 'react'

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white-900"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
