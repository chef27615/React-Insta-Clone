import React, { Component } from 'react';
import PropTypes from 'prop-types';





class Comments extends Component{
  
  

  state={
    userComments: this.props.userComment
  }
  
  
  
  
  render(){ 
    return(

      <div className="comments">
        <div className="comment">
        <h4>{this.state.userComments.username}</h4>
        <p>{this.state.userComments.text}</p>
        </div>
        
      </div>
    );
  }
}


Comments.propTypes ={
  username: PropTypes.string,
  text: PropTypes.string
}



export default Comments;