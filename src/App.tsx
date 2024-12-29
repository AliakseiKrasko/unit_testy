import React, {useState} from 'react';

import './App.css';

type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
}

function App() {

    const [task, setTask] = useState<TaskType[]>([
        {id: 1, title: 'Task 1', isDone: false},
        {id: 2, title: 'Task 2', isDone: false},
        {id: 3, title: 'Task 3', isDone: false},
        {id: 4, title: 'Task 4', isDone: false},
        {id: 5, title: 'Task 5', isDone: false},
        {id: 6, title: 'Task 6', isDone: false}
    ])

    const removeHundler = (id: number) => {
        setTask(task.filter((t) => t.id !== id));
    }

    const checkedHundler = (id: number) => {
        setTask(task.map((t) => t.id === id? {...t, isDone: !t.isDone} : t));
    }

  return (
    <div className="App">
      <ul>
          {task.map((task: TaskType) => (
              <li style={{listStyle: 'none'}} key={task.id}>{task.title} <input type={'checkbox'} checked={task.isDone} onClick={()=>checkedHundler(task.id)}/><button onClick={()=>removeHundler(task.id)}>remove</button></li>

          ))}
      </ul>
    </div>
  );
}

export default App;
