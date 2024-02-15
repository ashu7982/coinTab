


import React, { useState, useEffect } from 'react';

function PostPage({ userId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Cointab SE-ASSIGNMENT</h1>
      <button style={{ fontSize: '16px', padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}>Bulk Add</button>
      <button style={{ fontSize: '16px', padding: '10px 20px', marginBottom: '20px', cursor: 'pointer' }}>Download In Excel</button>
      <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Posts for User ID: {userId}</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <div><strong>Title:</strong> {post.title}</div>
            <div><strong>Body:</strong> {post.body}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostPage;
