import { Component } from "react";
import { Link } from "react-router-dom";
import Requests from "../../util/Requests";
import Session from "../../util/Session";


class FollowButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            recording: {},
            recording_video: null,
            text: "Follow"
        };
    }

    componentDidMount() {

        let followers = this.props.user.followers;

        if(followers && Session.isLoggedIn()) {
            followers.forEach(follower => {

                if(follower.id == Session.getID()){

                    this.setState({text : "Unfollow"});

                }
            });
        }

        
    }

    toggleFollow(event) {
        event.preventDefault();

        Requests.userToggleFollow(this.props.user.id).then((response) => {
            console.log(response);

            if(response.data.unfollowed== true) {
                this.setState({text : "Follow"});
            } else {
                this.setState({text : "Unfollow"});
            }
        }).catch(error => {
            console.log(error);
        })
    }

    render() { 
        return (
            <>
                 <button type="button" className="d-block default-button" onClick={(e => {this.toggleFollow(e)})}><span>{this.state.text}</span></button>
            </>
        )
    }


}

export default FollowButton;