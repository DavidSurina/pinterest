import React from 'react';
import PostList from '../../components/PostList';

export default function BestPosts({ posts }) {
  const getBestPosts = () => {
    return posts.filter(post => post.rating === 5);
  };

  return <PostList posts={getBestPosts()} />;
}