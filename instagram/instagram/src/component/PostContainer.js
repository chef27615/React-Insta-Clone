import React from 'react'
import Comments from './Comments';
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
                    <img src={imageUrl}/>
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


export default PostContainer