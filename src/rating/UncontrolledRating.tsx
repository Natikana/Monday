import React, {useState} from "react";

export type RatingType = {
    value?:number
}
export const UncontrolledRating = (props:RatingType) => {
    let [value, setValue] = useState<0 |1 |2 |3 |4 |5>(0)
    //0 |1 |2 |3 |4

    return  <div>
        <Star selected={value > 0} setValue={setValue} value={1}/>
        <Star selected={value > 1} setValue={setValue} value={2}/>
        <Star selected={value > 2} setValue={setValue} value={3}/>
        <Star selected={value > 3} setValue={setValue} value={4}/>
        <Star selected={value > 4} setValue={setValue} value={5}/>
    </div>
}

export type StarType = {
    selected:boolean
    value:0 |1 |2 |3 |4 |5
    setValue:(value:0 |1 |2 |3 |4 |5) => void
}
const Star = (props:StarType) => {
    const {selected, setValue, value} = props

    return  <span onClick={()=>setValue(value)}>{selected ? <b>Star </b> : 'Star '}</span>
}