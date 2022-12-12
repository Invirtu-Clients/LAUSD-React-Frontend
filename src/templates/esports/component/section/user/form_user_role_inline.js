import React from "react";
import DateTimePicker from "react-datetime-picker";
import Roles from "../../../../../constants/roles";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function UserRoleInline({  roleValue, roleOnChange, errors }) {

    return (
        <>
            <div className="form-group text-left">
                <label>Role</label>
                <select className="form-control" onChange={roleOnChange}>
                    <option value={Roles.SuperAdministrator}>Super Administrator</option>
                    <option value={Roles.Administrator}>Administrator</option>
                    <option value={Roles.Moderator}>Moderator</option>
                    <option value={Roles.Speaker}>Speaker/Panelist</option>
                    <option value={Roles.Producer}>Producer</option>
                </select>
            </div>

        </>
    );
}