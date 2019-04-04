import React from 'react'

const CommentForm=props=> {
  
  return (
    <form onSubmit={props.handleSubmit} >
        <input 
            onChange={props.addNewComment}
            value={props.comment}
            type="text"
            placeholder="Say Something..."
        /> 
    </form>
    
  )
}


export default CommentForm;