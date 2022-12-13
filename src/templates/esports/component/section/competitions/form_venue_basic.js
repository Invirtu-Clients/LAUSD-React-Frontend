import React from "react";
import DateTimePicker from "react-datetime-picker";
import VenueType from "../../../../../constants/venue_type";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Select from "../../form/select";
import Textarea from "../../form/textarea";

export default function VenueFormBasic({ nameValue, nameOnChange, venueTypeValue, venueTypeOnChange, errors }) {

    return (
        <>
            <h3>Basic Information</h3>
            <div className="form-group text-left">
                <label>Venue Name</label>
                <Input type="text" name="venue_name" value={nameValue} onChange={nameOnChange} placeholder="Give the tournamnet a title." />
                {errors && errors.venue_name && errors.venue_name.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Venue Type {venueTypeValue}</label>
                <Select name="is_virtual_hybrid_remote" className="form-control" onChange={venueTypeOnChange} value={venueTypeValue}>
                    <option value={""}>Select Venue Type</option>
                    <option value={VenueType.VIRTUAL}>Virtual</option>
                    <option value={VenueType.IN_PERSON}>In-Person</option>
                    <option value={VenueType.HYBRID}>Hybrid</option>
                </Select>
                {errors && errors.is_virtual_hybrid_remote && errors.is_virtual_hybrid_remote.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}

            </div>
        </>
    );
}