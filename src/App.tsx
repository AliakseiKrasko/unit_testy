import React, {ChangeEvent, useState} from 'react';

import './App.css';
import {v1} from 'uuid';

type TaskType = {
    id: string;
    title: string;
    isDone: boolean;
}

function App() {

    const [task, setTask] = useState<TaskType[]>([
        {id: v1(), title: 'Task 1', isDone: false},
        {id: v1(), title: 'Task 2', isDone: false},
        {id: v1(), title: 'Task 3', isDone: false},
        {id: v1(), title: 'Task 4', isDone: false},
        {id: v1(), title: 'Task 5', isDone: false},
        {id: v1(), title: 'Task 6', isDone: false}
    ])

    const [newTask, setNewTask] = useState<string>('')

    const removeHundler = (id: string) => {
        setTask(task.filter((t) => t.id !== id));
    }

    const checkedHundler = (id: string) => {
        setTask(task.map((t) => t.id === id ? {...t, isDone: !t.isDone} : t));
    }

    const addTaskHundler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.currentTarget.value)

    }
    const onKeyDownAddTaskHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTask.trim() !== '') {
            const newTask: TaskType = {
                id: v1(),
                title: e.currentTarget.value,
                isDone: false,
            }
            setTask([newTask, ...task]);
            setNewTask('')
        }
    }

        return (
            <div className="App">
                <input type={'text'}
                       onChange={addTaskHundler}
                       value={newTask}
                       onKeyUp={onKeyDownAddTaskHandler}
                       placeholder='Add a task'
                />
                <ul>
                    {task.map((task: TaskType) => (
                        <li style={{listStyle: 'none'}} key={task.id}>{task.title} <input type={'checkbox'}
                                                                                          checked={task.isDone}
                                                                                          onChange={() => checkedHundler(task.id)}/>
                            <button onClick={() => removeHundler(task.id)}>remove</button>
                        </li>

                    ))}
                </ul>
            </div>
        );
    }


    export default App;
