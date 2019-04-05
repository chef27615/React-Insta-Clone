import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faOutLine } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";


class PostIcon extends Component {
  
    state={
        likes: this.props.likes,
        on: false
    }
    
toggleIcon = e =>{
    
    e.preventDefault();
    this.setState({
        on: !this.state.on
    })
}
addLikes = e =>{
    e.preventDefault();
    
}


    render() {
        // console.log(this.state.on)
        
    return (
      <div>      
           <div className="likeIcon"
           onClick={this.toggleIcon}
           >
            <FontAwesomeIcon icon={faOutLine} />
           </div>
        
        <p onChange={this.addLikes}
           value= {this.state.likes}           
        >
        {this.state.likes}</p>

      </div>
    )
  }
}


export default PostIcon