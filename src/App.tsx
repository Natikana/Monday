import React, {useState} from 'react';
import './App.css';
import {Cars, CarsType} from "./cars/Cars";
import {FilteredMoney, FilteredMoneyPropsType} from "./money/FilteredMoney";
import {Button} from "./Input/Button";
import {Input} from "./Input/Input";
import {Rating, ValuePropsType} from "./rating/Rating";
import {ControlledOnOff} from "./onOff/ControlledOnOff";
import {UncontrolledOnOff} from "./onOff/UncontrolledOnOff";

function App() {
    const topCars:CarsType[] = [
        {manufacturer:'BMW', model:'m5cs'},
        {manufacturer:'Mercedes', model:'e63s'},
        {manufacturer:'Audi', model:'rs6'}
    ]
    const [money, setMoney] = useState<Array<FilteredMoneyPropsType>>([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'Rubles', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'Rubles', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'Rubles', value: 50, number: ' v1234567890' },
    ])
    const filteredBanknots = () => {
        setMoney(money)
    }
    const onClickHandlerBtn = () => {
        setMoney(money)
    }
    let [a, setA] = useState<number>(1)
    const onClickHandlerNumber = () => {
        setA(++a)
    }
    const onClickHandlerDelete = () => {
        setA(0)
    }

    const [message, setMessage]= useState([
        {message:'message1'},
        {message:'message2'},
        {message:'message3'},
    ])
    const [title, setTitle] = useState<string>('')
    const addMessageApp = (newTitle:string) => {
        let newMessage = {message:newTitle}
        setMessage([newMessage,...message])
        setTitle('')
    }
   let [on, setOn] = useState<boolean>(true)
    let [value, setValue] = useState<ValuePropsType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [turn, setTurn] = useState<boolean>(false)


    return (
        <div>
            <UncontrolledOnOff setOn={setOn} on={on}/> {on.toString()}

            {message.map((el,index) => <div key={index}>
                <span>{el.message}</span>
            </div>)}

        </div>
    );
}
export default App;
