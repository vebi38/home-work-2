import React from "react";
import { useBlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const posts = useBlogContext();

  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
          <p>By {post.author}</p>
          <small>{new Date(post.createdAt).toLocaleDateString()}</small>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
