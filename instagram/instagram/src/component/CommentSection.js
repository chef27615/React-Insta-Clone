import React, { Component } from 'react'
import Comments from './Comments';
class CommentSection extends Component {
  
  state={
    userComments: this.props.user.comments
  }
  
  
  addNewComment(){

  }
    render() {
        console.log(this.state.userComments)
    return (
      <div>
        
      </div>
    )
  }
}


export default CommentSection;