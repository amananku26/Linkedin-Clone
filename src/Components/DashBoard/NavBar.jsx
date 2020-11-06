import React, { Component } from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

class NavBar extends Component{

    render(){
        console.log(this.props ,'navbar');
        return(
            <div className="parentNavBar">
                <div className="parentNavBarChild1">
                    <Link to="/dashboard"><img style={{marginLeft:"77px"}} height="44px" src="images/linkedinIcon1.png" alt="navbarlinedinlogo"/></Link>
                    <input type="text" name="search" placeholder="Search" className="searchInputBoxNavbar"></input>
                    <i style={{marginLeft:"270px"}} className="fa fa-home"></i>
                    <i className="fa fa-users"></i>
                    <i className="fas fa-job"></i>
                    <i className="fa fa-briefcase"></i>
                    <i className="fa fa-inbox"></i>
                    <i className="fa fa-bell"></i>
                    <img style={{marginLeft:"20px",borderRadius:"50px",marginBottom:"15px"}} height="40px" src={this.props.avatar_url} alt="profile logo"/>
                    <i className="fa fa-bars"><Link to="/login"></Link></i>
                </div>
            </div>
        )
    }
}



export default NavBar