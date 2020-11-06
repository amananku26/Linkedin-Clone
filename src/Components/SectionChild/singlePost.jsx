import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Post.css"
import { connect } from "react-redux";
import { toggleLike, postCommentData } from "./PostRedux/action"

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment_body: "",
            commentShowStatus:false
        }
    }
    handleLike = (username, user_id, PostDataId, likes) => {
        var postLikes = likes
        this.props.toggleLike({ username, user_id, PostDataId, postLikes })
    }
    handleShowComment = ()=> {
        this.setState({
            commentShowStatus:true
        })
    }

    handleChange = (e) => {
        this.setState({
            comment_body: e.target.value
        })
    }
    handleComment = (e, username,imageComment, comment_body, PostDataId, comm) => {
        e.preventDefault()
        // console.log(username,comment_body);
        this.props.postCommentData({ username, imageComment,comment_body, PostDataId, comm })
    }

    

    render() {
        console.log(this.props);
        console.log(this.state.comment_body);
        const { comment_body,commentShowStatus } = this.state
        const { user_id, post, username,imageComment } = this.props
        const { author_id, author_name, author_username, author_title, id, avatar_url, imagePost, likes, comment } = post
        var obj = post.likes.find(item => item.user_id == user_id)
        console.log(obj, 'fngvipireagbr');
        return (
            <div>
                <div key={id} className="post1">
                    <div>
                        <img style={{ borderRadius: "50px", height: "35px", border: "2px solid #FF6E7B" }} src={avatar_url} alt="author_pictures" />
                        <span style={{ marginLeft: "10px", fontWeight: "bolder" }}>{author_name}</span>
                    </div>
                    <div style={{ marginLeft: "39px" }}>
                        {author_title}
                    </div>
                    <div>
                        <img className="postImage" src={imagePost} alt={id} />
                    </div>
                    <div style={{ opacity: "0.6" }}>Liked By: {likes.map((item) => <span> {item.username},</span>)} </div>
                    <div style={{ marginTop: "15px" }}>
                        {/* Like Buttton */}
                        {likes.length}•
                                       <button
                            onClick={() => this.handleLike(username, user_id, id, likes)} style={{ border: "none", backgroundColor: "transparent", color: obj ? "red" : "gray" }}>
                            <i className="fa fa-heart"></i></button>  
                                        {/* comment input box and button */}
                       <button onClick={this.handleShowComment} style={{border:"none",backgroundColor:"transparent",marginLeft:"35px"}}> {comment.length} • Comment</button>
                    </div>
                   
                   {
                       commentShowStatus &&  <div>
                       
                       {
                           comment.map((items) => {
                               return (
                                   <div> 
                                       <span> <img style={{ borderRadius: "30px", height: "35px",marginTop:"8px"}} src={items.imageComment} alt="author_pictures" /> </span>
                                       <span style={{ fontWeight: "bolder" }}>{items.username}</span> <span style={{ opacity: "0.5", fontSize: "10px" }}>{items.timestamp}</span>
                                       <div>
                                           <span >{items.comment_body}</span>
                                       </div>
                                       <hr/>
                                   </div>
                               )
                           })
                       }
                       <form onSubmit={(e) => this.handleComment(e, username,imageComment, comment_body, id, comment)}>
                           <input
                               // name="comment_body"
                               value={comment_body}
                               onChange={this.handleChange}
                               placeholder="Comment"
                               type="text"
                               className="inputboXComment"
                           />
                           <input className="buttoncomment" type="submit" value="comment" />
                       </form>
                   </div>
                   }

                </div>
            </div >
        )
    }
}



const mapDispatchToProps = (dispatch) => ({
    toggleLike: (action) => dispatch(toggleLike(action)),
    postCommentData: (payload) => dispatch(postCommentData(payload))
})

export default connect(null, mapDispatchToProps)(SinglePost)