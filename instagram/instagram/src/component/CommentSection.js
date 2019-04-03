import React, { Component } from 'react'
import Comments from './Comments';
import CommentForm from './CommentForm';
class CommentSection extends Component {
  
  state={
    comments: this.props.comments
  }
  
  
  addNewComment = comment => {
    this.setState({
        comments: [... this.state.comments, comment]
    })
  }
    render() {
        // console.log(this.state.comments)
    return (
       <div>
           {this.state.comments.map(comment=>
            <Comments comment={comment} key={comment.id} />
            )}
           <CommentForm addNewComment={this.addNewComment} />
       </div>
    )
  }
}


export default CommentSection;