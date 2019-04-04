import React, { Component } from 'react'
import Comments from './Comments';
import CommentForm from './CommentForm';
class CommentSection extends Component {
  
  state={
    comments: this.props.comments,
    comment:''
  }
  
  
  addNewComment = e => {

    this.setState({
        comment: e.target.value
    });
    // console.log(e.target)
  }
  
  handleSubmit = e =>{
      e.preventDefault();
      
      const newComment ={
          text: this.state.comment,
          username: 'Ray'
      };
    //   console.log(this.state.comment)
      this.setState({
        comments: [...this.state.comments, newComment],
        comment:''
      });
  }
  
  
  render() {
        
    return (
        
       <div>
           {this.state.comments.map(comment=>
            <Comments comment={comment} key={comment.id} />
            )}
           <CommentForm 
           addNewComment={this.addNewComment} 
           comment={this.state.comment}
           handleSubmit={this.handleSubmit}
           />
       </div>
    )
  }
}


export default CommentSection;