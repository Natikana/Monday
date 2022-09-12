import {TaskProps} from "../TodoList";
import {v1} from "uuid";

export const tasksReducer = (state:TaskProps[],action:tsarType) => {
    switch (action.type) {
        case "REMOVE TASK APP": {
            return state.filter(el => el.id !== action.preload.id)
        }
        case "ADDTASKAPP": {
            return [{id: v1(), title: action.preload.valueInput, isDone: false},...state]
        }
        case "CHECKTASKAPP": {
            return state.map(el => el.id === action.preload.id ? {...el,isDone:action.preload.check} : el)
        }
        default : return state
    }
}

type tsarType = removeTaskAppACType | addTaskAppAC |checkTaskAppAC
type removeTaskAppACType = ReturnType<typeof removeTaskAppAC>

export const removeTaskAppAC = (id:string) => {
    return {
        type: 'REMOVE TASK APP',
        preload: {id}
    } as const
}

type addTaskAppAC = ReturnType<typeof addTaskAppAC>
export const addTaskAppAC = (valueInput:string) => {
    return {
        type: 'ADDTASKAPP',
        preload: {valueInput}
    } as const
}
type checkTaskAppAC = ReturnType<typeof checkTaskAppAC>
export const checkTaskAppAC = (id:string,check:boolean) => {
    return {
        type: 'CHECKTASKAPP',
        preload: {id, check}
    } as const
}