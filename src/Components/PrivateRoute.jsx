import React, { Component } from 'react'
import Dashboard from "./DashBoard/Dashboard"
import { connect } from "react-redux";
import {Route,Redirect} from 'react-router-dom'
class PrivateRoute extends Component{

    render(){
        console.log(this.props , "private routes");
        const {isAuth} = this.props
        if (!isAuth) {
            alert("You Have Been Logout!  Login Again !");
            return <Redirect to="/" />;
          }  
        return(
            <div>
                <Route path="/dashboard" render={(props)=> <Dashboard {...props} {...this.props}/>} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.Login.isLoading,
    isAuth: state.Login.isAuth,
    isError: state.Login.isError,
    user_id: state.Login.user_id,
    username: state.Login.username,
    description:state.Login.description,
    username_fullname: state.Login.username_fullname,
    avatar_url: state.Login.avatar_url,
  });

export default connect(mapStateToProps)(PrivateRoute)