import React, { Component } from 'react'
import "./Register.css"
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

var itemBottomregisterPage = ["© 2020", "About", "Accessibility", "User Agreement", "Privacy Policy", "Cookie Policy",
    "Copyright Policy",
    "Brand Policy",
    "Guest Controls",
    " Community Guidelines"]
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="parentRegister">
                    <div className="registerPageNavBar">
                        <img height="45px" style={{ marginTop: "45px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="linkedinLogo" />
                        <h2 style={{ color: "white", marginTop: "15px" }}>Make the most of your professional life</h2>
                        <div className="registerInputBox">
                            <br />
                            <span className="textBeforeInputBox">Name</span> <br />
                            <input type="text" /> <br />
                            <span className="textBeforeInputBox">Mobile</span> <br />
                            <input type="text" /> <br />
                            <span className="textBeforeInputBox">Username</span> <br />
                            <input type="text" /> <br />
                            <span className="textBeforeInputBox">Password</span> <br />
                            <input type="text" /> <br />
                            <span className="textBeforeInputBox">Description</span> <br />
                            <input type="text" /> <br />
                            <div>
                            <span>By clicking Agree & Join, you agree to the LinkedIn User </span>
                            <span style={{color:"#0073b1"}} >Agreement,Privacy Policy, and Cookie Policy.</span>
                            </div>
                            <button className="RegisterButtonregisterPage">Agree & Join</button>
                            <h5>Already on LinkedIn?  <Link to="/login"> Sign in </Link> Here</h5>
                        </div>
                    </div>

                </div>
                <div className="registerPageBottom">
                    <img height="15px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="linkedinLogo" />
                    <span>
                        {
                            itemBottomregisterPage.map((item) => {
                                return <span key={uuidv4()} style={{ marginLeft: "15px", color: "black" }}>{item}</span>
                            })
                        }
                    </span>
                </div>
            </div>
        )
    }
}

export default Register