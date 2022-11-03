import React, {ChangeEvent, useState} from "react"

export type UncontrolledInputProps = {
    addMessageFromApp:(newTitle:string) =>void
}

export const UncontrolledInput = (props:UncontrolledInputProps) => {
    const [message, setMessage] = useState<string>('')

    const onChangeInput = (e:ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }
    const addMessageBtn = () => {
        props.addMessageFromApp(message)
        setMessage('')
    }

    return (
        <div>
            <input value={message} onChange={onChangeInput}/>
            <button onClick={addMessageBtn}>+</button>
        </div>
    )
}