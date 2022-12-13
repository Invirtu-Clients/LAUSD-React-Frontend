import TournamentTypes from "../../../../../constants/tournament_types";

export default function MatchType({ type }) {

    let typeText = '';

    if(type = TournamentTypes.SINGLE_ELIMINATION) {
        typeText = 'Single Elimination';
    } else if(type = TournamentTypes.DOUBLE_ELIMINATION) {
        typeText = 'Double Elimination';
    } else if(type = TournamentTypes.MULTILEVEL) {
        typeText = 'Multilevel';
    } else if(type = TournamentTypes.EXTENDED) {
        typeText = 'Extended';
    } else if(type = TournamentTypes.ROUND_ROBIN_DOUBLE_SPLIT) {
        typeText = 'Round Robin Double Split';
    } else if(type = TournamentTypes.ROUND_ROBIN_QUADRUPLE_SPLIT) {
        typeText = 'Round Robin Quadruple Split';
    } else if(type = TournamentTypes.ROUND_ROBIN_TRIPLE_SPLIT) {
        typeText = 'Round Robin Triple Split';
    } else if(type = TournamentTypes.SEMI_ROUND_ROBINS) {
        typeText = 'Semi Round Robin';
    } else if(type = TournamentTypes.STRAIGHT_ROUND_ROBIN) {
        typeText = 'Straight Round Robin';
    }

    return(
        <>
            {typeText}
        </>
    );
}