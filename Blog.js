// Blog.js

import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to React',
      author: 'John Doe',
      content: 'This is a blog post about React...',
    },
    {
      id: 2,
      title: 'State Management in React',
      author: 'Jane Smith',
      content: 'Exploring different state management options...',
    },
    {
      id: 3,
      title: 'React Hooks',
      author: 'Bob Johnson',
      content: 'Understanding the power of React Hooks...',
    },
  ];

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} title={post.title} author={post.author} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;
