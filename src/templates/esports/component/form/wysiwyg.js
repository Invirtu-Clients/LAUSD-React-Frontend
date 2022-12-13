import React from "react";

import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Wysiwyg({ children, name, placeholder, className, value, id, onChange }) {
    
    return (
        <>
            <Editor
            name={name} 
            placeholder={placeholder} 
            className={className} 
            id={id} 
            //editorState={children}
            defaultContentState={children}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onChange}
            ></Editor>
        </>
    );
}