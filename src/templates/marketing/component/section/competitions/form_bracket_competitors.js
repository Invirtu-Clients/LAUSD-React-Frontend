import React from "react";
import DateTimePicker from "react-datetime-picker";
import TournamentTypes from "../../../../../constants/tournament_types";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Select from "../../form/select";
import Textarea from "../../form/textarea";

export default function BracketFormParticipants({  users, userValue, userOnChange, teams, teamValue, teamOnChange, errors }) {


    return (
        <>
            <h3>Competitors</h3>
            <p className="lead">A competitor that will be placed into this bracket. Either a user OR a team is required.</p>

            <div className="form-group-time mb-2">
                <label>User</label>
                <Select name="user_id"  onChange={userOnChange} value={userValue}>
                    <option value={""}>Select An Individual User That Will Compete</option>
                    {users && Array.isArray(users) && users.map(function (user, index) {
                        return <option key={index} value={user.id}>{user.username} ({user.first_name} {user.last_name})</option>
                    })}
                </Select>
                <p className="small">If a user is being added to the bracket, select the user.</p>
                {errors && errors.user_id && errors.user_id.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-2">
                <label>Team</label>
                <Select name="team_id" onChange={teamOnChange} value={teamValue}>
                    <option value={""}>Select A Team That Will Compete</option>
                    {teams && Array.isArray(teams) &&  teams.map(function (team, index) {
                        return <option key={index} value={team.id}>{team.name}</option>
                    })}
                </Select>
                <p className="small">If a user is being added to the bracket, select the user.</p>
                {errors && errors.team_id && errors.team_id.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>



        </>
    );
}