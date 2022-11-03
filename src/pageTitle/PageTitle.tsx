import React from "react";
export type PageTitleType = {
    title:string
}
export const PageTitle = (props:PageTitleType) => {
    return <h3>{props.title}</h3>
}