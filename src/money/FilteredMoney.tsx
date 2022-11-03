import React, {useState} from "react";
import {Button, ButtonTitleType} from "../button/Button";

export type FilteredMoneyPropsType = {
    banknots: string
    value: number
    number: string
}
export type MainFilteredMoneyPropsType = {
    money: Array<FilteredMoneyPropsType>
    changeState: () => void

}
export const FilteredMoney = (props: MainFilteredMoneyPropsType) => {

    const {money,...rest} = props
    const [titleBanknots, setTitleBanknots] = useState<ButtonTitleType>('All')

    let changeMoney = money;
    if (titleBanknots === 'Dollars') changeMoney = money.filter(el => el.banknots === 'Dollars')
    if (titleBanknots === 'Rubles') changeMoney = money.filter(el => el.banknots === 'Rubles')

    const onClickHandlerFilter = (nameBtn:ButtonTitleType) => {
        setTitleBanknots(nameBtn)
    }

    return <>
        <ul>
            {changeMoney.map((el, index) => <li key={index}>
                <span>{el.banknots} </span>
                <span>{el.value} </span>
                <span>{el.number} </span>
            </li>)}
        </ul>
        {/*<button  onClick={()=>onClickHandlerFilter('Dollars')}>Dollars</button>
        <button  onClick={()=>onClickHandlerFilter('Rubles')}>Rubles</button>
        <button  onClick={()=>onClickHandlerFilter('All')}>All</button>*/}
        <Button title={'Dollars'} changeMoney={()=>onClickHandlerFilter('Dollars')} />
        <Button title={'Rubles'} changeMoney={()=>onClickHandlerFilter('Rubles')}/>
        <Button title={'All'} changeMoney={()=>onClickHandlerFilter('All')}/>
    </>
}