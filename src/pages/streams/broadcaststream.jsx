import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import Input from "../../component/form/input";
import Header from "../../component/layout/header";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";

class StreamsBroadcastPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream : {},
            video_conference_widget: '',
            rtmp_source : ''
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userMe().then(response => {

            let userData = response.data;

            Requests.eventsView(id).then(response => {

                if (response.data.invirtu_id) {

                    this.setState({ 
                        video_conference_widget: <VideoConferencing id={response.data.invirtu_id} auth_token={userData.invirtu_user_jwt_token} />,
                        event: response.data
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

        Requests.eventsAddRTMPSource(id, {rtmp_source : this.state.rtmp_source}).then(response => {
            
            this.setState({ 
                rtmp_source: '',
                event: response.data
             });

        }).catch(error => {
            console.log(error);
        })
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
                                    {this.state.video_conference_widget}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-section">
                    <div className="container">
                        <h3>Restreams</h3>
                        <p>Restreams is the ability to stream your broadcast to multiple other sources. Enter the RTMP streams from sources like Facebook, Youtube or Twitch to Restream to those sites.</p>

                        <form>
                            <div className="form-group">
                                <label>Enter RTMP Source</label>
                                <Input name={"rtmp_src"} onChange={(e)=>{this.setState({rtmp_source: e.target.value});}} />

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => {this.addRTMPSource(e)})}><span>Add Source</span></button>
                                </div>
                            </div>
                        </form>

                        <br />
                        <ul>
                            {this.state.event && this.state.event.restreams && this.state.event.restreams.map(function(restream, index){
                                return <li key={ index }>{restream.stream_url}</li>;
                            })}
                        </ul>
                    </div>
                </section>
            </Fragment>
        );
    }

}

export default withRouter(StreamsBroadcastPage);