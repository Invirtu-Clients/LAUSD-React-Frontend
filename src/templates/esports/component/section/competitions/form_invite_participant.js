import React from "react";
import DateTimePicker from "react-datetime-picker";
import Roles from "../../../../../constants/roles";
import VenueType from "../../../../../constants/venue_type";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CompetitionInviteUser({ nameValue, nameOnChange, emailValue, emailOnChange, roleValue, roleOnChange, errors }) {

    return (
        <>
            <h3>Invite Participant</h3>
            <div className="form-group text-left">
                <label>Name</label>
                <Input type="text" name="name" value={nameValue} onChange={nameOnChange} placeholder="Give the tournamnet a title." />
                {errors && errors.name && errors.name.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Email</label>
                <Input type="text" name="name" value={emailValue} onChange={emailOnChange} placeholder="Give the tournamnet a title." />
                {errors && errors.email && errors.email.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Invite As:</label>
                <select name="role" className="form-control" onChange={roleOnChange} defaultValue={roleValue}>
                    <option value={""}>Select How You Are Inviting Them</option>
                    <option value={Roles.SuperAdministrator}>As A Team</option>
                    <option value={Roles.Administrator}>As An Individual</option>

                </select>
                {errors && errors.role && errors.role.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}

            </div>
        </>
    );
}