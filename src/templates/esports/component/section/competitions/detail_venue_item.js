import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";


export default function VenueItem({ venue, is_admin }) {


    let updateLink = '';
    
    if(is_admin) {
        updateLink = <Link to={Navigate.tournamentsVenuesUpdate(venue.competition_id, venue.id)} className="btn btn-warning">Update</Link>;
    }

    return (
        <div >
            {updateLink}
            <h3>{venue.venue_name}</h3>

            {venue.venue_name}

            <h5>Address</h5>
            {venue.address_line_1}

            <h5>Other Details</h5>
        </div>
    );
}