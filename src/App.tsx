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
        {id: 3, title: 'Task 3', isDone: true},
        {id: 4, title: 'Task 4', isDone: false},
        {id: 5, title: 'Task 5', isDone: true},
        {id: 6, title: 'Task 6', isDone: false}
    ])
  return (
    <div className="App">
      <ul>
          {task.map((task: TaskType) => (
              <li key={task.id}>{task.id + "---" + task.title} <input type={'checkbox'} checked={task.isDone}/></li>

          ))}
      </ul>
    </div>
  );
}

export default App;
