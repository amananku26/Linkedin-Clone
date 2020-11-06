import React,{Component} from "react"
import "./Section.css"
import Profile from "../SectionChild/Profile"
import News from "../SectionChild/News"
import Post from "../SectionChild/Post"
class Section extends Component {

    render(){
        return(
            <div className="SectionParent" >
                <Profile {...this.props} />
                <Post {...this.props}/>
                <News {...this.props} />
            </div>
        )
    }
}

export default Section