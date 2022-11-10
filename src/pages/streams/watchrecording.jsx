import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import Input from "../../component/form/input";
import Header from "../../component/layout/header";
import RecordingVideo from "../../component/section/recordingvideo";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import Session from "../../util/Session";
import withRouter from "../../util/withRouter";

class WatchRecordingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            recording : null,
            recording_video : null, 
        };
    }

    componentDidMount() {

        if(Session.isLoggedIn()){
            
            Requests.userMe().then(response => {

                let userData = response.data;

                this.loadStreamData(userData);

            }).catch(error => {
                console.log(error);
            });

        } else {
            this.loadStreamData();
        }
    }

    loadStreamData(user) {

        let id = this.props.router.params.id;

        Requests.eventsView(id).then(response => {

            if (response.data.invirtu_id) {
                let auth_token = null;

                if(user){
                    auth_token = user.invirtu_user_jwt_token
                }

                this.setState({ 
                    event: response.data
                 })

                 this.filterRecording(response.data);
            }
        }).catch(error => {
            console.log(error);
        });

    }

    filterRecording(event) {

        if(event && event.recordings) {

            let recording_id = this.props.router.params.subid;

            event.recordings.forEach((recording) => {

                if(recording.id == recording_id) {

                    this.setState({
                        recording : recording,
                        recording_video: <RecordingVideo video={recording} />
                    });
                }
            });

        }
    }



    render() {

        return (
            <Fragment>
                <Header />
                {this.state.recording_video}
            </Fragment>
        );
    }

}

export default withRouter(WatchRecordingPage);