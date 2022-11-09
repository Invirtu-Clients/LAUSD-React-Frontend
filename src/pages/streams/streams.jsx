import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";

class StreamsPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            events : '',
            errors : {},
            
        };
    }

    componentDidMount() {
        console.log("Loaded");

        Requests.eventsList().then(response => {
            console.log(response);
            this.setState({events : <VideoSection streams={response.data} ></VideoSection>});
        }).catch(error => {
            console.log(error);
        })
    }

    render() { 

        return(
            <Fragment>
                <Header />
                {this.state.events}
            </Fragment>
        );
    }

}

export default withRouter(StreamsPage);