import { React, useState } from "react"
import Post from "./Post"

export default function Posts({ posts }) {
  const postElements = posts.map((post) => {
    return (
      <Post
        key={post.id}
        id={post.id}
        title={post.title}
        author={post.author}
      />
    )
  })
  return <div className="posts">{postElements}</div>
}
