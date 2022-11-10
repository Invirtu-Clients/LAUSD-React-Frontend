import { VideoConferencing } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Input from "../../component/form/input";
import Header from "../../component/layout/header";
import VideoSection from "../../component/section/video";
import Navigate from "../../util/Navigate";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";

class StreamsBroadcastPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            stream : {},
            watch_page : '#',
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
                        event: response.data,
                        watch_page : Navigate.streamsWatchPage(response.data.id)
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
                        <h3>How It Works</h3>
                        <p>Starting your live stream is simple! We will describe how to use the platform in 3 easy steps.</p>

                        <ol>
                            <li>Click the join above to start the video session. You will appear on-screen!</li>
                            <li>Have your game screen in a separate window. Use the "Share Desktop" button in the video session to share that window.</li>
                            <li>Click "Start Broadcast", and your screen will start broadcasting! You can check what fans will see <Link target={"_blank"} to={this.state.watch_page}>in this watch page.</Link></li>
                        </ol>
                    </div>
                </section>
                <section className="about-section">
                    <div className="container">
                        <h3>Restreams</h3>
                        <p>Restreams is the ability to stream your broadcast to multiple other sources. Enter the RTMP streams from sources like Facebook, Youtube or Twitch to Restream to those sites. To see how to restream to each one, see the links below:</p>
                        <ul className="indent">
                            <li><a target={"_blank"} href="https://youtu.be/OvQCLkCQgTc">Youtube</a></li>
                            <li><a target={"_blank"} href="https://youtu.be/eSlgz0aZJTs">Facebook</a></li>
                            <li><a target={"_blank"} href="https://youtu.be/0-W1E6qtQdM">Twitch</a></li>
                        </ul>

                        <form>
                            <div className="form-group">
                                <label>Enter RTMP Source</label>
                                <Input name={"rtmp_src"} value={this.state.rtmp_source} onChange={(e)=>{this.setState({rtmp_source: e.target.value});}} />

                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => {this.addRTMPSource(e)})}><span>Add Source</span></button>
                                </div>
                            </div>
                        </form>

                        <br />
                        <ul className="indent">
                            {this.state.event && this.state.event.restreams && this.state.event.restreams.map((restream, index) => {
                                return <li key={ index }>{restream.stream_url} <button onClick={(e => {this.removeRTMPSource(e, restream.id)})}>X</button></li>;
                            })}
                        </ul>
                    </div>
                </section>
                <section className="about-section">
                    <div className="container">
                        <h3>Streaming From Consoles</h3>
                        <p>You can stream from consoles to Glitch, which will handle the streaming to other endpoints. Below are instructions on how to setup streaming from each console device.</p>

                        <br />
                        <ul className="indent">
                            <li><a target={"_blank"} href="https://youtu.be/zmvdD72KsBs">Playstation 5</a></li>
                            <li>XBOX (coming soon)</li>
                            <li>Computer (comming soon)_</li>
                        </ul>
                    </div>
                </section>
                <section className="about-section">
                    <div className="container">
                        <h3>Recordings</h3>
                        <p>When a broadcast is started, a recording will be automatically generated. Those recordings can be viewed below.</p>

                        <br />
                        <ul className="indent">
                            {this.state.event && this.state.event.recordings && this.state.event.recordings.map((recording, index) => {
                                return <li key={ index }><Link to={Navigate.streamsManageRecordingPage(this.state.event.id, recording.id)}>{recording.title}</Link></li>;
                            })}
                        </ul>
                    </div>
                </section>
            </Fragment>
        );
    }

}

export default withRouter(StreamsBroadcastPage);