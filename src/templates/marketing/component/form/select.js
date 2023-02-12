import React from "react";

export default function Select({ children, name, className, onChange, value }) {

    return (
        <>
            <select name={name} className={className} onChange={onChange} value={value}>
                {children}
            </select>

        </>
    );
}