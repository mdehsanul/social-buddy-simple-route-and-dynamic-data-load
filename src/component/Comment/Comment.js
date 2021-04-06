import React from "react";

const Comment = (props) => {
  const { name, email } = props.comment;
  return (
    <div>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Comment;