import React from "react";
import DateTimePicker from "react-datetime-picker";
import Roles from "../../../../../constants/roles";
import VenueType from "../../../../../constants/venue_type";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function TeamInviteUser({ nameValue, nameOnChange, emailValue, emailOnChange, roleValue, roleOnChange, errors }) {

    return (
        <>
            <h3>Invite User</h3>
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
                <label>Role</label>
                <select name="role" className="form-control" onChange={roleOnChange} defaultValue={roleValue}>
                    <option value={""}>Select A Role For The User</option>
                    <option value={Roles.SuperAdministrator}>Super Administrator</option>
                    <option value={Roles.Administrator}>Administrator</option>
                    <option value={Roles.Moderator}>Moderator</option>
                    <option value={Roles.Producer}>Producer</option>
                    <option value={Roles.Speaker}>Speaker/Panelist</option>
                </select>
                {errors && errors.role && errors.role.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}

            </div>
        </>
    );
}