import React from "react";

export default function Option({ children, type, name, value, className }) {

    
    return (
        <>
            <option name={name} className={className} value={value} >{children}</option>
        </>
    );
}