import React from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../context/BlogContext";

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const posts = useBlogContext();
  const post = posts.find((p) => p.id === id);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><i>By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</i></p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
