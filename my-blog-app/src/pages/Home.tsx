
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogContext } from '../context/BlogContext';

const Home: React.FC = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      <h1>All Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={\`/posts/\${post.id}\`}>
              <strong>{post.title}</strong>
            </Link>{' '}
            by {post.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
