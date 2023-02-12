import React from "react";



export default function Info({ message }) {
    return (
        <>
            <div className="alert alert-info" role="alert">
                {message}
            </div>
        </>
    );
}
