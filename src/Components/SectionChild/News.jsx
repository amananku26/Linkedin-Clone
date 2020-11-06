import React, { Component } from 'react'
import { connect } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { getNewsData } from "./newsRedux/action"
import "./News.css"
class News extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getNewsData()
    }
    render() {
        // console.log(this.props);
        const { newsData,isLoading } = this.props
        if(isLoading){
            return "...Looading"
        }
        return (
            <div className="newsSectionparent">
                <h6 style={{opacity:"0.6"}}>Linkedin News</h6>
                {newsData.map((item) => {
                    return (
                        <div key={uuidv4()}>
                            <div><li style={{fontWeight:"bolder"}}>{item.title}</li></div>
                            <div><ul>{item.time}</ul></div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    newsData: state.News.newsData,
    isLoading: state.News.isLoading,
    isAuth: state.Login.isAuth,
    isError: state.News.isError,
})
const mapDispatchToProps = (dispatch) => ({
    getNewsData: (a) => dispatch(getNewsData(a))
})

export default connect(mapStateToProps, mapDispatchToProps)(News)