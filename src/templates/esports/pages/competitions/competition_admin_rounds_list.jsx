import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import CompetitionBrackets from "../../component/section/competitions/detail_bracket";
import TournamentItem from "../../component/section/competitions/detail_tournament_item";


class CompetitionsRoundsListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament: {},
            data: {},
            errors: {},
            isLoading: false,
            tournaments: []
        };

    }

    componentDidMount() {
        this.loadTournament();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Requests.tournamentsView(id).then(response => {
            this.setState({ tournament : response.data });
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tourmanet Rounds'} curPage={'Find A Tournamnet'} />

                <div className="container">

                    <div className="tab-content mt-3" id="myTabContent">

                        <div className="container text-right">
                            <Link className="btn btn-success" to={Navigate.tournamentsRoundsCreate(this.state.tournament.id)}>Add A Round</Link>

                            <hr />
                            <br />

                            <CompetitionBrackets tournament={this.state.tournament} is_admin={true} />

                        </div>

                    </div>
                </div>



            </Fragment>
        );
    }

}

export default withRouter(CompetitionsRoundsListPage);
