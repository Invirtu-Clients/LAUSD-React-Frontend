import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CompetitionFormMedia({ nameValue, nameOnChange, descriptionValue, descriptionOnChange, startDateValue, startDateOnChange, endDateValue, endDateOnChange, errors }) {

    return (
        <>
            <h3>Basic Information</h3>
            <div className="form-group text-left">
                <label>Tournament Name</label>
                <Input type="text" name="name" value={nameValue} onChange={nameOnChange} placeholder="Give the tournamnet a title." />
                {errors && errors.name && errors.name.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group">
                <label>Tournament Description</label>
                <Textarea name="description" onChange={descriptionOnChange} placeholder="Describe the purprose of the tournament." >{descriptionValue}</Textarea>
                {errors && errors.description && errors.description.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "10px"}} >Start Date</label>
                <DateTimePicker onChange={startDateOnChange} value={startDateValue} />
                {errors && errors.start_date && errors.start_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-5">
                <label style={{marginRight: "16px"}} >End Date</label>
                <DateTimePicker onChange={endDateOnChange} value={endDateValue} />
                {errors && errors.end_date && errors.end_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

        </>
    );
}