import React from 'react';
import EditTask from './EditTask';
import { useState, useEffect } from 'react';

const ToDo = ({task, index, taskList, setTaskList}) => {
    const [time, setTime] = useState(task.duration); {/*adding a timer*/} 
    {/*once duration is stored in local storage, you can change the (0) above to avoid the timer reverting to 0 when stopped*/}
    const [running, setRunning] = useState(false);


    useEffect(() => {
      let interval;
      if (running) {
        interval=setInterval(() => {
          setTime((prevTime) => prevTime + 10)
        }, 10)
      } else if (!running){
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running])

    {/*logging timer duration in local storage*/}
      const handleStop = () => {
        setRunning(false);

        let taskIndex = taskList.indexOf(task);
        taskList.splice(taskIndex, 1, {
          projectName: task.projectName,
          taskDescription: task.taskDescription,
          timestamp: task.timestamp,
          duration: time
        }); {/*the point of this above is mostly to to turn duration into "time"*/}

        localStorage.setItem("taskListStorage", JSON.stringify(taskList))
        window.location.reload();
      }


    const handleDelete = itemID => {
      let removeIndex = taskList.indexOf(task);
      taskList.splice(removeIndex, 1);
      {/*add below for local storage*/}
      localStorage.setItem("taskListStorage", JSON.stringify(taskList));
      window.location.reload();
      {/*this becomes unnecessacy once duration has been stored in local storage: 
        setTaskList((currentTasks => currentTasks.filter (todo => todo.id !== itemID)))*/}
    }

  return (
    <>
        <div className="toDoContainer">
            <div className="taskContainer">
            <p>{task.projectName}</p>
            <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <p>{task.taskDescription}</p>
            {/*timer area*/}
            <div>
              <div>
                {/*hour*/}
                <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
                {/*minute*/}
                <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                {/*second*/}
                <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                {/*miliseconds*/}
                <span>{("0" + Math.floor((time / 100) % 10)).slice(-2)}</span>
              </div>
              <div>
                {/*if you don't need to log the duration in local storage, you can keep Stop Button as this: onClick={() => {setRunning(false)}}*/}
                {running ? (
                  <button
                  onClick={handleStop}>Stop</button>
                  ) : (
                  <button
                  onClick={() => {setRunning(true)}}>Start</button>
                  )}
                  <button
                  onClick={() => {setTime(0)}}>Reset</button>
              </div>
            </div>
            <div className="deleteArea">
                <button className="deleteButton"
                onClick={handleDelete}>
                  Delete</button>
            </div>
        </div>
    </>
  )
}

export default ToDo
