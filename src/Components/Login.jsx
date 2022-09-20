import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserData } from "../redux/action";
import { Redirect, Link } from "react-router-dom";
import "./Login.css"
import { v4 as uuidv4 } from 'uuid';

var itemBottomregisterPage = ["© 2020", "About", "Accessibility", "User Agreement", "Privacy Policy", "Cookie Policy",
  "Copyright Policy",
  "Brand Policy",
  "Guest Controls",
  " Community Guidelines"]


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "admin",
      password: "admin"
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    const { username, password } = this.state;
    console.log(username, password);
    this.props.getData({ username, password });
  };

  render() {
    // console.log(this.props);
    const { isAuth, WrongCredentials } = this.props;
    const { username, password } = this.state;
    if (isAuth) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="parentLogin">
        <div>
          <img height="25px" style={{ marginTop: "105px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="linkedinLogo" />
          
          <h2 style={{ marginTop: "15px" }}>Welcome Back</h2>
          <span style={{ opacity: "0.5" }}>Don't miss your next opportunity. Sign in to stay updated on your professional world.</span>
          <div className="inputBoxLogin">
            
            <input
              name="username"
              placeholder="Email Or Phone"
              value={username}
              onChange={this.handleChange}
            />{" "}
            <br /> <br />
            <input
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            {/* { !WrongCredentials && <div style={{color:"red"}}>Wrong Credentials</div> } */}
            <br /> <br />
            <button className="loginInput" onClick={this.handleClick}>
              Sign In
        </button>
          </div>
        </div>
        <div>
          <h6 className="loginForgotPassword">Forgot password?</h6>
          <h6 style={{ marginTop: "25px" }}>New to LinkedIn? <Link to="/register">Join now</Link></h6>
          <Link to="/"><h6>Home →</h6></Link>
        </div>
        <div className="LoginPageBottom">
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
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.Login.isLoading,
  isAuth: state.Login.isAuth,
  isError: state.Login.isError,
  WrongCredentials:state.Login.WrongCredentials,
  user_id: state.Login.user_id,
  username: state.Login.username,
  username_fullname: state.Login.username_fullname,
  avatar_url: state.Login.avatar_url,
});

const mapDispatchToProps = (dispatch) => ({
  getData: (payload) => dispatch(getUserData(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);