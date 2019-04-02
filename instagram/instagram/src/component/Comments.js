import React from 'react'

const Comments = props => {
    console.log(props)
    
    const {username, text}=props.comment 

    return (
    <div className="commentWrapper">
      <div className="commentName">{username}</div>
      <div className="commentText">{text}</div>
    </div>
  );
}


export default Comments;