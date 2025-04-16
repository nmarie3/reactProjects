import './App.css';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import ToDo from './components/ToDo';

function App() {
  const [taskList, setTaskList] = useState([]); {/*because we want an array*/}

      {/*retrieving from local storage effect*/}
  useEffect(() => {
    let array = localStorage.getItem("taskListStorage");

    if (array) {
      setTaskList(JSON.parse(array))
    }
  }, [])

  return (
    <>

    <h3>Task Tracker</h3>
    <div className="clickButton">
      <p>Click</p>
      <AddTask taskList={taskList} setTaskList={setTaskList}/>
      <p> to add a new task</p>
    </div>
      <h2>List of Tasks:</h2> {/*if .slice(0).reverse() it changes the map to appear in chronological order. but if you do, you can't use the index as the ToDo key below anymore*/}
        {taskList.map((task, i) =>
          <ToDo key={i} task={task} taskList={taskList} setTaskList={setTaskList}/>
      )}{/*below code if going chronological order. this will not work with the stopwatch though: 
        <ToDo key={new Date().getTime()} task={task} taskList={taskList} setTaskList={setTaskList}/>*/}
    </>
  );
}

export default App;
