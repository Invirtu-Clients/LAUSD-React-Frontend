import React from "react";

export default function Select({ children, name, className }) {

    return (
        <>
            <select name={name} placeholder={placeholder} className={className}>
                {children}
            </select>

        </>
    );
}