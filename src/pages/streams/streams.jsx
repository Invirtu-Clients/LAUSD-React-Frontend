import { Component, Fragment } from "react";
import Info from "../../component/alerts/Info";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
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

        Requests.eventsList().then(response => {
            this.setState({events : <VideoSection streams={response.data} ></VideoSection>});
        }).catch(error => {
            console.log(error);
        })
    }

    render() { 

        return(
            <Fragment>
                <Header />
                <PageHeader title={'The Live Streams'} curPage={'Streams'} />
                
                {this.state.events}
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(StreamsPage);