import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';


class PostContainer extends React.Component{

   
    render(){
    const {username, thumbnailUrl, imageUrl, likes, timestamp} = this.props.user
        return(
            <div className="postContainerWrapper">
                <div className="postWrapper">
                    <div className="userInfo">
                    <img src={thumbnailUrl} alt="userThumbNail" />
                    <h3><strong>{username}</strong></h3>
                    </div>
                    <div className="userPost" alt="userPostImg">
                    <img src={imageUrl} alt="images" />
                    <div className="postIcon">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    </div>
                    <div className="postText">{likes} Likes</div>
                    </div>

                    <div className="postTime">{timestamp}</div>

                </div>
            </div>
        );
    } 

    addComment = comment =>{
        this.setState({
            comment:[...this.state.comment, comment]
        });
    
    };



}

PostContainer.propTypes = {
    username : PropTypes.string,
    thumbnailUrl : PropTypes.string,
    imageUrl : PropTypes.string,
    likes : PropTypes.number,
    timestamp : PropTypes.string,
    comments : PropTypes.shape({
        username : PropTypes.string,
        text: PropTypes.string
    })
}



export default PostContainer