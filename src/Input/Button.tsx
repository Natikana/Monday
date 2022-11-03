import React from "react";


export type ButtonProps = {
    addMessageFromApp:() =>void
}

export const Button = (props:ButtonProps) => {

    const addMessageBtn = () => {
        props.addMessageFromApp()

    }
    return <>
        <button onClick={addMessageBtn}>+</button>
    </>
}