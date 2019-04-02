import React from 'react'

const Comments = props => {
    console.log(props)
    
    const {username, text}=props.comment 

    return (
    <div>
      <div>{username}</div>
      <div>{text}</div>
    </div>
  );
}


export default Comments;