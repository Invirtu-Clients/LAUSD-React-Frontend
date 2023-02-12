import React from "react";
import DateTimePicker from "react-datetime-picker";
import TournamentTypes from "../../../../../constants/tournament_types";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function BracketFormCompletion({  isWinnerValue, isWinnerOnChange, isFinishedValue, isFinishedOnChange, pointsValue, pointsOnChange, cashValue, cashOnChange, errors }) {

    return (
        <>
            <h3>On Round Completion Input</h3>
            <p className="lead">Once the round is completed, use the fields below to set the winner and points information.</p>

            <div className="form-group-time mb-2">
                <Input type={"checkbox"} className={"form-checkbox"} name="is_finished" value={isFinishedValue} onChange={isFinishedOnChange} />
                <label>Is Finished</label>
                <p className="small">Once the match is done, market is has finished.</p>
                {errors && errors.is_finished && errors.is_finished.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-2">
                <Input type={"checkbox"} className={"form-checkbox"} name="is_winner" value={isWinnerValue} onChange={isWinnerOnChange} />
                <label>Is Winner</label>
                <p className="small">Select if the team/user is the winner.</p>
                {errors && errors.is_winner && errors.is_winner.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Points Earned</label>
                <Input type="number" step="0.01" name="points_awarded" value={pointsValue} onChange={pointsOnChange} />
                <p className="small">Input the number of points earned from the round.</p>
                {errors && errors.points_awarded && errors.points_awarded.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Cash Earned</label>
                <Input type="number" step="0.01" name="cash_awarded" value={cashValue} onChange={cashOnChange} />
                <p className="small">Input the amount of cash earned for this round.</p>
                {errors && errors.cash_awarded && errors.cash_awarded.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


        </>
    );
}