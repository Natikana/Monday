import React from "react";
import {PageTitleType} from "../pageTitle/PageTitle";

type AccordionPropsType = {
    setCollapsed:(collapsed: boolean) => void
    collapsed: boolean
}
type AccordionTitleType = {
    setCollapsed:() => void
    collapsed: boolean
}

export const Accordion = (props: PageTitleType & AccordionPropsType) => {
    /*return props.collapsed
        ? <div>
            <AccordionTitle title={props.title}/>
        </div>
        : <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>*/
    return <div>
        <AccordionTitle title={props.title} setCollapsed={()=>props.setCollapsed(!props.collapsed)} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
        {/*<AccordionBody/>*/}
       {/* <AccordionTitle title={props.title}/>
        {!props.collapsed && <AccordionBody/>}*/}
    </div>


}
const AccordionTitle = (props: PageTitleType & AccordionTitleType) => {
    return (<h3 onClick={props.setCollapsed}>{props.title}</h3>
    )
}
const AccordionBody = () => {
    return (<ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}