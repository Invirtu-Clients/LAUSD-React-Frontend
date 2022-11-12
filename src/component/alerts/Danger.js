import React from "react";

export default function Danger({ message }) {
    return (
        <>
            <div className="alert alert-danger" role="alert">
                {message}
            </div>
        </>
    );
}
