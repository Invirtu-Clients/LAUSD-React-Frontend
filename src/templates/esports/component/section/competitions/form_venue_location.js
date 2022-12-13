import React from "react";
import DateTimePicker from "react-datetime-picker";
import Danger from "../../alerts/Danger";
import Input from "../../form/input";
import Textarea from "../../form/textarea";

export default function VenueFormLocation({ addressLine1Value, addressLine1OnChange, addressLine2Value, addressLine2OnChange, locaclityValue, localityOnChange, provinceValue, provinceOnChange, postalValue, postalOnChange, countryValue, countryOnChange,  errors }) {

    return (
        <>

            <h3>Location</h3>
            <div className="form-group text-left">
                <label>Address Line 1</label>
                <Input type="text" name="address_line_1" value={addressLine1Value} onChange={addressLine1OnChange}  />
                {errors && errors.address_line_1 && errors.address_line_1.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Address Line 2</label>
                <Input type="text" name="address_line_2" value={addressLine2Value} onChange={addressLine2OnChange}  />
                {errors && errors.address_line_2 && errors.address_line_2.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>City/Locality</label>
                <Input type="text" name="locality" value={locaclityValue} onChange={localityOnChange}  />
                {errors && errors.locality && errors.locality.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>State/Providence</label>
                <Input type="text" name="province" value={provinceValue} onChange={provinceOnChange}  />
                {errors && errors.province && errors.province.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>
            <div className="form-group text-left">
                <label>Postcal Code</label>
                <Input type="text" name="postal_code" value={postalValue} onChange={postalOnChange}  />
                {errors && errors.postal_code && errors.postal_code.map(function (name, index) {
                    return <Danger message={name} key={index} />;
                })}
            </div>


        </>
    );
}