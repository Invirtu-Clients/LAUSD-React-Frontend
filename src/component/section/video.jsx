import { Component } from "react";
import Navigate from "../../util/Navigate";

const subtitle = "our LATEST VIDEOS";
const title = "check our live streaming";

let streams = []

class VideoSection extends Component {

    constructor(props) {
        super(props);

        if (props.streams) {
            streams = props.streams;
        }

    }

    render() {
        return (
            <div className="video-section padding-top padding-bottom bg-attachment" style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
                <div className="container">
                    <div className="section-header">
                        <p>{subtitle}</p>
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="video-top">
                                    <div className="row g-4 justify-content-center">
                                        {streams.map((val, i) => (
                                            <div className="col-lg-4 col-12" key={i}>
                                                <div className="video-item">
                                                    <div className="video-inner position-relative">
                                                        <div className="video-thumb position-relative video-overlay">
                                                            <img src={(val.image_main) ? val.image_main : "/assets/images/cta/02.png"} alt={`${val.imgAlt}`} className="w-100" />
                                                            <div className="video-icon">
                                                                <a href={Navigate.streamsWatchPage(val.id)} >
                                                                    <i className="icofont-play-alt-1"></i>
                                                                    <span className="pluse"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="video-content abs-video-content">
                                                            <a href={Navigate.streamsWatchPage(val.id)} >{val.btnText} <i className="icofont-play-alt-1"></i></a>
                                                            <h3>{val.title}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSection;