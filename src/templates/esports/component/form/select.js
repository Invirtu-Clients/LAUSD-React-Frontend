import React from "react";

export default function Select({ children, name, className }) {

    return (
        <>
            <select name={name} className={className}>
                {children}
            </select>

        </>
    );
}