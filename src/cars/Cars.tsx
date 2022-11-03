import React from "react";

export type CarsType = {
    manufacturer: string
    model: string
}
export type CarsMainType = {
    topCars:CarsType[]
}
export const Cars = (props:CarsMainType) => {
    const {topCars} = props
    return <ul>
        { topCars.map((el,index) => <li key={index}>
            <span>{el.model} </span>
            <span>{el.manufacturer}</span>
            </li>)}
    </ul>
}