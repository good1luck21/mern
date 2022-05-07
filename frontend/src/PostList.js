import { useContext } from "react";
import { PostGlobalValue } from "./context/PostContext";

export default function PostList() {
  const { posts: postsList } = useContext(PostGlobalValue);
  const posts = postsList.map((post, index) => (
    <div key={post.title}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  ));
  return <div>{posts}</div>;
}
