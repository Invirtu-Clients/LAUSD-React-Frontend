import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Wysiwyg from "../../form/wysiwyg";

export default function VenueFormAdditional({  directionInstructionsValue, directionInstructionsOnChange, accessInstructionsValue, accessInstructionsOnChange, additionalNotesValue, additionalNotesOnChange, errors }) {

    return (
        <>
            <h3>Additonal Information</h3>
            <div className="form-group">
                <label>Driving Direction Instructions (Optiona)</label>
                <Wysiwyg name="venue_direction_instructions" onChange={directionInstructionsOnChange}  >{directionInstructionsValue}</Wysiwyg>
                <p className="small">To help people navigate to the venue, enter any driving directions that might be useful.</p>
                {errors && errors.venue_direction_instructions && errors.venue_direction_instructions.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group">
                <label>How To Gain Access Instructions (Optiona)</label>
                <Wysiwyg name="venue_access_instructions" onChange={accessInstructionsOnChange}  >{accessInstructionsValue}</Wysiwyg>
                <p className="small">To help people navigate the venue or a room in the venue, enter access instructions.</p>
                {errors && errors.venue_access_instructions && errors.venue_access_instructions.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group">
                <label>Additional Notes (Optiona)</label>
                <Wysiwyg name="additional_notes" onChange={additionalNotesOnChange}  >{additionalNotesValue}</Wysiwyg>
                {errors && errors.additional_notes && errors.additional_notes.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


        </>
    );
}