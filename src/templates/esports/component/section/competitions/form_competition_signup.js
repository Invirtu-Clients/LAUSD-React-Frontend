import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function CompetitionFormSignupDetails({ allowTeamSignupValue, allowTeamSignupOnChange, allowUserSignupValue, allowUserSignupOnChange, maxTeamsValue, maxTeamsOnChange, maxUsersValue, maxUsersOnChange, teamRegistrationPriceValue, teamRegistrationPriceOnChange, userRegistrationPriceValue, userRegistrationPriceOnChange, enableCheckinValue, enableCheckinOnChange, checkinTimePriorValue, checkinTimePriorOnChange, registrationStartDateValue, registrationStartDateOnChange, registrationEndDateValue, registrationEndDateOnChange, errors  }) {

    return (
        <>
            <h3 className="title">Registration Details</h3>

            <div className="form-group-checkbox">
                <label>Allow Teams To Sign-Up</label>
                <Input type="checkbox" name="allow_team_signup" value={allowTeamSignupValue} onChange={allowTeamSignupOnChange} />
                {errors && errors.allow_team_signup && errors.allow_team_signup.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-checkbox">
                <label>Allow Individuals To Sign-Up</label>
                <Input type="checkbox" name="allow_individual_signup" value={allowUserSignupValue} onChange={allowUserSignupOnChange} />
                {errors && errors.allow_individual_signup && errors.allow_individual_signup.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-2">
                <label>Registration Start Date</label>
                <DateTimePicker onChange={registrationStartDateOnChange} value={registrationStartDateValue} />
                {errors && errors.registration_start_date && errors.registration_start_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group-time mb-2">
                <label>Registration End Date</label>
                <DateTimePicker onChange={registrationEndDateOnChange} value={registrationEndDateValue} />
                {errors && errors.registration_end_date && errors.registration_end_date.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Maximum Teams That Can Register</label>
                <Input type="number" name="max_registration_for_teams" value={maxTeamsValue} onChange={maxTeamsOnChange}  />
                <p className="small">Set a limit on how many teams that can register. 0 or blank is infinite amount.</p>
                {errors && errors.max_registration_for_teams && errors.max_registration_for_teams.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Maximum Users That Can Register</label>
                <Input type="number" name="max_registration_for_users" value={maxUsersValue} onChange={maxUsersOnChange}  />
                <p className="small">Set a limit on how many individual users that can register. 0 or blank is infinite amount.</p>
                {errors && errors.max_registration_for_users && errors.max_registration_for_users.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>Team Registration Price</label>
                <Input type="number" step="0.01" name="team_registration_price" value={teamRegistrationPriceValue} onChange={teamRegistrationPriceOnChange}  />
                <p className="small">Set the price for a teamto register. 0 or blank will allow free registration.</p>
                {errors && errors.team_registration_price && errors.team_registration_price.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group text-left">
                <label>User Registration Price</label>
                <Input type="number" step="0.01" name="individual_registration_price" value={userRegistrationPriceValue} onChange={userRegistrationPriceOnChange}  />
                <p className="small">Set the price for an individual user to register. 0 or blank will allow free registration.</p>
                {errors && errors.individual_registration_price && errors.individual_registration_price.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Enable Check-in</label>
                <Input type="checkbox" name="allow_individual_signup" value={enableCheckinValue} onChange={enableCheckinOnChange} />
                {errors && errors.allow_individual_signup && errors.allow_individual_signup.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

        </>
    );
}