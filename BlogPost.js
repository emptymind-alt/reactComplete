// BlogPost.js

import React from 'react';

const BlogPost = (props) => {
  const { title, author, content } = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
