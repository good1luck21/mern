import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PostGlobalValue } from "./context/PostContext";

export default function Home() {
  const [frombk, setFromBk] = useState({});
  const { posts } = useContext(PostGlobalValue);
  const postList = posts.map((post, index) => {
    let homePost;
    if (index < 5) {
      homePost = (
        <div key={post.title}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
    }
    return homePost;
  });

  useEffect(() => {
    fetch("http://localhost:5050/api/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFromBk(data.message);
      });
  }, []);

  return (
    <>
      <div className="App">{postList}</div>
      <div>{frombk}</div>
    </>
  );
}
