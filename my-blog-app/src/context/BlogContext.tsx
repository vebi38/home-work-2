
import React, { createContext, ReactNode } from 'react';
import { Post } from '../types/Post';

interface BlogContextType {
  posts: Post[];
}

export const BlogContext = createContext<BlogContextType>({ posts: [] });

const BlogProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const posts: Post[] = [
    {
      id: '1',
      title: 'Getting Started with React',
      content: 'React is a JavaScript library for building UI...',
      author: 'John Doe',
      createdAt: new Date('2024-01-01'),
    },
    {
      id: '2',
      title: 'Understanding the Context API',
      content: 'Context lets you share state between components...',
      author: 'Jane Smith',
      createdAt: new Date('2024-02-10'),
    },
    {
      id: '3',
      title: 'React Router Basics',
      content: 'React Router allows navigation between views...',
      author: 'Mark Lee',
      createdAt: new Date('2024-03-20'),
    },
  ];

  return <BlogContext.Provider value={{ posts }}>{children}</BlogContext.Provider>;
};

export default BlogProvider;
