import { Component, Fragment } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../util/Navigate";
import Requests from "../../../../util/Requests";
import withRouter from "../../../../util/withRouter";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import Author from "../../component/section/author";
import CommentForm from "../../component/section/commentform";
import Comments from "../../component/section/comments";
import MatchType from "../../component/section/competitions/detail_match_type";
import VenueItem from "../../component/section/competitions/detail_venue_item";
import SidebarManageMenu from "../../component/section/competitions/menu_side_manage";
import Archive from "../../component/sidebar/archive";
import CategorieTwo from "../../component/sidebar/categorietwo";
import Instagram from "../../component/sidebar/instagram";
import RecentPost from "../../component/sidebar/recentpost";
import SearchBar from "../../component/sidebar/search";
import Tags from "../../component/sidebar/tags";


class CompetitionsManagePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournament: {},
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
            this.setState({ tournament: response.data });
        }).catch(error => {

        });
    }

    render() {



        return (
            <Fragment>
                <Header />
                <PageHeader title={'Tourmanets'} curPage={'Find A Tournamnet'} />

                <div className="blog-section blog-single padding-top padding-bottom aside-bg">
                    <div className="container">
                        <div className="section-wrapper">
                            <div className="row justify-content-center pb-15">
                                <div className="col-lg-8 col-12">
                                    <article>
                                        <h2>{this.state.tournament.name}</h2>

                                        <p>{this.state.tournament.description}</p>

                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Overview</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Venue(s)</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <h3>Format</h3>
                                                <MatchType type={this.state.tournament.type} />

                                                <h3>Dates</h3>
                                                {this.state.tournament.start_date ? <Moment>{this.state.tournament.start_date}</Moment> : ''}

                                                {this.state.tournament.start_date && this.state.tournament.end_date ? <> to <Moment>{this.state.tournament.end_date}</Moment></> : ''}

                                                                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                            {this.state.tournament && this.state.tournament.venues && this.state.tournament.venues.map(function (venue, index) {
                                                return (
                                                    <VenueItem key={index} venue={venue} />
                                                );
                                            })}
                                            </div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-lg-4 col-md-7 col-12">
                                    <aside className="ps-lg-4">
                                        <SidebarManageMenu competition_id={this.state.tournament.id} />
                                       
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">

                    <div className="tab-content mt-3" id="myTabContent">

                        <div className="tab-pane fade mt-3" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div className="row g-4 match-grid GameListStyleTwo">


                                {
                                    this.state.tournaments && this.state.tournaments.map((elem) => {
                                        const { id, imageone, imagetwo, title, alt1, alt2, matchdate, matchtime, groupcount, playercount, matchpname, matchpamount, btntext } = elem;
                                        return (
                                            <div className="col-12" key={id}>
                                                <div className="match-item item-layer">
                                                    <div className="match-inner">
                                                        <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                                                            <p className="match-team-info">{groupcount} <span className="fw-bold">{playercount} <Moment>{elem.created_at}</Moment></span></p>
                                                            <p className="match-prize">{matchpname} <span className="fw-bold">{matchpamount}</span></p>
                                                        </div>
                                                        <div className="match-content">
                                                            <div className="row gy-4 align-items-center justify-content-center">
                                                                <div className="col-xl-4 col-md-6 order-md-2">
                                                                    <div className="match-game-team">

                                                                        

                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-6 order-md-1">
                                                                    <div className="match-game-info">
                                                                        <h4><Link to={Navigate.streamsBroadcastPage(elem.id)}>{elem.title}</Link> </h4>
                                                                        <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                                                            <span className="match-date">{matchdate} </span><span className="match-time">{matchtime}</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xl-4 col-md-6 order-md-3">
                                                                    <div className="match-game-social">
                                                                        <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                                                            <li><a href={Navigate.streamsBroadcastPage(elem.id)} className="default-button reverse-effect"><span>{btntext}<i className="icofont-play-alt-1"></i></span> </a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>



            </Fragment>
        );
    }

}

export default withRouter(CompetitionsManagePage);
