import React from "react";
export type StarType = {
    selected:boolean
    onClick:() => void
}
export type RatingType = {
    onClick:(value:ValuePropsType) => void
    value:ValuePropsType
}
export type ValuePropsType = 0 |1 |2 |3 |4 |5
export const Rating = (props:RatingType) => {
    const {value,onClick} = props
    return  <div>
        <Star selected={value > 0} onClick={()=>onClick(1)}/>
        <Star selected={value > 1} onClick={()=>onClick(2)}/>
        <Star selected={value > 2} onClick={()=>onClick(3)}/>
        <Star selected={value > 3} onClick={()=>onClick(4)}/>
        <Star selected={value > 4} onClick={()=>onClick(5)}/>
    </div>

    /*if (value === 1) return  <div>
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
    </div>
    if (value === 2) return  <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
    </div>
    if (value === 3) return  <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
        <Star selected={false} />

    </div>
    if (value === 4) return  <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={false} />
    </div>
    if (value === 5) return  <div>
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
        <Star selected={true} />
    </div>
    else return  <div>
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
        <Star selected={false} />
    </div>*/
}
const Star = (props:StarType) => {
    /*if (props.selected) return <span><b>Star </b></span>
    else return <span>Star </span>*/
    //props.selected = true
    const {selected,onClick} = props
    return <span onClick={onClick}>{ selected ? <b>Star </b> : 'Star '}</span>
}