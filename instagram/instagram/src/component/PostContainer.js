import React from 'react'
import Comments from './Comments';
const PostContainer = props =>{
    
    const {username, thumbnailUrl, imageUrl, likes, timestamp, comments} = props.user
    return(
        <div className="postContainerWrapper">
            <div className="userInfo">
                <h3><strong>{username}</strong></h3>
                <img src={thumbnailUrl} alt="userThumbNail" />
            </div>
            <div className="userPost" alt="userPostImg">
                <img src={imageUrl}/>
                <div>{likes}</div>
                <div>{timestamp}</div>
            </div>
            {comments.map(comment=>
                <Comments comment={comment} key ={comment.id} />
                )}

        </div>
    );
}


export default PostContainer