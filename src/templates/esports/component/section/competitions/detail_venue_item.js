import { Link } from "react-router-dom";
import Navigate from "../../../../../util/Navigate";
import VenueHostingType from "./detail_venue_type";


export default function VenueItem({ venue, is_admin }) {


    let updateLink = '';
    
    if(is_admin) {
        updateLink = <Link to={Navigate.tournamentsVenuesUpdate(venue.competition_id, venue.id)} className="btn btn-warning">Update</Link>;
    }

    return (
        <div >
            {updateLink}

            <h3>{venue.venue_name}</h3>

            <strong><p className="lead"><VenueHostingType type={venue.is_virtual_hybrid_remote} /></p></strong>

            {(venue.address_line_1 || venue.address_line_2 || venue.postal_code || venue.locality || venue.province  || venue.country ) ? 
                <>
                    {(venue.address_line_1) ? 
                        <>
                            <h5>Address Line 1</h5>
                            <p>{venue.address_line_1}</p>
                        </>
                    : ''}

                    {(venue.address_line_2) ? 
                        <>
                            <h5>Address Line 2</h5>
                            <p>{venue.address_line_2}</p>
                        </>
                    : ''}

                    {(venue.locality) ? 
                        <>
                            <h5>City</h5>
                            <p>{venue.locality}</p>
                        </>
                    : ''}

                    {(venue.province) ? 
                        <>
                            <h5>State</h5>
                            <p>{venue.province}</p>
                        </>
                    : ''}

                    {(venue.postal_code) ? 
                        <>
                            <h5>Zipcode</h5>
                            <p>{venue.postal_code}</p>
                        </>
                    : ''}

                    {(venue.country) ? 
                        <>
                            <h5>Country</h5>
                            <p>{venue.country}</p>
                        </>
                    : ''}

                   
                </>
                
            : '' }

            {(venue.venue_direction_instructions) ? 
                <>
                    <h5>Direction Instructions</h5>
                    <div dangerouslySetInnerHTML={{__html: venue.venue_direction_instructions}} />
                </>
            : ''}

            {(venue.venue_access_instructions) ? 
                <>
                    <h5>Access Instructions</h5>
                    <div dangerouslySetInnerHTML={{__html: venue.venue_access_instructions}} />
                </>
            : ''}
        </div>
    );
}