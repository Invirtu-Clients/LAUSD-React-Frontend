import React from "react";

export default function Input({ children, type, name, placeholder, className, value, id, onChange }) {

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
                defaultValue={value}
                onChange={onChange}
                />

        </>
    );
}