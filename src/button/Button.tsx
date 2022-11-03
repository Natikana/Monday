import React from "react";

export type ButtonTitleType = 'Dollars' | 'Rubles' | 'All'

export type ButtonPropsType = {
    changeMoney: () => void
    title:string
}

export const Button = (props: ButtonPropsType) => {

    const onClickHandlerBtn = () => {
        props.changeMoney()
    }
    return <button
        onClick={onClickHandlerBtn }>
        {props.title}
    </button>

}