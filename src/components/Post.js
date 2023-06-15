import React from "react"

export default function Post(props) {
  return (
    <div className="post">
      <p>
        <span>ID:</span> {props.id}
      </p>
      <p>
        <span>Title:</span> {props.title}
      </p>
      <p>
        <span>Author:</span> {props.author}
      </p>
    </div>
  )
}
