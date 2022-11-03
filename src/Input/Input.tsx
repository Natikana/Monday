import React, {ChangeEvent} from "react";
export type InputProps = {
    setTitle:(title:string) =>void
    title:string
}
export const Input = (props:InputProps) => {
    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return <>
            <input value={props.title} onChange={onChangeInput}/>

    </>
}