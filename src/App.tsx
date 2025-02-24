import React, {ChangeEvent, useState} from 'react';

import './App.css';
import {v1} from 'uuid';
import {Counter} from './components/Counter';
import {Array} from './components/Array';
import {Address} from './components/Address';
import {TextComponent} from './components/TextComponent';
import {Clock} from './components/Clock';
import {Text} from './components/Text';
import {Ref} from './components/Ref';

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

    const [newTask, setNewTask] = useState<string>('');
    const [isAccordionOpen, setAccordionOpen] = useState<boolean>(false);

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

    const accordionHundler = () => {
        setAccordionOpen(!isAccordionOpen);
    }

        return (
            <div className="App">
                <Ref />
                <Text/>
                <Clock />
                {/*<TextComponent />*/}
                {/*<Address name={"Alex"} address={''}/>*/}
                {/*<Array />*/}
                {/*<Counter />*/}
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
                <h1 style={{cursor: 'pointer'}} onClick={accordionHundler}>MyPhoto</h1>
                    {isAccordionOpen  && (
                        <img src={"https://i.pinimg.com/236x/61/d4/78/61d478e69294a5594514e0b22cf670ab.jpg"} />
                        )}
            </div>
        );
    }


    export default App;
