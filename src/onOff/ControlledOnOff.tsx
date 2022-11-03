import React, {useState} from "react";

export type OnOffPropsType = {
    turn: boolean
    setTurn:(turn:boolean) => void
}
export const ControlledOnOff = (props: OnOffPropsType) => {

    const styleBlock = {
        display:'flex'
    }
    const styleOn = {
        width: '40px',
        height: '30px',
        border: 'green solid 1px',
        backgroundColor:props.turn ? 'green' : '',
    }
    const styleOff = {
        width: '40px',
        height: '30px',
        border: 'green solid 1px',
        backgroundColor: !props.turn ? 'red' : '',
    }
    const styleIndicator = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border:'green solid 1px',
        marginLeft:'40px',
        backgroundColor:!props.turn ? 'red' : 'green',
    }

    return (
        <div style={styleBlock}>
            <div style={styleOn} onClick={()=>props.setTurn(!props.turn)}>on</div>
            <div style={styleOff} onClick={()=>props.setTurn(!props.turn)}>off</div>
            <div style={styleIndicator}></div>
        </div>
        /*<div style={styleBlock}>
            <div style={styleOn}>on</div>
            <div style={styleOff}>off</div>
            <div style={styleIndicator}></div>
        </div>*/


    );
}