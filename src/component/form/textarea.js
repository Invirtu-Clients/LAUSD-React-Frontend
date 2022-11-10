import React from "react";

export default function Textarea({ children, name, placeholder, className, value, id, onChange }) {
    
    return (
        <>
            <textarea 
            name={name} 
            placeholder={placeholder} 
            className={className} 
            id={id} 
            defaultValue={children}
            onChange={onChange}
            ></textarea>
        </>
    );
}