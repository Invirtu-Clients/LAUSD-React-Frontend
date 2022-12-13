import React from "react";
import DateTimePicker from "react-datetime-picker";
import TournamentTypes from "../../../../../constants/tournament_types";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function BracketFormBasicInfo({ bracketValue, bracketOnChange, startDateValue, startDateOnChange, endDateValue, endDateOnChange, checkinEnableValue, checkEnabledOnChange, errors }) {

    return (
        <>
            <h3>Basic Information</h3>
            <p className="lead">Create information for a bracket that will be associated with the round.</p>

            <div className="form-group text-left">
                <label>Bracket #</label>
                <Input type="number" name="name" value={bracketValue} onChange={bracketOnChange} />
                <p className="small">Enter the bracket number. A bracket can contain multiple teams/users.</p>
                {errors && errors.bracket && errors.bracket.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "10px"}}>Start Date (Optional)</label>
                <DateTimePicker onChange={startDateOnChange} value={startDateValue} />
                {errors && errors.bracket_start_date && errors.bracket_start_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "16px"}} >End Date (Optional)</label>
                <DateTimePicker onChange={endDateOnChange} value={endDateValue} />
                {errors && errors.bracket_end_date && errors.bracket_end_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-2">
                
                <Input type={"checkbox"} className="form-checkbox" value={checkinEnableValue} onChange={checkEnabledOnChange} />
                <label>Checked In</label>
                <p className="small">Mark once the user or team has checked in.</p>
                {errors && errors.checked_in && errors.checked_in.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

        </>
    );
}