import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';
import PostIcon from './PostIcon'
import styled from 'styled-components';

const PostWrapper = styled.div`
    border: 1px solid #dcdcdc;
    width: 54.5%;
    margin: 10px auto;
    
    .userInfo{
        margin: 0 auto;
        display: flex;
        
        img{
            height: 40px;
            margin: 10px 20px;
            border-radius: 50%;
        }
    }

    .postTime{
        text-align: start;
        margin-top: 5px;
        margin-left: 20px;
        margin-bottom: 20px;
        font-size: 11px;
        color: #555;
    }


`




class PostContainer extends React.Component{

    state={
        comment: this.props.user.comment
    }
   
    render(){
    const {username, thumbnailUrl, imageUrl, likes, timestamp, comments } = this.props.user
    //console.log(comments)
        return(
                <PostWrapper>
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
                </PostWrapper>
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