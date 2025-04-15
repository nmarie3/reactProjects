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
      <h2>List of Tasks:</h2> {/*.slice(0).reverse() below changes the map to appear in cronological order. but if you do, you can't use the index as the ToDo key below anymore*/}
        {taskList.slice(0).reverse().map((task, i) =>
        <>
          <ToDo key={new Date().getTime()} task={task} index= {i} taskList={taskList} setTaskList={setTaskList}/>
          {/*above code if not going cronological order: 
          <ToDo key={i} task={task} index= {i} taskList={taskList} setTaskList={setTaskList}/>*/}
        </>
      )}
    </>
  );
}

export default App;
