import React from 'react';
import PropTypes from 'prop-types';


const Comments = props => {
   
    
    const {username, text}=props.comment 

    return (
    <div className="commentWrapper">
      <div className="commentName">{username}</div>
      <div className="commentText">{text}</div>
    </div>
  );
}


Comments.propTypes ={
  username: PropTypes.string,
  text: PropTypes.string
}



export default Comments;