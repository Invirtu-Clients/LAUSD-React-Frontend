import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import HasAccess from "../../../../util/HasAccess";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";


class CohostWatchStreamPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream: {},
            event: {},
            invite_cohost_name : '',
            invite_cohost_email : '',
            watch_page: '#',
            video_conference_widget: '',
            rtmp_source: ''
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userMe().then(response => {

            let userData = response.data;

            Requests.eventsView(id).then(response => {

                if(!HasAccess.userInList(Session.getID(), response.data.speakers)){
                    //this.props.router.navigate(Navigate.accessDeniedPage());
                }

                if (response.data.invirtu_id) {

                    this.setState({
                        video_conference_widget: <VideoConferencing id={response.data.invirtu_id} auth_token={userData.invirtu_user_jwt_token} />,
                        event: response.data,
                        watch_page: Navigate.streamsWatchPage(response.data.id)
                    });
                }
            }).catch(error => {
                console.log(error);
            });

        }).catch(error => {
            console.log(error);
        });
    }

    addRTMPSource(event) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsAddRTMPSource(id, { rtmp_source: this.state.rtmp_source }).then(response => {

            this.setState({
                rtmp_source: '',
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    switchToBroadcastMode(event) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsSetToBroadcastMode(id).then(response => {

            this.setState({
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    switchToLivestreamMode(event, type) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsSetToLivestreamMode(id, { mode: type }).then(response => {

            this.setState({
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    handleModeChange(event) {
        console.log("Handle Change");
    }

    removeRTMPSource(event, stream_id) {

        event.preventDefault();

        let id = this.props.router.params.id;

        Requests.eventsRemoveRTMPSource(id, stream_id).then(response => {

            this.setState({
                event: response.data
            });

        }).catch(error => {
            console.log(error);
        })
    }

    inviteCohost(event) {

        let name = this.state.invite_cohost_name;

        let email = this.state.invite_cohost_email;

        let data = {
            name : name,
            email: email
        };

        let id = this.props.router.params.id;

        Requests.eventsSendInvite(id, data).then(response => {
            console.log(response);
            this.setState({
                invite_cohost_email : '',
                invite_cohost_email : ''
            });

            this.state.event.invites.push(response.data);
        }).catch(error => {
            console.log(error);
        });

    }

    render() {

        return (
            <Fragment>
                <Header />
                <div style={{ paddingTop: '155px' }}>
                    {this.state.video_conference_widget}
                </div>

                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CohostWatchStreamPage);