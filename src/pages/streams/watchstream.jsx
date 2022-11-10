import { Broadcasting } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/layout/header";
import VideoSection from "../../component/section/video";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import Session from "../../util/Session";
import Storage from "../../util/Storage";
import withRouter from "../../util/withRouter";

class StreamsWatchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream : {},
            broadcast_widget: ''
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
                    broadcast_widget: <Broadcasting id={response.data.invirtu_id} auth_token={auth_token} />,
                    event: response.data
                 })
            }
        }).catch(error => {
            console.log(error);
        });

    }

    render() {

        return (
            <Fragment>
                <Header />
                <section className="about-section">
                    <div className="container">
                        <div className="section-wrapper padding-top">
                            <div className="row">
                                <div className="col-12">
                                    {this.state.broadcast_widget}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-section">
                    <div className="container">
                        <h3>Recordings</h3>
                        <p>Missed the stream? No problem, what past recordings of the streams.</p>

                        <br />
                        <ul>
                            {this.state.event && this.state.event.recordings && this.state.event.recordings.map((recording, index) => {
                                return <li key={ index }>
                                        <Link to={Navigate.streamsWatchRecording(this.state.event.id, recording.id)}>{recording.title}</Link>
                                    </li>;
                            })}
                        </ul>
                    </div>
                </section>

            </Fragment>
        );
    }

}

export default withRouter(StreamsWatchPage);