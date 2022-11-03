import React, {useState} from "react";

export type OnOffPropsType = {
    turn?: boolean
    setOn:(on:boolean) => void
    on:boolean
}
export const UncontrolledOnOff = (props:OnOffPropsType) => {
    let [turn, setTurn] = useState<boolean>(true)
    const styleBlock = {
        display:'flex'
    }
    const styleOn = {
        width: '40px',
        height: '30px',
        border: 'green solid 1px',
        backgroundColor:!turn ? 'green' : '',
    }
    const styleOff = {
        width: '40px',
        height: '30px',
        border: 'green solid 1px',
        backgroundColor: turn ? 'red' : '',

    }
    const styleIndicator = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        border:'green solid 1px',
        marginLeft:'40px',
        backgroundColor:turn ? 'red' : 'green',

    }
    const changeColorBtn = () => {
        setTurn(!turn)
        props.setOn(!props.on)
    }

    return (
        <div style={styleBlock}>
            <div style={styleOn} onClick={changeColorBtn}>on</div>
            <div style={styleOff} onClick={changeColorBtn}>off</div>
            <div style={styleIndicator}></div>
        </div>
        /*<div style={styleBlock}>
            <div style={styleOn}>on</div>
            <div style={styleOff}>off</div>
            <div style={styleIndicator}></div>
        </div>*/


    );
}