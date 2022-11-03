import React from "react";
import cl from './OnOff.module.css'

export type OnOffPropsType = {
    turn:boolean
    title:string
    titleOff:string
}
export const OnOff = (props:OnOffPropsType) => {
    return (
        <div className={cl.all}>
            <div className={cl.block}>
                <span className={props.turn ? cl.green : cl.rectangle}>{props.title}</span>
                <span className={!props.turn ? cl.red : cl.rectangle}>{props.titleOff}</span>
            </div>
            <div className={props.turn ? cl.circleGreen : cl.circleRed}></div>
        </div>
         /*<div className={cl.all}>
             {props.turn && <div className={cl.block}>
                 <span className={cl.green}>{props.title}</span>
                <span className={cl.rectangle}>{props.titleOff }</span>
                 <div className={cl.circleGreen}></div>
            </div>}
             {!props.turn && <div className={cl.block}>
                 <span className={cl.rectangle}>{props.title}</span>
                 <span className={cl.red}>{props.titleOff}</span>
                 <div className={cl.circleRed}></div>
             </div>}
        </div>*/
       /* <div className={cl.all}>
            <div className={cl.block}>
                {props.turn && <span className={cl.green}>{props.title}</span>}
                <span className={cl.rectangle}>{props.turn ? props.titleOff : props.title}</span>
                {!props.turn && <span className={cl.red}>{props.titleOff}</span>}
            </div>
            <div className={props.turn ? cl.circleGreen : cl.circleRed}></div>
        </div>*/



    )
}