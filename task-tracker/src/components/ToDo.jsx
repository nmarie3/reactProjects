import React from 'react';
import EditTask from './EditTask';

const ToDo = ({task, index, taskList, setTaskList}) => {

    const handleDelete = itemID => {
      let removeIndex = taskList.indexOf(task);
      taskList.splice(removeIndex, 1);
      setTaskList((currentTasks => currentTasks.filter (todo => todo.id !== itemID)))
    }

  return (
    <>
        <div className="toDoContainer">
            <div className="taskContainer">
            <p>{task.projectName}</p>
            <EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <p>{task.taskDescription}</p>
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
