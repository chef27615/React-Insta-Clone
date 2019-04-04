import React from 'react'
import PropTypes from 'prop-types';





const Comments = props => {
  const {username, text} = props.comment
  return(
    <div className="commentDiv">
      <p><strong>{username}</strong> {text}</p>
    </div>
  );
}


Comments.propTypes ={
  username: PropTypes.string,
  text: PropTypes.string
}



export default Comments;