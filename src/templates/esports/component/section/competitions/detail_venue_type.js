import VenueType from "../../../../../constants/venue_type";

export default function VenueHostingType({ type }) {

    let typeText = '';

    if(type = VenueType.HYBRID) {
        typeText = 'Hybrid (Virtual & In-Person)';
    } else if(type = VenueType.IN_PERSON) {
        typeText = 'In-Person';
    } else if(type = VenueType.VIRTUAL) {
        typeText = 'Virtual';
    }

    return(
        <>
            {typeText}
        </>
    );
}