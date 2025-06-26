import React, { createContext, useContext } from "react";

// Define the BlogPost type
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  createdAt: string; // ISO string or date
}

// Hardcoded blog posts
const defaultPosts: BlogPost[] = [
  {
    id: "1",
    title: "Welcome to My Blog",
    content: "This is the first post on my awesome blog!",
    author: "Vebi",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "React Context Guide",
    content: "In this post, we explore how to use React Context effectively...",
    author: "Jane Doe",
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Top 10 TypeScript Tips",
    content: "Want to improve your TS skills? Start with these 10 simple tips...",
    author: "John Smith",
    createdAt: new Date().toISOString(),
  },
];

export const BlogContext = createContext<BlogPost[]>(defaultPosts);

export const useBlogContext = () => useContext(BlogContext);

// Context Provider
export const BlogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BlogContext.Provider value={defaultPosts}>{children}</BlogContext.Provider>;
};
