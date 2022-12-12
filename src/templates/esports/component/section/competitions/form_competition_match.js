import React from "react";
import TournamentTypes from "../../../../../constants/tournament_types";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CompetitionFormMatchDetails({ competitorsPerMatchValue, competitorsPerMatchOnChange, typeValue, typeChange, minimumTeamSizeValue, minimumTeamSizeOnChange,  errors }) {

    return (
        <>
            <h3 className="title">Match Details</h3>

            <div className="form-group text-left">
                <label>Tournamnet Type</label>
                <select className="form-control" value={typeValue} onChange={typeChange}>

                <option value={TournamentTypes.SINGLE_ELIMINATION}>Single Elimination</option>

                <option value={TournamentTypes.DOUBLE_ELIMINATION}>Double Elimination</option>

                <option value={TournamentTypes.MULTILEVEL} >Mutlilevel</option>

                <option value={TournamentTypes.STRAIGHT_ROUND_ROBIN}>Straight Round Roin</option>

                <option value={TournamentTypes.ROUND_ROBIN_DOUBLE_SPLIT}>Round Robin Double Split</option>

                <option value={TournamentTypes.ROUND_ROBIN_TRIPLE_SPLIT}>Round Robin Triple Split</option>

                <option value={TournamentTypes.ROUND_ROBIN_QUADRUPLE_SPLIT}>Round Robin Quadruple Split</option>

                <option value={TournamentTypes.SEMI_ROUND_ROBINS}>Semi-Round Roins</option>

                <option value={TournamentTypes.EXTENDED}>Extended</option>

                </select>
                <p className="small">Set the number of winners that can. The lowest is 1s.</p>
                {errors && errors.type && errors.type.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            
            <div className="form-group text-left">
                <label>Competitors Per Match</label>
                <Input type="number" name="competitors_per_match" value={competitorsPerMatchValue} onChange={competitorsPerMatchOnChange} />
                <p className="small">Competitors per match is the amount of people or teams that will compete against each other in a single bracket/match. The lowest is 2 contestants.</p>
                {errors && errors.competitors_per_match && errors.competitors_per_match.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Minimum Team Size</label>
                <Input type="number" name="minimum_team_size" value={minimumTeamSizeValue} onChange={minimumTeamSizeOnChange} />
                <p className="small">If the options for allowing teams to register is active, you can set a minimum team size.</p>
                {errors && errors.minimum_team_sizeh && errors.minimum_team_size.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

          

        </>
    );
}