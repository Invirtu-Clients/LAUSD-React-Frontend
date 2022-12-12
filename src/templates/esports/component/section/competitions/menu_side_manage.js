import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";



export default function SidebarManageMenu({ competition_id }) {

    return (
        <div className="widget widget-category">
            <div className="widget-header">
                <h5>Manage Tournament</h5>
            </div>
            <ul className="lab-ul widget-wrapper list-bg-none">

                <li key={0}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsUpdate(competition_id)}><span><i className="icofont-rounded-double-right"></i>Update</span></Link>
                </li>
                <li key={1}>
                    <Link className="d-flex flex-wrap justify-content-between" to={Navigate.tournamentsVenuesList(competition_id)}><span><i className="icofont-rounded-double-right"></i>Venues</span></Link>
                </li>
                <li key={2}>
                    <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>Rounds & Brackets</span></a>
                </li>
                <li key={3}>
                    <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>Admins & Moderators</span></a>
                </li>
                <li key={4}>
                    <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>Teams</span></a>
                </li>
                <li key={5}>
                    <a href="#" className="d-flex flex-wrap justify-content-between"><span><i className="icofont-rounded-double-right"></i>Waivers</span></a>
                </li>

            </ul>
        </div>
    );
}