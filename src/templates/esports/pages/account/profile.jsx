import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../component/layout/header";
import PageHeader from "../../component/layout/pageheader";
import ProfileUpdateHeader from "../../component/section/profileupdate";
import Rating from "../../component/section/rating";
import VideoSection from "../../component/section/video";
import Moment from 'react-moment';
import Navigate from "../../../../util/Navigate";
import withRouter from "../../../../util/withRouter";
import Requests from "../../../../util/Requests";




class AccountUpdatePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            me: null,
            profileHeader: '',
            followers: '<h3>No Followers</h3>',
            following: '<h3>No Followers</h3>',
            errors: {},

        };
    }

    componentDidMount() {


        Requests.userMe().then(response => {

            this.setState({
                me: response.data,
                profileHeader: <ProfileUpdateHeader user={response.data} />
            });

        }).catch(error => {
            console.log(error);
        })
    }


    render() {

        return (
            <Fragment>
                <Header />
                <PageHeader title={'Update Profile'} curPage={'Profile'} />

                <div className="shop-single">
                    <div className="container">
                        {this.state.profileHeader}
                    </div>
                </div>


                <div className="container">

                    <div className="row g-4 match-grid GameListStyleTwo">

                        {
                            this.state.me && this.state.me.events && this.state.me.events.map((elem) => {
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
            </Fragment>
        );
    }

}

export default withRouter(AccountUpdatePage);