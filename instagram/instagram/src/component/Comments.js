import React, { Component } from 'react';
import PropTypes from 'prop-types';





class Comments extends Component{

  state={
    comment : this.props.comment
  }

  render(){ 

    const {username, text}=this.state.comment

    // console.log(this.state.comment)
    return(
        <div className="comment">
        <h4>{username}</h4>
        <p>{text}</p>
        </div>
    );
  }
}


Comments.propTypes ={
  username: PropTypes.string,
  text: PropTypes.string
}



export default Comments;