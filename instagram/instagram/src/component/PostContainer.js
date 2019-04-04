import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import PostIcon from './PostIcon'

class PostContainer extends React.Component{

    state={
        comment: this.props.user.comment
    }
   
    render(){
    const {username, thumbnailUrl, imageUrl, likes, timestamp, comments } = this.props.user
    //console.log(comments)
        return(
            <div className="postContainerWrapper">
                <div className="postWrapper">
                    <div className="userInfo">
                    <img src={thumbnailUrl} alt="userThumbNail" />
                    <h3><strong>{username}</strong></h3>
                    </div>
                    <div className="userPost" alt="userPostImg">
                    <img src={imageUrl} alt="images" />
                    <PostIcon likes={likes}/>
                    </div>
                    <CommentSection comments = {comments} key = {comments.id}/>
                     <div className="postTime">{timestamp}</div>

                </div>
            </div>
        );
    } 

    



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