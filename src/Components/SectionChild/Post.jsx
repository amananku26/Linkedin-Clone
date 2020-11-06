import React, { Component } from 'react'
import "./Post.css"
import { Spinner } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';
import SinglePost from "./singlePost"
import { getPostData, UploadingPost} from "./PostRedux/action"
import { connect } from "react-redux";
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textPost: "",
            imagePost: "",
            likestatus: false,
            comment_body:""
        }
    }
    componentDidMount() {
        this.props.getPostData()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value

        })
    }

    // "author_id": "1", = user_id
    // "author_name": "Aman Anku", = username_fullname
    // "author_username": "aman", = username
    // "author_title": "Hello there How are you", =textPost
    // "id": 1,
    // "imagePost": "https://cdn.pixabay.com/photo/2018/06/07/16/49/vr-3460451__340.jpg" =imagePost

    handlePost = () => {
        const { user_id, username_fullname, username, avatar_url } = this.props

        const { textPost, imagePost } = this.state
        // console.log(textPost, imagePost);
        var author_title = textPost, author_name = username_fullname, author_id = user_id, author_username = username
        this.props.UploadingPost({ author_title, imagePost, author_name, avatar_url, author_id, author_username })
    }
    // PostDataId is equal to to the id of the indivisual posts
  
  
    render() {
        console.log(this.props, "posts");
        console.log(this.props.PostData);
        const { PostData, isLoading} = this.props
        
        var Filteritem = PostData.sort((a, b) => b.id - a.id)
        const { textPost, imagePost } = this.state
        return (
            <div>
                <div className="makePost">
                    <input
                        className="makePostInputBox"
                        onChange={this.handleChange}
                        name="textPost"
                        value={textPost}
                        placeholder="Start a Post" />
                    <div className="makePostChild2">
                        <input
                            name="imagePost"
                            name="imagePost"
                            value={imagePost}
                            onChange={this.handleChange}
                            placeholder="Place the Image Url"
                        />
                        <button onClick={this.handlePost}>Post on Timeline</button>
                    </div>
                </div>
                <hr style={{ marginLeft: "30px" }} />
                {/* <div className="post1">

                </div> */}
                <div>
                    {isLoading && <div><Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner></div>}
                    {!isLoading && Filteritem.map((item) => {
                        return <SinglePost key={item.id} post = {item} imageComment = {this.props.avatar_url} {...this.props}/>
                    })
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    PostData: state.LinedinPost.PostData,
    isLoading: state.LinedinPost.isLoading,
    isAuth: state.LinedinPost.isAuth,
    isError: state.LinedinPost.isError
})

const mapDispatchToProps = (dispatch) => ({
    getPostData: (a) => dispatch(getPostData(a)),
    UploadingPost: (uploadPost) => dispatch(UploadingPost(uploadPost))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)