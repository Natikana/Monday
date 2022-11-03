import React, {useState} from "react";
import {PageTitleType} from "../pageTitle/PageTitle";

type AccordionPropsType = {
    collapsed?: boolean
}

export const UncontrolledAccordion = (props: PageTitleType & AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <div>
        {/**/}<button onClick={() => {setCollapsed(!collapsed)}}>toggle</button>
        <AccordionTitle title={props.title} onClick={()=>setCollapsed(!collapsed)} />
        {!collapsed && <AccordionBody/>}
    </div>


}
export type AccordionTitleProps = {
    onClick:() => void

}
const AccordionTitle = (props: PageTitleType & AccordionTitleProps) => {
    return (<h3 onClick={()=>props.onClick()
    }>{props.title}</h3>
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