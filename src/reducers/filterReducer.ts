import {FilterProps} from "../TodoList";

export const filterReducer = (state:FilterProps, action:onClickHandlerFilterAC) => {
    switch (action.type) {
        case "ONCLICKHANDLERFILTER": {
            return action.preload.nameBtn
        }
        default: return state
    }

}
type onClickHandlerFilterAC = ReturnType<typeof onClickHandlerFilterAC>
export const onClickHandlerFilterAC = (nameBtn:FilterProps) => {
    return {
        type: 'ONCLICKHANDLERFILTER',
        preload: {nameBtn}
    } as const
}