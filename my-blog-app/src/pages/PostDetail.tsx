
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts } = useContext(BlogContext);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div>
        <h2>Post Not Found</h2>
        <Link to="/">Back to Posts</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>
        <em>By {post.author} on {new Date(post.createdAt).toLocaleDateString()}</em>
      </p>
      <p>{post.content}</p>
      <Link to="/">← Back to Posts</Link>
    </div>
  );
};

export default PostDetail;
