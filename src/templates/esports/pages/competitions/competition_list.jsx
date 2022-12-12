import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";


class CompetitionsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {},
            errors: {},
            isLoading: false,
            tournaments : []
        };

    }

    componentDidMount() {
        this.loadTournaments();
    }

    loadTournaments() {

        Requests.tournamentsList().then(response => {
            console.log(response);
        }).catch(error => {

        });
    }

    render() {

        

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tourmanets'} curPage={'Find A Tournamnet'} />

                <div className="container">

                    <div className="tab-content mt-3" id="myTabContent">
                        
                        <div className="container text-right">
                            <Link className="btn btn-success" to={Navigate.tournamentsCreate()}>Manage Tournament</Link>

                        </div>
                    
                    </div>
                </div>


   
            </Fragment>
        );
    }

}

export default withRouter(CompetitionsListPage);
