import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import "./Home.css"

var suggestedSearch = ["Engineering", "Business Development",
    " Finance",
    " Administrative Assistant",
    "Retail Associate",
    "Customer Service",
    " Operations",
    " Information Technology",
    "Marketing",
    " Human Resources"]

class Home extends Component {

    render() {
        return (
            <div>
                <div className="navHomePage">
                    <img height="35px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="linkedinLogo" />
                    <Link className="HomePageNavJoinNow" to="/register">Join Now</Link>
                    <Link className="HomePageNavSignIn" to="login" > Sign In</Link>
                </div>
                <div className="HomePageBelowNav">
                    <div className="HomePageBelowNavChild1">
                    <h1>Welcome to your professional community</h1>
                    <span className="HomePageBelowNavChild1child1">
                        <h6>SUGGESTED SEARCHES</h6>
                        {
                            suggestedSearch.map((item) => {
                                return (
                                    <button key={uuidv4()} >{item}</button>
                                )
                            })
                        }
                    </span>
                    </div>
                    <div className="HomePageBelowNavChild2"><img height="450px" src="https://static-exp3.licdn.com/sc/h/3b678qey22i0i8cxykw5gjupc" alt="HomePagePic1" /></div>
                </div>
            </div>
        )
    }
}
// https://www.youtube.com/watch?v=yLyALWAp8IM
export default Home