import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CommentDiv=styled.div`
  text-align: start;
  margin: 0 20px; 

`


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