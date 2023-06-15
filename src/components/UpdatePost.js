import { React, useRef } from "react"

export default function UpdatePost(props) {
  const inputRef = useRef(null)
  return (
    <div className="update">
      <input
        className="txtChange"
        type="text"
        ref={inputRef}
        placeholder="Update post 1 title"
      />
      <button
        className="btnChange"
        onClick={() => props.handleUpdate(inputRef.current.value)}
      >
        Update First Post
      </button>
    </div>
  )
}
