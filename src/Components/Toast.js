import React from 'react'

function Toast({ success, error, text }) {
  return (
    <div className={`toast d-none ${success && 'success'} ${error && 'error'}`}>
      {text}
    </div>
  )
}

export default Toast
