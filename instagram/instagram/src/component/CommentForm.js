import React, { Component } from 'react'

class CommentForm extends Component {

state={
    name:''
}

handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
};

handleSubmit=(e)=>{
    e.preventDefault();

    this.props.addComment({
        name: this.state.name,
        id: Date.now()
    })

    this.setState({
        name:''
    });

}



render(){
    return(
        <div className="formDiv">
            <form onSubmit={this.handleSubmit}>
                <input
                   type="text"
                   placeholder="say something"
                   name="name"
                   value={this.state.name}
                   onChange={this.handleChange} 
                />
                <button>Post</button>
            </form>
        </div>
    )}
}


export default CommentForm;