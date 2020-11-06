import React, { Component } from 'react'
import NavBar from "./NavBar"
import Advertisment from "./Advertisment"
import Section from "./Section"
class Dashboard extends Component{

    render(){
        console.log(this.props , "dashboard");
        return(
            <div style={{backgroundColor:"#EBEBEB"}}>
                <NavBar {...this.props}/>
                <br/>
                <Advertisment />
                <br/>
                <Section {...this.props}/>
            </div>
        )
    }
}

export default Dashboard