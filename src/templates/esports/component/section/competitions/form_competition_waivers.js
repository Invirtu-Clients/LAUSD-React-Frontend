import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";
import Wysiwyg from "../../form/wysiwyg";

export default function CompetitionFormWaivers({ rulesValue, rulesOnChange, agreementValue, agreementOnChange, scheduleValue, scheduleOnChange, disqualifiersValue, disqualifiersOnChange, refundValue, refundOnChange, harassmentValue, harassmentOnChange, privacyValue, privacyOnChange, safteyValue, safteyOnChange, errors }) {

    return (
        <>
            <h3>Rules & Waivers</h3>
            <div className="form-group">
                <label>Rules</label>
                <Textarea name="rules" onChange={rulesOnChange} >{rulesValue}</Textarea>
                <p>Enter the tournament rules.</p>
                {errors && errors.rules && errors.rules.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Waiver Agreement (Optional)</label>
                <Textarea name="agreement" onChange={agreementOnChange} >{agreementValue}</Textarea>
                <p>Before a competitor is allow to enter or a user is allowed to attend, you can require them to complete a waiver agreement.</p>
                {errors && errors.agreement && errors.agreement.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Schedule (Optional)</label>
                <Textarea name="schedule" onChange={scheduleOnChange} >{scheduleValue}</Textarea>
                <p>Write out a schedule for the tournament, if any.</p>
                {errors && errors.schedule && errors.schedule.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Disqualifers (Optional)</label>
                <Textarea name="disqualifiers" onChange={disqualifiersOnChange} >{disqualifiersValue}</Textarea>
                <p>Specifiy the disqualifiers for the tournament, if any.</p>
                {errors && errors.disqualifiers && errors.disqualifiers.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Refund Policy (Optional)</label>
                <Textarea name="refund_policy" onChange={refundOnChange} >{refundValue}</Textarea>
                <p>Specify a refund policy for the tournament, if any.</p>
                {errors && errors.refund_policy && errors.refund_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Privacy Policy (Optional)</label>
                <Textarea name="privacy_policy" onChange={privacyOnChange} >{privacyValue}</Textarea>
                <p>Specify a privacy policy for the tournament, if any.</p>
                {errors && errors.privacy_policy && errors.privacy_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Harrassment Policy (Optional)</label>
                <Textarea name="harassment_policy" onChange={harassmentOnChange} >{harassmentValue}</Textarea>
                <p>Specify a privacy policy for the tournament, if any.</p>
                {errors && errors.harassment_policy && errors.harassment_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>

            <div className="form-group">
                <label>Saftey Policy (Optional)</label>
                <Textarea name="saftey_policy" onChange={safteyOnChange} >{safteyValue}</Textarea>
                <p>Specify a safety policy for the tournament, if any.</p>
                {errors && errors.saftey_policy && errors.saftey_policy.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


        </>
    );
}