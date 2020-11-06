import React, { Component } from 'react'
import "./Profile.css"
import { v4 as uuidv4 } from 'uuid';

var RecentinProfile = ["geeksforgeeks", "artificialintelligence", "masaischool", "javascript", "googleclouds"]
class Profile extends Component {

    render() {
        console.log(this.props, " profile");
        const { avatar_url, username_fullname, description } = this.props
        return (
            <div>

                <div className="ProfileSectionparent">
                    <div>
                        <img style={{ height:"100px"}} src="https://cdn.pixabay.com/photo/2018/06/29/22/02/linkedin-3506723__340.jpg" alt="profileBanner" />
                    </div>
                    <img style={{ borderRadius: "80px" }} className="profileimg" height="100px" src={avatar_url} alt="avatar_url" />
                    <div className="profilename">
                        <span>{username_fullname}</span>
                        <div>
                            <span>{description}</span>
                        </div>
                    </div>
                    <hr />
                    <div style={{ textAlign: "left" }}>
                        <span>Who Viewed your profile <span style={{ color: " #0073b1" }}>322</span> </span>
                        <div style={{ marginTop: "15px" }}>
                            <span>Views of your video <span style={{ color: " #0073b1" }}>550</span> </span>
                        </div>
                    </div>
                    <hr />
                    <div style={{ fontSize: "12px", textAlign: "left" }}>
                        <div>Access exclusive tools & insight</div>
                        <div style={{ fontWeight: "bolder" }}>Try premium free for 1 month</div>
                    </div>
                </div>
                <div className="ProfileSectionparent1">
                    <span>Recent</span>
                    <div>
                        {RecentinProfile.map((item) => <div key={uuidv4()} style={{ opacity: "0.8", marginTop: "8px" }}>#{item}</div>)}
                    </div>

                </div>

            </div>
        )
    }
}

export default Profile