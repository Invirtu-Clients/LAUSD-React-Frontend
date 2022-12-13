import Moment from "react-moment";
import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";


export default function TournamentItem({ tournament, is_admin }) {


    let updateLink = '';
    
    if(is_admin) {
        updateLink = <Link to={Navigate.tournamentsManage(tournament.id)} className="btn btn-warning">Manage</Link>;
    }

    return (
        <div className="col-12" >
            {updateLink}
            <div className="match-item item-layer">
                <div className="match-inner">
                    <div className="match-header d-flex flex-wrap justify-content-between align-items-center">
                        <p className="match-team-info">Group Count <span className="fw-bold">Player Count <Moment>{tournament.start_date}</Moment></span></p>
                        <p className="match-prize">Match P Name <span className="fw-bold">Match Amount</span></p>
                    </div>
                    <div className="match-content">
                        <div className="row gy-4 align-items-center justify-content-center">
                            <div className="col-xl-4 col-md-6 order-md-2">
                                <div className="match-game-team">



                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 order-md-1">
                                <div className="match-game-info">
                                    <h4><Link to={Navigate.tournamentsView(tournament.id)}>{tournament.title}</Link> </h4>
                                    <p className="d-flex flex-wrap justify-content-center  justify-content-md-start">
                                        <span className="match-date"> Match Date </span><span className="match-time">Martch Time</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 order-md-3">
                                <div className="match-game-social">
                                    <ul className="match-social-list d-flex flex-wrap align-items-center justify-content-center justify-content-xl-start">

                                        <li><a href={Navigate.tournamentsView(tournament.id)} className="default-button reverse-effect"><span>Btn Text<i className="icofont-play-alt-1"></i></span> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}