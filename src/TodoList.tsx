import React, {ChangeEvent, KeyboardEvent, useReducer, useState} from 'react';
import classes from './TodoList.module.css'
import {filterReducer, onClickHandlerFilterAC} from "./reducers/filterReducer";

export type TaskProps = {
    id: string,
    title: string,
    isDone: boolean
}
export type TodoList = {
    tasks: TaskProps[]
    title:string
    removeTask: (id:string) => void
    addTask: (valueInput:string) => void
    checkTask: (id:string,check:boolean) => void
}
export type FilterProps = 'All' | 'Active'| 'Completed'

export const TodoList = (props:TodoList) => {
    const{title,tasks,removeTask, addTask, checkTask} = props
    //const[filter,setFilter] = useState<FilterProps>('All')
    const[filter,dispatchFilter] = useReducer(filterReducer,'All')
    const[message,setMessage] = useState('')
    const[error,setError] = useState<string | null >('')

    let filteredTasks = tasks

    if (filter === 'Active') filteredTasks = tasks.filter(el => !el.isDone)
    if (filter === 'Completed') filteredTasks = tasks.filter(el => el.isDone)

    const onClickHandlerFilter = (nameBtn:FilterProps) => {
        //setFilter(nameBtn)
        dispatchFilter(onClickHandlerFilterAC(nameBtn))
    }
    const onClickHandlerAddTask = () => {
        if (message.trim() !== '') {
            addTask(message.trim())
            setMessage('')
        }
        else setError('Title is required')

    }
    const onChangeHandlerAddTask = (event:ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setMessage(event.currentTarget.value)
    }
    const onPressEnter = (event:KeyboardEvent<HTMLInputElement>) => {
        return event.key === 'Enter' ? onClickHandlerAddTask() : ''
    }
    const onChangeHandlerCheck = (id:string, event:ChangeEvent<HTMLInputElement>) => {
        checkTask(id,event.currentTarget.checked)
    }
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    className={error ? classes.error : ''}
                    value={message}
                    onChange={onChangeHandlerAddTask}
                    onKeyDown={onPressEnter}
                />
                <button onClick={onClickHandlerAddTask}>+</button>
            </div>
            { error && <div className={classes.errorMessage}>{error}</div>}
            <ul>
                {filteredTasks.map(el => {
                    const onClickRemoveTask = () => {
                        removeTask(el.id)
                    }

                    return (
                        <li key={el.id}>
                            <button onClick={onClickRemoveTask}>x</button>
                            <input type="checkbox" checked={el.isDone} onChange={(event)=>onChangeHandlerCheck(el.id,event)}/>
                            <span>{el.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button className={filter === 'All' ? classes.btnColor : ''} onClick={()=>onClickHandlerFilter('All')}>All</button>
                <button className={filter === 'Active' ? classes.btnColor : ''} onClick={()=>onClickHandlerFilter('Active')}>Active</button>
                <button className={filter === 'Completed' ? classes.btnColor : ''} onClick={()=>onClickHandlerFilter('Completed')}>Completed</button>
            </div>
        </div>
    );
};
