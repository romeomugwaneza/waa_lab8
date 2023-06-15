import React, { useState } from "react"
import Posts from "./Posts"
import UpdatePost from "./UpdatePost"
import postsData from "../data/postsData"

export default function Dashboard() {
  const [posts, setPosts] = useState(postsData)
  function updatePost1(inputValue) {
    setPosts((prevPosts) => {
      const newPosts = [...prevPosts]
      newPosts[0].title = inputValue
      return newPosts
    })
  }
  return (
    <>
      <Posts posts={posts} />
      <UpdatePost handleUpdate={updatePost1} />
    </>
  )
}
