import React from 'react';
import Comments from './Comments';
import PropTypes from 'prop-types';

const PostContainer = props =>{
    
    const {username, thumbnailUrl, imageUrl, likes, timestamp, comments} = props.user
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
                {comments.map(comment=>
                    <Comments comment={comment} key ={comment.id} />
                    )}
                <div className="postTime">{timestamp}</div>
            </div>
        </div>
    );
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