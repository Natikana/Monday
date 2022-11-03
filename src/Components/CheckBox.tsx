import React, {ChangeEvent} from "react";

export type CheckBoxProps = {
    callBack:(checked:boolean) => void
    checked:boolean
}
export const CheckBox = (props:CheckBoxProps) => {
    const{callBack, checked} = props

    const onChangeHandlerCheck = (event:ChangeEvent<HTMLInputElement>) => {
        callBack(event.currentTarget.checked)
    }
    return (
        <input type="checkbox" onChange={onChangeHandlerCheck} checked={checked}/>
        )

}