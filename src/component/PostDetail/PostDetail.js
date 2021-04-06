import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "../Comment/Comment";

const PostDetail = () => {
  // useParams()
  const { postId } = useParams();

  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  const [comments, setComments] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1>the post number:{postId}</h1>
      <p>user post Id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      <p>Number of comments: {comments.length}</p>
      {comments.map((cmd) => (
        <Comment comment={cmd}></Comment>
      ))}
    </div>
  );
};

export default PostDetail;
