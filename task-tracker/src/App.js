import './App.css';
import { useState } from 'react';
import AddTask from './components/AddTask';
import ToDo from './components/ToDo';

function App() {
  const [taskList, setTaskList] = useState([]); {/*because we want an array*/}

  return (
    <>

    <h3>Task Tracker</h3>
    <div className="clickButton">
      <p>Click</p>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <p> to add a new task</p>
    </div>
      <h2>List of Tasks:</h2>
        {taskList.map((task, i) =>
        <>
          <ToDo key={i} task={task}/>
        </>
      )}
    </>
  );
}

export default App;
