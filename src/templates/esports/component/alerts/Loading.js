import React, { useState } from "react";
import { BallTriangle } from 'react-loader-spinner'


export default function Loading() {


    return (
        <>
            <BallTriangle
                height={50}
                width={50}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle={{display: "inline"}}
                visible={true}
                />
        </>
    );
}