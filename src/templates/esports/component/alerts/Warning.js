import React from "react";



export default function Warning({ message }) {
    return (
        <>
            <div className="alert alert-warning" role="alert">
                {message}
            </div>
        </>
    );
}
