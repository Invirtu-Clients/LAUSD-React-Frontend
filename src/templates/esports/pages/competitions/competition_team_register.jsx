import { Component, Fragment } from "react";
import timeouts from "../../../../constants/timeouts";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import Response from "../../../../util/Response";
import Session from "../../../../util/Session";
import withRouter from "../../../../util/withRouter";
import Danger from "../../component/alerts/Danger";
import Loading from "../../component/alerts/Loading";
import Select from "../../component/form/select";
import Footer from "../../component/layout/footer";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";


class CompetitionsRegisterTeamPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error : null,
            data: {},
            errors: {},
            teams : [],
            isLoading: false,
            team_id : null,
        };

        if (!Session.isLoggedIn()) {
            window.location = Navigate.authLogin();
        }
    }

    componentDidMount() {
        this.loadTournament();
        this.loadTeams();
    }

    loadTournament() {

        let id = this.props.router.params.id;

        Requests.tournamentsView(id).then(response => {
            this.setState({ data: response.data });
        }).catch(error => {

        });
    }

    loadTeams() {


        Requests.userMe().then(response => {

            console.log(response);
            console.log(response.data.teams);
            this.setState({ teams: response.data.teams });
            //this.setState({ data: response.data });
        }).catch(error => {

        });
    }

    register(event) {

        event.preventDefault();

        let data = {
            team_id : this.state.team_id
        };

        this.setState({ isLoading: true });

        let id = this.props.router.params.id;

        Requests.tournamentsRegisterTeam(id, data).then(response => {

            this.setState({ isLoading: false });

            this.props.router.navigate(Navigate.tournamentsView(response.data.id));
        }).catch(error => {

            this.setState({ isLoading: false });

            let jsonErrors = Response.parseJSONFromError(error);
            
            if (jsonErrors && jsonErrors.error) {

                this.setState({ error: jsonErrors.error });

                setTimeout(() => {
                    this.setState({ error: null });
                }, timeouts.error_message_timeout)
            }
        });
    }

    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Register Team For Tournamnet'} curPage={'Compete'} />
                <div className=" padding-top padding-bottom">
                    <div className=" container">
                        <div className="stream-wrapper">
                            <h3 className="title">Register Tournament</h3>
                            <form className="account-form text-left" style={{ textAlign: "left" }}>
                                
                                <h3>Register Team For Tournament</h3>

                                <p>Register to the tournament as a team. After logging in and creating a team, simply select the team below and register.</p>

                                <div className="form-group text-left">
                                    <label>Tournamnet Type</label>
                                    <Select className="form-control" onChange={(e) => { this.setState({ team_id : e.target.value  }); }} >
                                        <option value={""}>Select A Team</option>
                                        {this.state.teams.map(function(team, index){
                                                return <option value={team.id}>{team.title}</option>;
                                            })}
                                        

                                    </Select>
                                    <p className="small">Set the number of winners that can. The lowest is 1s.</p>
                               
                                </div>

                                { this.state.error ? <Danger message={this.state.error}  /> : ''}
                                <div className="form-group">
                                    <button className="d-block default-button" onClick={(e => { this.register(e) })}><span>{this.state.isLoading ? <Loading /> : ''} Register</span></button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }

}

export default withRouter(CompetitionsRegisterTeamPage);