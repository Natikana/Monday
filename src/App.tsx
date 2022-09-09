import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {TaskProps, TodoList} from "./TodoList";

function App() {

    const [tasks, setTask] = useState<TaskProps[]>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])
    const title = 'What to learn?'

    const removeTaskApp = (id:string) => {
        setTask(tasks.filter(el => el.id !== id))
    }
    const addTaskApp = (valueInput:string) => {
        let newTask = {id: v1(), title: valueInput, isDone: false}
        setTask([newTask,...tasks])
    }
    const checkTaskApp = (id:string,check:boolean) => {
        setTask(tasks.map(el => el.id === id ? {...el,isDone:check} : el))
        /*let newEl = tasks.find(el=> el.id === id)
        if (newEl) {
            newEl.isDone = check
            setTask([...tasks])
        }*/
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
