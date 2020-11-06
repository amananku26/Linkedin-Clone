import {LINKEDIN_POST_GET_REQUEST,
  LINKEDIN_POST_GET_SUCCESS,
  LINKEDIN_POST_GET_FAILURE,
  UPLOADING_POST_REQUEST,
  UPLOADING_POST_SUCCESS,
  UPLOADING_POST_FAILURE,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
  MAKE_LIKE_REQUEST,
  MAKE_LIKE_SUCCESS,
  MAKE_LIKE_FAILURE} from './actionTypes'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

// GETTING THE DATA FROM THE http://localhost:3000/posts
export const PostGetRequest = () => ({
    type:LINKEDIN_POST_GET_REQUEST
})

export const PostGetSuccess = (data) => ({
    type:LINKEDIN_POST_GET_SUCCESS,
    PostData:data
})

export const PostGetfailure = (error) => ({
    type:LINKEDIN_POST_GET_FAILURE,
    error:error

})

// get axios
export const getPostData = () => {
    return (dispatch) => {
      dispatch(PostGetRequest());
      return axios
        .get("http://localhost:3000/posts")
        .then((res) => {
          // console.log("response success", res.data);
          return dispatch(PostGetSuccess(res.data));
        })
        .catch((err) => dispatch(PostGetfailure(err)));
    };
  };

// put axios
// UPLOADING THE POST ON http://localhost:3000/posts
export const UploadingPostRequest = () => ({
  type:UPLOADING_POST_REQUEST
})

export const UploadingPostSuccess = () => ({
  type:UPLOADING_POST_SUCCESS
})

export const UploadingPostfailure = (error) => ({
  type:UPLOADING_POST_FAILURE,
  error:error

})
export const UploadingPost = (uploadPost) => {
  // console.log(uploadPost);
  var likes=[],comment=[]
  var avatar_url=uploadPost.avatar_url, author_title=uploadPost.author_title,imagePost=uploadPost.imagePost,author_name=uploadPost.author_name,author_id=uploadPost.author_id,author_username=uploadPost.author_username
  return (dispatch) => {
    dispatch(UploadingPostRequest());
    return axios
      .post("http://localhost:3000/posts",{author_title,author_name,author_id,author_username,avatar_url,imagePost,likes,comment})
      .then((res) => {
        // console.log("upload Post Successful")
        return dispatch(UploadingPostSuccess(res.data))
      })
      .then(()=> dispatch(getPostData()))
      .catch((err) => dispatch(UploadingPostfailure(err)));
  };
};


// make likes
// MAKE LIKE
export const toggleLikeRequest = () => ({
  type:MAKE_LIKE_REQUEST
})
export const toggleLikeSuccess = (action) => ({
  type:MAKE_LIKE_SUCCESS,
  action : {
    action:action,
    likestatus:false
  }

})
export const toggleLikeFailure = (error) => ({
  type:MAKE_LIKE_FAILURE,
  error:error

})

// .patch(`http://localhost:3000/posts/${PostDataId}`,{likes:[...likes,{username,user_id,PostDataId}]})

export const toggleLike = (action) => {
  // console.log(action);
  let {PostDataId,postLikes,user_id,username} = action
  let data = postLikes.find((item)=>item.user_id == user_id)
  if(!data){
     postLikes = [...postLikes,{username:username,user_id:user_id}]
  } else {
     postLikes = postLikes.filter((item)=>item.user_id !=user_id )
  }
  return (dispatch) => {
    dispatch(toggleLikeRequest());
    return axios
      .patch(`http://localhost:3000/posts/${PostDataId}`,{
        likes:postLikes
      })
      .then((res) => dispatch(toggleLikeSuccess(res.data)))
      .then(()=> dispatch(getPostData()))
      .catch((err) => dispatch(toggleLikeFailure(err)));
  };
};

// postCommentData
export const PostCommentRequest = (payload) => ({
  type:POST_COMMENT_REQUEST,
  payload
})

export const PostCommentSuccess = (payload) => ({
  type:POST_COMMENT_SUCCESS,
  payload
})

export const PostCommentfailure = (err) => ({
  type:POST_COMMENT_FAILURE,
  Error

})

export const postCommentData = (payload) => {
  console.log(payload);
  const {username,imageComment,comment_body,PostDataId,comm} = payload
  var d = new Date();
  var comm1 = [...comm,{username:username,imageComment:imageComment,comment_body:comment_body,PostDataId:PostDataId,id:uuidv4(),timestamp:d}]
  return (dispatch) => {
    dispatch(PostCommentRequest());
    return axios
      .patch(`http://localhost:3000/posts/${PostDataId}`,{
        comment:comm1
      })
      .then((res) => dispatch(PostCommentSuccess(res.data)))
      .then(()=> dispatch(getPostData()))
      .catch((err) => dispatch(PostCommentfailure(err)));
  };
};