import React, {useReducer} from 'react';
import './App.css';
import {v1} from "uuid";
import { TodoList} from "./TodoList";
import {addTaskAppAC, checkTaskAppAC, removeTaskAppAC, tasksReducer} from "./reducers/tasksReducer";

function App() {
    /*const [tasks, setTask] = useState<TaskProps[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])*/
    const [tasks, dispatchTasks] = useReducer(tasksReducer,[
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const title = 'What to learn?'

    const removeTaskApp = (id:string) => {
        //setTask(tasks.filter(el => el.id !== id))
        dispatchTasks(removeTaskAppAC(id))
    }
    const addTaskApp = (valueInput:string) => {
        /*let newTask = {id: v1(), title: valueInput, isDone: false}
        setTask([newTask,...tasks])*/
        dispatchTasks(addTaskAppAC(valueInput))
    }
    const checkTaskApp = (id:string,check:boolean) => {
        //setTask(tasks.map(el => el.id === id ? {...el,isDone:check} : el))
        /*let newEl = tasks.find(el=> el.id === id)
        if (newEl) {
            newEl.isDone = check
            setTask([...tasks])
        }*/
        dispatchTasks(checkTaskAppAC(id,check))
    }
    return (
        <div className="App">
            <TodoList
                title={title}
                tasks={tasks}
                removeTask={removeTaskApp}
                addTask={addTaskApp}
                checkTask={checkTaskApp}
            />
        </div>
    );
}

export default App;
