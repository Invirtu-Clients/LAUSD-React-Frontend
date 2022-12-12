import React from "react";

export default function Input({ children, type, name, placeholder, className, value, id, onChange, defaultValue, step }) {

    if(!type){
        type = 'text';
    }
    
    return (
        <>
            <input 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                className={className} 
                id={id} 
                value={value}
                defaultValue={defaultValue}
                onChange={onChange}
                step={step}
                />

        </>
    );
}